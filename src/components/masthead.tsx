import { ScrollContext } from "@src/utils/scroll-observer";
import React, { useContext, useRef } from "react";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return (
    <div
      ref={refContainer}
      className="h-screen w-screen flex flex-col items-center justify-center bg-[url('/crypto.png')] bg-center bg-cover sticky top-16 -z-30"
      style={{
        transform: `translateY(-${progress * 30}vh)`,
      }}
    >
      <div
        className="flex flex-col font-bold h-full w-full bg-black bg-cover mix-blend-darken text-center text-white"
        style={{
          transform: `translateY(-${progress * 20}vh)`,
        }}
      >
        <div className="flex flex-col leading-tight h-full w-full items-center justify-center">
          {" "}
          <div className="text-[5rem] sm:text-[6.25rem] md:text-[11rem] lg:text-[15rem] xl:text-[20rem] ">
            RUX.ETH
          </div>
          <div className="text-[1.25rem] sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[5rem]">
            Full-Stack Software Engineer
          </div>
        </div>
      </div>
    </div>
  );
};
export default Masthead;
