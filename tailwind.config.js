module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          mytheme: {
            50: '#fdf8f6',
            100: '#f2e8e5',
            200: '#eaddd7',
            300: '#e0cec7',
            400: '#d2bab0',
            500: '#bfa094',
            600: '#a18072',
            700: '#977669',
            800: '#846358',
            900: '#43302b',
          },
          mybgc: '#0f0a05',
          myyel: '#dca523',
          myhov: '#1d1814',
          myaltyel: '#27231e'
        },
        screens: {
          "other": {'min': '340px', 'max': '1200px'},
        }
      },
    plugins: [],
  }
}