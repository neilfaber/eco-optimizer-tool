
// Simulated user data service
// In a real application, this would connect to a backend API

interface UserProfile {
  name: string;
  email: string;
  ecoCredits: number;
  carbonSaved: number; // in kg
  optimizationsCompleted: number;
  joined: Date;
  websites: Website[];
  avatar?: string; // New field for user avatar
}

interface Website {
  url: string;
  initialScore: number;
  currentScore: number;
  carbonSaved: number; // in kg
  lastScan: Date;
  optimizationsDone: string[];
}

// Simulated initial user data
const generateInitialUserProfile = (): UserProfile => {
  const now = new Date();
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
  
  return {
    name: localStorage.getItem('userName') || 'Green User',
    email: localStorage.getItem('userEmail') || 'user@example.com',
    ecoCredits: 320,
    carbonSaved: 56.4,
    optimizationsCompleted: 7,
    joined: twoMonthsAgo,
    websites: [
      {
        url: 'example.com',
        initialScore: 62,
        currentScore: 84,
        carbonSaved: 42.1,
        lastScan: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        optimizationsDone: [
          'Image compression',
          'Browser caching',
          'CSS minification'
        ]
      },
      {
        url: 'myothersite.org',
        initialScore: 45,
        currentScore: 73,
        carbonSaved: 14.3,
        lastScan: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        optimizationsDone: [
          'Lazy loading images',
          'JavaScript minification',
          'WebP conversion',
          'Font optimization'
        ]
      }
    ]
  };
};

// Get user profile
export const getUserProfile = (): UserProfile => {
  const storedProfile = localStorage.getItem('userProfile');
  if (storedProfile) {
    const profile = JSON.parse(storedProfile);
    
    // Convert date strings back to Date objects
    profile.joined = new Date(profile.joined);
    profile.websites.forEach((site: Website) => {
      site.lastScan = new Date(site.lastScan);
    });
    
    return profile;
  }
  
  // If no profile exists, create and store a new one
  const newProfile = generateInitialUserProfile();
  localStorage.setItem('userProfile', JSON.stringify(newProfile));
  return newProfile;
};

// Update user avatar
export const updateUserAvatar = (avatarUrl: string): void => {
  const profile = getUserProfile();
  profile.avatar = avatarUrl;
  localStorage.setItem('userProfile', JSON.stringify(profile));
};

// Add eco credits to user
export const addEcoCredits = (amount: number): number => {
  const profile = getUserProfile();
  profile.ecoCredits += amount;
  localStorage.setItem('userProfile', JSON.stringify(profile));
  return profile.ecoCredits;
};

// Add carbon savings
export const addCarbonSavings = (amount: number): number => {
  const profile = getUserProfile();
  profile.carbonSaved += amount;
  localStorage.setItem('userProfile', JSON.stringify(profile));
  return profile.carbonSaved;
};

// Record optimization for a website
export const recordOptimization = (
  websiteUrl: string, 
  optimizationType: string, 
  scoreImprovement: number, 
  carbonSaved: number
): void => {
  const profile = getUserProfile();
  
  // Find the website or add it if it doesn't exist
  let website = profile.websites.find(site => site.url === websiteUrl);
  
  if (!website) {
    website = {
      url: websiteUrl,
      initialScore: 100 - scoreImprovement,
      currentScore: 100,
      carbonSaved: 0,
      lastScan: new Date(),
      optimizationsDone: []
    };
    profile.websites.push(website);
  }
  
  // Update website data
  website.currentScore = Math.min(website.currentScore + scoreImprovement, 100);
  website.carbonSaved += carbonSaved;
  website.lastScan = new Date();
  
  // Add optimization if not already done
  if (!website.optimizationsDone.includes(optimizationType)) {
    website.optimizationsDone.push(optimizationType);
  }
  
  // Update user profile totals
  profile.carbonSaved += carbonSaved;
  profile.optimizationsCompleted += 1;
  profile.ecoCredits += Math.round(carbonSaved * 5); // 5 credits per kg of CO2 saved
  
  // Save updated profile
  localStorage.setItem('userProfile', JSON.stringify(profile));
};

// Check if user is logged in
export const isUserLoggedIn = (): boolean => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

// Sign out user
export const signOut = (): void => {
  localStorage.removeItem('isLoggedIn');
};
