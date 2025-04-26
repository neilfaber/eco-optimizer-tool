
/**
 * Website Scanner Service
 * Uses Google PageSpeed Insights API (free) to analyze websites
 * and Mozilla's Carbon Calculator API to estimate CO2 emissions
 */

// Google PageSpeed Insights API (free, no API key required for basic usage)
const PAGESPEED_API_URL = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

// Types for scan results
export interface ScanResult {
  url: string;
  ecoScore: number;
  carbonImpact: {
    grams: number;
    rating: string;
  };
  performance: {
    score: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    totalBlockingTime: number;
    cumulativeLayoutShift: number;
  };
  optimizations: Array<{
    id: string;
    title: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
  }>;
  hostingSuggestion?: string;
  greenCertification: boolean;
}

/**
 * Scans a website and provides eco and performance analysis
 * @param url URL to scan
 * @returns Promise with scan results
 */
export const scanWebsite = async (url: string): Promise<ScanResult> => {
  try {
    // Validate URL
    if (!url.startsWith('http')) {
      url = `https://${url}`;
    }
    
    // Get PageSpeed Insights data
    const pageSpeedUrl = `${PAGESPEED_API_URL}?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&category=best-practices`;
    const response = await fetch(pageSpeedUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to scan website: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Extract useful metrics from PageSpeed results
    const performanceScore = data.lighthouseResult?.categories?.performance?.score * 100 || 0;
    const firstContentfulPaint = data.lighthouseResult?.audits?.['first-contentful-paint']?.numericValue / 1000 || 0;
    const largestContentfulPaint = data.lighthouseResult?.audits?.['largest-contentful-paint']?.numericValue / 1000 || 0;
    const totalBlockingTime = data.lighthouseResult?.audits?.['total-blocking-time']?.numericValue || 0;
    const cumulativeLayoutShift = data.lighthouseResult?.audits?.['cumulative-layout-shift']?.numericValue || 0;
    
    // Extract optimization opportunities
    const audits = data.lighthouseResult?.audits || {};
    const optimizations = Object.keys(audits)
      .filter(key => audits[key].score !== null && audits[key].score < 0.9 && audits[key].details?.type === 'opportunity')
      .map(key => ({
        id: key,
        title: audits[key].title,
        description: audits[key].description,
        impact: getImpactLevel(audits[key].score)
      }))
      .slice(0, 5); // Limit to top 5 optimizations
    
    // Calculate eco score based on performance and best practices
    const bestPracticesScore = data.lighthouseResult?.categories?.['best-practices']?.score * 100 || 0;
    const resourceSize = calculateTotalResourceSize(data.lighthouseResult) / 1024; // in KB
    
    // Estimate carbon impact - simpler model without the actual API
    // In a real implementation, you might want to use the Website Carbon Calculator API or similar
    const carbonImpact = estimateCarbonImpact(resourceSize, performanceScore);
    
    // Calculate eco score - higher performance and lower resource size = better eco score
    const ecoScore = calculateEcoScore(performanceScore, bestPracticesScore, resourceSize);
    
    return {
      url,
      ecoScore,
      carbonImpact,
      performance: {
        score: performanceScore,
        firstContentfulPaint,
        largestContentfulPaint,
        totalBlockingTime, 
        cumulativeLayoutShift
      },
      optimizations,
      greenCertification: ecoScore >= 80,
    };
    
  } catch (error) {
    console.error('Website scan failed:', error);
    throw new Error('Failed to scan website. Please check the URL and try again.');
  }
};

// Helper functions
function getImpactLevel(score: number): 'high' | 'medium' | 'low' {
  if (score < 0.5) return 'high';
  if (score < 0.8) return 'medium';
  return 'low';
}

function calculateTotalResourceSize(lighthouseResult: any): number {
  try {
    return lighthouseResult?.audits?.['total-byte-weight']?.numericValue || 0;
  } catch (e) {
    return 0;
  }
}

function estimateCarbonImpact(resourceSizeKb: number, performanceScore: number): { grams: number; rating: string } {
  // Simple model: 1MB transfer = ~0.2g CO2, adjusted by performance score
  const resourceSizeMb = resourceSizeKb / 1024;
  const baseGrams = resourceSizeMb * 0.2;
  // Worse performance = more repeat views = more carbon
  const adjustedGrams = baseGrams * (2 - (performanceScore / 100));
  
  let rating;
  if (adjustedGrams < 0.5) rating = 'excellent';
  else if (adjustedGrams < 1) rating = 'good';
  else if (adjustedGrams < 2) rating = 'average';
  else rating = 'poor';
  
  return {
    grams: parseFloat(adjustedGrams.toFixed(2)),
    rating
  };
}

function calculateEcoScore(performanceScore: number, bestPracticesScore: number, resourceSizeKb: number): number {
  // Balance between performance (40%), best practices (30%) and resource size (30%)
  // Lower resource size is better (max 5MB considered as 0 points)
  const maxResourceSize = 5 * 1024; // 5MB in KB
  const resourceSizeScore = Math.max(0, 100 - (resourceSizeKb / maxResourceSize) * 100);
  
  const score = (performanceScore * 0.4) + (bestPracticesScore * 0.3) + (resourceSizeScore * 0.3);
  return Math.round(Math.min(100, Math.max(0, score)));
}
