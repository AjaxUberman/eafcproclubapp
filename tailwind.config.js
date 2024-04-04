/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-yesil": "#15F5BA",
        "dark-theme": "#0C0C0C",
        "dark-theme-2": "#191919",
        "neon-sari": "#FFC700",
        "neon-mor": "#836FFF",
        "active-yesil": "#4CCD99",
        "slide-gray": "#352F44",
        "slide-medium": "#BED754",
        "slide-bad": "#750E21",
        "error-green": "#5C8374",
      },
      boxShadow: {
        "neon-box": "-1px 1px 16px 1px #15F5BA",
      },
      width: {
        "w-100px": "100px",
      },
    },
  },
  plugins: [],
};
