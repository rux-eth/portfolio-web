import { ScrollContext } from "@src/utils/scroll-observer";
import React, { useContext, useRef } from "react";
import { Title } from "./title";
// import { Parallax } from "./parallax";
const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return <Title />;
};
export default Masthead;
