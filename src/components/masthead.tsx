import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stack } from "@mui/material";
import useMatchesMediaQuery from "@src/utils/hooks/useMatchesMediaQuery";
import { ScrollContext } from "@src/utils/scroll-observer";
import React, { useContext, useRef } from "react";
import Rain, { Slot } from "./rain";

interface Pieces {
  [key: string]: JSX.Element;
}

const pieces = ["R", "U", "X", "dot", "E", "T", "H"];
const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const allPieces = ((): Pieces => {
    let pieceMap: Map<String, JSX.Element> = new Map();

    pieces.forEach((p, index) => {
      pieceMap.set(
        p,
        p !== "dot" ? (
          <div className="relative text-[30vw] sm:text-[15vw]">
            <Rain refContain={refContainer} variant={index} />

            <div
              style={{
                backgroundColor: "black",
                color: "white",
                font: "SF Pro Display",
                fontWeight: "bold",
                textAlign: "center",
                mixBlendMode: "darken",
              }}
            >
              {p}
            </div>
          </div>
        ) : (
          <div className="relative h-[10vw] w-[10vw] self-center justify-self-center">
            <Slot refContain={refContainer} />
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                font: "SF Pro Display",
                fontWeight: "bold",
                textAlign: "center",
                mixBlendMode: "darken",
              }}
            ></div>
          </div>
        )
      );
    });
    return Object.fromEntries(pieceMap) as Pieces;
  })();
  return (
    <div
      ref={refContainer}
      className=" h-screen flex items-center justify-center text-center bg-black sticky top-0 -z-10"
      style={{ transform: `translateY(-${progress * 30}vh)` }}
    >
      {useMatchesMediaQuery("up", "sm") ? (
        <Stack direction={"row"} spacing={2} fontSize={"18vw"}>
          {Object.values(allPieces).map((elem) => elem)}
        </Stack>
      ) : (
        <Stack direction={"column"} spacing={1}>
          <Stack direction={"row"}>
            {Object.values(allPieces)
              .slice(0, 3)
              .map((elem) => (
                <div className="min-w-[25vw]">{elem}</div>
              ))}
          </Stack>
          <Stack className="flex items-center">{allPieces.dot}</Stack>
          <Stack direction={"row"}>
            {Object.values(allPieces)
              .slice(4)
              .map((elem) => (
                <div className="min-w-[25vw]">{elem}</div>
              ))}
          </Stack>
        </Stack>
      )}
      <div
        className={`absolute bottom-5 flex-grow-0 transition-all duration-1000`}
      >
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          <div className="text-2xl text-white">TL;DR</div>
          <ArrowForwardIosIcon
            style={{ color: "white", transform: "rotate(0.25turn) scale(2)" }}
          />
        </Stack>
      </div>
    </div>
  );
};
export default Masthead;
