/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        hover: "hover 3s ease-in-out infinite",
      },
      keyframes: {
        hover: {
          "0%, 100%": { transform: "translateY(0vh)" },
          "50%": { transform: "translateY(2vh)" },
        },
      },
    },
  },
  plugins: [],
};
