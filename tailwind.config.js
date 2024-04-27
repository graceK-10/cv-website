/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        // Add more colors as needed
      }),
},
  },
  plugins: [
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        // ...
  ],
}

