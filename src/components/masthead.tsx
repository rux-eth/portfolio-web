import CircleIcon from "@mui/icons-material/Circle";
import { Stack } from "@mui/material";
import useMatchesMediaQuery from "@src/utils/hooks/useMatchesMediaQuery";
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
      className="h-screen flex flex-col items-center justify-center bg-black sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 30}vh)`,
      }}
    >
      <div className="absolute h-screen w-screen">
        <Image src={"/btc.png"} width={3840} height={2160} layout="fill" />
      </div>
      <div
        className="flex flex-col leading-1 items-center justify-center font-bold h-screen w-screen bg-black bg-cover mix-blend-darken text-center text-white"
        style={{
          transform: `translateY(-${progress * 20}vh)`,
        }}
      >
        {" "}
        {useMatchesMediaQuery("up", "md") ? (
          <>
            <span className="text-[21vw]">RUX.ETH</span>
            <span className="text-[5vw]">Full-Stack Software Engineer</span>
          </>
        ) : (
          <>
            <Stack
              fontSize={"35vw"}
              direction="column"
              alignItems={"center"}
              spacing={-3}
            >
              <span>RUX</span>
              <CircleIcon sx={{ width: "8vw", height: "8vh" }} />
              <span>ETH</span>
            </Stack>
          </>
        )}
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
