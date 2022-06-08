import { ScrollContext } from "@src/utils/scroll-observer";
import Image from "next/image";
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
      className="h-screen flex flex-col items-center justify-center bg-black bg-center bg-contain sticky top-16 -z-30"
      style={{
        transform: `translateY(-${progress * 50}vh)`,
      }}
    >
      <div
        className="absolute"
        style={{
          transform: `translateY(${progress * 30}vh)`,
        }}
      >
        <Image src={"/btc.png"} width={3840} height={2160} />
      </div>
      <div className="flex flex-col font-bold h-screen w-screen bg-black bg-cover mix-blend-darken text-center text-white">
        <div className="flex flex-col leading-tight h-full w-full items-center justify-center">
          {" "}
          <div className="text-[21vw]">RUX.ETH</div>
          <div className="text-[5vw]">Full-Stack Software Engineer</div>
        </div>
      </div>
    </div>
    /*     <div
      ref={refContainer}
      className="h-screen w-screen flex flex-col items-center justify-center bg-[url('/btc.png')] bg-center bg-cover sticky top-16 -z-30"
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
          <div className="text-[20vw]">RUX.ETH</div>
          <div className="text-[3vw]">Full-Stack Software Engineer</div>
        </div>
      </div>
    </div> */
  );
};
export default Masthead;
