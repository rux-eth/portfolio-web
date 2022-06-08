const themeConstantsTW = {
  paper: "#F9F9F9",
  primary: {
    main: "#ffffff",
    dark: "#2f2f2f",
  },
  secondary: {
    main: "#2f2f2f",
    dark: "#ffffff",
  },
  error: {
    main: "#b22222",
    dark: "#8b0000",
  },
  fg: { main: "#fff", dark: "rgba(55, 65, 81, 1)" },
  breakpoints: {
    xs: "0px",
    mb: "350px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

const themeConstantsN = {
  paper: themeConstantsTW.paper,
  primary: themeConstantsTW.primary,
  secondary: themeConstantsTW.secondary,
  error: themeConstantsTW.error,
  fg: themeConstantsTW.fg,
  breakpoints: (() => {
    let prevBps = themeConstantsTW.breakpoints;
    type Breakpoints = {
      [key in keyof typeof prevBps]: number;
    };
    let bps: Breakpoints = ((): Breakpoints => {
      let b: { [key: string]: number } = {};
      let key: keyof typeof prevBps;
      for (key in prevBps) {
        const val: string = prevBps[key];
        b[key] = parseInt(prevBps[key].slice(0, -2));
      }
      return b as Breakpoints;
    })();
    return bps;
  })(),
};
export { themeConstantsN };
export default themeConstantsTW;
