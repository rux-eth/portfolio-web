import "@src/styles/global.css";
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
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </ResizeObserver>
      </ScrollObserver>
    </DAppProvider>
  );
}

export default MyApp;
