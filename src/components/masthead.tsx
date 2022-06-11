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
  return <Title />; /* (
    <div
      ref={refContainer}
      className="relative flex bg-black bg-cover h-screen content-center items-center justify-center text-center top-0 -z-15"
    >
      <div className="absolute w-[80vw] h-[50vh] m-auto">
        <Rain refContain={refContainer} variant={5} />
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            font: "SF Pro Display",
            fontSize: "10vw",
            fontWeight: "bold",
            margin: "0 auto",
            padding: "10px",
            width: "100%",
            textAlign: "center",
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            mixBlendMode: "darken",
          }}
        >
          Hello world
        </div>
      </div>
    </div>
  ); */ /* (
    <div className="fixed bg-black items-center justify-center p-5">
      <Icon className="mt-11 text-[12vw] md:text-[7vw] bg-black text-transparent font-bold">
        HI
      </Icon>
    </div>
  ); */
};
export default Masthead;
