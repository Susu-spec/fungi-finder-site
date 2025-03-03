/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html", "./src/**/*.js", "./public/*.html"],
    theme: {
        extend: {
          colors: {
              brown: {
                  100: "#423D3C",
                  200: "#383231",
                  300: "#2D2726",
                  400: "#292424",
                  500: "#221E1E",
                },
                primary: {
                  DEFAULT: "#F59C5C",
                  light: "#F7B687",
                },
                gray: "#CBC9C9",
                accent: {
                  DEFAULT: "#3B8256",
                  light: "#659477",
                  dark: "#23412F",
                },
                red: "#7E3E3F",
                orange: "#875C36",
                teal: "#377E86",
          },
          fontFamily: {
              fira: ['"Fira Sans"', 'serif'],
              outfit: ['"Outfit"', 'serif'],
          },
          fontSize: {
              'headingLg': ['2rem', { lineHeight: '35.2px' }],
              'title': ['3.75rem'],
              'titleMd': ['5rem'],
              'titleSmall': ['4rem', { lineHeight: '4.25rem'}],
              'titleLarge': ['6.5rem', { lineHeight: '6.25rem'}],
              'heading': ['2.25rem'],
              'bodyLg': ['1.25rem', { lineHeight: '2.5rem'}],
              'bodyMd': ['1.125rem'],
              'bodyReg': ['1rem', { lineHeight: '25.6px'}]
          },
          fontWeight: {
            'h1': 'bold',
          },
        },
      },
      plugins: [],
  }

//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}"
//   ],