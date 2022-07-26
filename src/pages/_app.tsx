import "@src/styles/global.css";
import ResizeObserver from "@src/utils/resize-observer";
import ScrollObserver from "@src/utils/scroll-observer";
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
    <ScrollObserver>
      <ResizeObserver>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </ResizeObserver>
    </ScrollObserver>
  );
}

export default MyApp;
