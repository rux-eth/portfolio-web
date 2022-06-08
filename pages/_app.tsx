import ScrollObserver from "@src/utils/scroll-observer";
import { wrapper } from "@utils/store";
import { AppProps } from "next/app";
import React from "react";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ScrollObserver>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </ScrollObserver>
  );
}

export default wrapper.withRedux(MyApp);
