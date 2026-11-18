/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    colors: { page: "#111111", accent: "#FD6F00", muted: "#959595" },
    fontFamily: { lato: ["var(--font-lato)", "Arial", "sans-serif"] },
    boxShadow: { orange: "0 8px 24px rgba(253,111,0,.18)" }
  }},
  plugins: [],
};