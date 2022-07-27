import { ThemeProvider } from "@mui/material/styles";
import "@src/styles/global.css";
import { theme } from "@src/styles/theme";
import ResizeObserver from "@src/utils/resize-observer";
import ScrollObserver from "@src/utils/scroll-observer";
import { DAppProvider } from "@usedapp/core";
import { AppProps } from "next/app";
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <DAppProvider config={{}}>
      <ScrollObserver>
        <ResizeObserver>
          <ThemeProvider theme={theme}>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </ThemeProvider>
        </ResizeObserver>
      </ScrollObserver>
    </DAppProvider>
  );
}

export default MyApp;
