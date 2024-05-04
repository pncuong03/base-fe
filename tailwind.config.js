module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // color custom
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-400": "#9CA3AF",
        "gray-500": "#6B7280",
        "gray-600": "#4B5563",
        primary: "#BD28E0",
      },
      backgroundImage: {
        // Background image custom
        primary: "linear-gradient(157.6deg, #F626D1 21.14%, #822CF1 80.69%)",
        main: "linear-gradient(360deg, #FFE7E6 0%, #FFBFED 100%)",
      },
      fontSize: {
        // font size custom
      },
      boxShadow: {
        // box shadow custom
        main: "0px 5px 15px rgba(0, 0, 0, 0.1)"
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
