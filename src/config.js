module.exports = {
  siteTitle: 'William Sakmar',
  siteDescription:
    'William Sakmar is an aspiring investment analyst based in New York, NY and Stockholm, Sweden.',
  siteKeywords:
    'William Sakmar, William, Sakmar, williamsakmar, Investment, Finance, Analyst, hedge fund analyst, credit analyst, python, java, stockholm, new york',
  siteUrl: 'https://willsakmar.github.io/',
  siteLanguage: 'en_US',
  googleVerification: '',
  name: 'William Sakmar',
  location: 'New York, NY',
  email: 'willsakmar@gmail.com',
  github: 'https://github.com/willsakmar',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/willsakmar',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/williamsakmaraberg',
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/willsakmar',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
