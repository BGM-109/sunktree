module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        iphone: "1 / 1.5 ",
      },
      backgroundImage: {
        lg_poster: "url('img/lg_poster.jpeg')",
        sm_poster: "url('img/poster.jpeg')",
      },
    },
  },
  plugins: [],
};
