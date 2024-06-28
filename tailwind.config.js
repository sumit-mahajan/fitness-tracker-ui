/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "card-color": "#1b1b1c",
        "background-color": "#101014",
        "txt-color-secondary": "#84888B",
        primary: "#E0C5DC",
        secondary: "#E7DCF4",
        tertiary: "#F2EEE9",
        quaternary: "#AEE8FF",
        "card-hover-color": "#2B2B2E",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
        fadeInOut: {
          "0%": { opacity: "0" },
          "30%": { opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        fadeInOut: "fadeInOut 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
