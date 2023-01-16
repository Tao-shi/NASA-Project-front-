/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'ibmplexsans': ['IBM Plex Sans'],
      'manrope': ['Manrope'],
      'poppins': ['Poppins']
    },
    colors: {
      appcolorblack: '#0B0A0A',
      appcolorblue: '#07387C',
      appcolorred: '#D00808',
      appcolorgrey: '#595F67',
      appcoloryellow: '#F1C34C',
      appcolorwhite: '#FFFFFF',
      appcolorshade: '#EFF2F8',
      appcolordeepblue: '#3868E0',
      appcolorlightblue: '#156CF7',
      appcolorfaint: '#F6F6F6',
      appcolorgray: "#C4C4C4",
      appcolorlightgray: '#F4F4F5',
      appcolorgreen: '#4DCA52',
      appcoloroverlayblack: 'rgba(0,0,0,.45)',
      appcolordeepwhite: '#C5C5C7',
      appcolorlightharsh: '#979797'
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      'bankcard': "url('/src/assets/backgrounds/bankcard.png')",
      'walletcard': "url('/src/assets/backgrounds/mywallet.png')",
      'nowalletcard': "url('/src/assets/backgrounds/nowallet.png')",
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
