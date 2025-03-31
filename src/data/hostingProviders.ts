
// Green hosting providers data

export interface GreenHost {
  name: string;
  logo: string;
  energySource: string;
  url: string;
}

export const greenHosts: GreenHost[] = [
  {
    name: 'GreenGeeks',
    logo: 'https://www.greengeeks.com/assets/GreenGeeks_Logo.png',
    energySource: '300% Renewable Energy',
    url: 'https://www.greengeeks.com'
  },
  {
    name: 'A2 Hosting',
    logo: 'https://www.a2hosting.com/assets/images/a2-hosting-logo.svg',
    energySource: '100% Renewable Energy',
    url: 'https://www.a2hosting.com'
  },
  {
    name: 'DreamHost',
    logo: 'https://www.dreamhost.com/assets/images/logo.svg',
    energySource: '100% Carbon Neutral',
    url: 'https://www.dreamhost.com'
  }
];
