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
        "txt-color-secondary": "#5C5B5B",
      },
    },
  },
  plugins: [],
};
