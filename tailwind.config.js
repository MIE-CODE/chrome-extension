/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hngblack: "#052011",
        hc: "#00894C",
      },
      fontFamily: {
        worksans: [" 'Work Sans', sans-serif"],
        sora: ["'Sora', sans-serif"],
        body: ["Manrope"],
      },
    },
  },
  plugins: [],
};
