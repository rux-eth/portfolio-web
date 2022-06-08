import { themeConstants as tc } from "./styles/theme";
const defaultTheme = require("tailwindcss/defaultTheme");

let themeConstants = tc;
for (const val in themeConstants.breakpoints) {
  themeConstants.breakpoints[val] = `${val}px`;
}

module.exports = {
  mode: "jit",
  purge: ["./pages/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        paper: themeConstants.paper,
        primary: themeConstants.primary,
        secondary: themeConstants.secondary,
        error: themeConstants.error,
        fg: themeConstants.fg.main,
        "fg-dark": themeConstants.fg.dark,
      },
    },

    // We over ride the whole screens with breakpoints for width. The 'ha' breakpoint will help us in blocking hover animations on devices not supporting hover.
    screens: {
      ...defaultTheme.screens,
      ...themeConstants.breakpoints,
      ha: { raw: "(hover: hover)" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
