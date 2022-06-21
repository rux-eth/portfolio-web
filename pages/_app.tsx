import ResizeObserver from "@src/utils/resize-observer";
import ScrollObserver from "@src/utils/scroll-observer";
import { wrapper } from "@utils/store";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ParallaxProvider>
      <ScrollObserver>
        <ResizeObserver>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </ResizeObserver>
      </ScrollObserver>
    </ParallaxProvider>
  );
}

export default wrapper.withRedux(MyApp);
