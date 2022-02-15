module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Switzer-Variable", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
