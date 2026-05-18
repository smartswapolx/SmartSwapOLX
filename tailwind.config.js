/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1d232a",
        paper: "#fbfaf7",
        campus: "#168a68",
        mango: "#f5b642",
        coral: "#eb6b56",
        lagoon: "#2a9db0"
      },
      boxShadow: {
        soft: "0 14px 45px rgba(29, 35, 42, 0.08)"
      }
    }
  },
  plugins: []
};
