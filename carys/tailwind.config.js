/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ecff",
          200: "#bcdcfe",
          300: "#90c5fd",
          400: "#60a7fb",
          500: "#3b82f6",   // soft blue for CTAs
          600: "#2563eb",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
