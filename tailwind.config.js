/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          primary: "#6EC1E4",
          secondary: "#8ED1C6",
          accent: "#C8A2C8",
          background: "#F7FAFC",
        },
      },
    },
  },
  plugins: [],
};
