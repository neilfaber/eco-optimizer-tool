
// Service for website scanning and analysis

interface ScanResult {
  url: string;
  score: number;
  emissions: {
    gCO2PerVisit: number;
    annualEmissions: number;
    potentialSavings: number;
  };
  performance: {
    loadTime: number;
    pageSize: number;
    requests: number;
    potentialImprovement: number;
  };
  hosting: {
    isGreen: boolean;
  };
  optimizations: Optimization[];
}

export interface Optimization {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: string;
  co2Saving: number;
  implemented: boolean;
}

// Simulate basic website analysis
export const scanWebsite = async (url: string): Promise<ScanResult> => {
  console.log(`Scanning website: ${url}`);
  
  // Simulate network delay to mimic real scanning
  await new Promise(resolve => setTimeout(resolve, 2500));
  
  // Generate a consistent but seemingly random score based on the URL
  const urlHash = hashString(url);
  
  // Base score from 45-75
  const baseScore = 45 + (urlHash % 30);
  
  // Calculate page size - between 1MB and 4MB
  const pageSize = 1000000 + (urlHash % 3000000);
  
  // Calculate load time - between 2s and 6s
  const loadTime = 2 + (urlHash % 4);
  
  // Calculate requests - between 30 and 80
  const requests = 30 + (urlHash % 50);
  
  // Calculate CO2 per visit - between 1g and 3g
  const gCO2PerVisit = 1 + ((urlHash % 20) / 10);
  
  // Determine if hosting is green - about 30% chance
  const isGreenHosting = (urlHash % 10) < 3;
  
  // Generate optimizations based on the URL
  const optimizations = generateOptimizations(url, urlHash);
  
  return {
    url,
    score: baseScore,
    emissions: {
      gCO2PerVisit,
      annualEmissions: (gCO2PerVisit * 100000) / 1000, // Assumes 100k annual visits
      potentialSavings: 35 + (urlHash % 40) // Between 35% and 75%
    },
    performance: {
      loadTime,
      pageSize,
      requests,
      potentialImprovement: (loadTime / 2) + 0.3 // Potential improvement is ~50% of current time
    },
    hosting: {
      isGreen: isGreenHosting
    },
    optimizations
  };
};

// Generate consistent hash from string
const hashString = (str: string): number => {
  let hash = 0;
  if (str.length === 0) return hash;
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return Math.abs(hash);
};

// Generate optimizations based on URL
const generateOptimizations = (url: string, hash: number): Optimization[] => {
  // Create a set of possible optimizations
  const allOptimizations: Optimization[] = [
    {
      id: '1',
      title: 'Compress JPG and PNG images',
      description: 'Your site has unoptimized images that could be compressed without quality loss.',
      impact: 'high',
      category: 'Images',
      co2Saving: 15 + (hash % 15),
      implemented: false
    },
    {
      id: '2',
      title: 'Enable browser caching',
      description: 'Setting proper cache headers can reduce repeat downloads and save bandwidth.',
      impact: 'medium',
      category: 'Performance',
      co2Saving: 8 + (hash % 12),
      implemented: false
    },
    {
      id: '3',
      title: 'Minify JavaScript and CSS',
      description: 'Removing whitespace and comments can reduce file sizes by ~20%.',
      impact: 'medium',
      category: 'Code',
      co2Saving: 5 + (hash % 10),
      implemented: false
    },
    {
      id: '4',
      title: 'Convert images to WebP format',
      description: 'WebP offers superior compression and quality compared to JPG and PNG.',
      impact: 'high',
      category: 'Images',
      co2Saving: 12 + (hash % 12),
      implemented: false
    },
    {
      id: '5',
      title: 'Implement lazy loading for below-the-fold images',
      description: 'Only load images when they\'re about to enter the viewport.',
      impact: 'medium',
      category: 'Images',
      co2Saving: 7 + (hash % 10),
      implemented: false
    },
    {
      id: '6',
      title: 'Replace custom fonts with system fonts',
      description: 'System fonts don\'t require additional downloads and render faster.',
      impact: 'low',
      category: 'Fonts',
      co2Saving: 3 + (hash % 5),
      implemented: false
    },
    {
      id: '7',
      title: 'Optimize third-party scripts',
      description: 'Reduce or defer third-party scripts that block rendering.',
      impact: 'high',
      category: 'Performance',
      co2Saving: 10 + (hash % 15),
      implemented: false
    },
    {
      id: '8',
      title: 'Enable text compression',
      description: 'Use GZIP or Brotli compression for text-based assets.',
      impact: 'medium',
      category: 'Performance',
      co2Saving: 6 + (hash % 8),
      implemented: false
    },
    {
      id: '9',
      title: 'Implement server-side rendering',
      description: 'SSR can improve loading time and reduce client-side processing.',
      impact: 'medium',
      category: 'Architecture',
      co2Saving: 8 + (hash % 7),
      implemented: false
    },
    {
      id: '10',
      title: 'Use responsive images',
      description: 'Serve appropriately sized images based on device characteristics.',
      impact: 'high',
      category: 'Images',
      co2Saving: 14 + (hash % 10),
      implemented: false
    }
  ];
  
  // Select 4-7 optimizations based on hash
  const numOptimizations = 4 + (hash % 4);
  const selectedOptimizations: Optimization[] = [];
  
  // Ensure we don't select duplicate optimizations
  const indices = new Set<number>();
  while (indices.size < numOptimizations) {
    indices.add(hash % 10);
    hash = Math.floor(hash / 3);
  }
  
  indices.forEach(index => {
    selectedOptimizations.push(allOptimizations[index]);
  });
  
  return selectedOptimizations;
};

// Store scan results in localStorage for persistence between page refreshes
export const storeScanResult = (scanResult: ScanResult): void => {
  localStorage.setItem('lastScanResult', JSON.stringify(scanResult));
};

// Retrieve last scan result
export const getLastScanResult = (): ScanResult | null => {
  const storedResult = localStorage.getItem('lastScanResult');
  return storedResult ? JSON.parse(storedResult) : null;
};
