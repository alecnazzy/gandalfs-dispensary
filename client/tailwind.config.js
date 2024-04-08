/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        md: "6px 5px 10px -10px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
