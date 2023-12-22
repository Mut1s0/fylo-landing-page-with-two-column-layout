/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "hsl( 243, 87%, 12% )",
        desaturatedBlue: "hsl( 238, 22%, 44% )",
        brightBlue: "hsl( 224, 93%, 58% )",
        modernCyan: "hsl( 170, 45%, 43% )",
        lightGrayishBlue: "hsl( 240, 75%, 98% )",
        lightGray: "hsl( 0, 0%, 75% )"
      },
      fontFamily: {
        // Headings, Call-to-action, Header Navigation
        raleway: [ 'Raleway', "sans-serif" ],
        // Body
        openSans: [ 'Open Sans', 'sans-serif' ]
      },
      fontWeight: {
        regularRaleway: "400",
        bold: "700",
        regularOpenSans: "400"
      }
    },
  },
  plugins: [],
}

