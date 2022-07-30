module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Oxygen: ["Oxygen", "sans-serif"],
        "Oxygen-Mono": ["Oxygen Mono", "monospace"]
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        }
      },
      animation: {
        blink: "blink 0.5s infinite ease"
      },
      fontSize: {
        heroName: "clamp(40px, 8vw ,80px)"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
