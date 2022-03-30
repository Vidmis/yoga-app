module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        86: "22rem",
        204: "46rem",
      },
      backgroundImage: {
        accent: "url('/src/images/accent.png')",
      },
    },
  },
  plugins: [],
};
