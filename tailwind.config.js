module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.1em",
      wider: "0.4em",
      widerxl: "0.6em",
      widest: "0.8em",
    },
    extend: {
      colors: {
        primaryblue: "#78e4ff",
        primarypink: "#ff48fa",
      },
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7118759521e3184778a3b5e010e202c6')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
