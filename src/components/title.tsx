import { Stack } from "@mui/material";
import useMatchesMediaQuery from "@src/utils/hooks/useMatchesMediaQuery";
import { ScrollContext } from "@src/utils/scroll-observer";
import Chance from "chance";
import { FC, useContext, useRef } from "react";
import Rain, { Slot } from "./rain";

interface Pieces {
  [key: string]: JSX.Element;
}

const chance = new Chance();

const pieces = ["R", "U", "X", "dot", "E", "T", "H"];
const Title: FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  const buildElem = (): Pieces => {
    let pieceMap: Map<String, JSX.Element> = new Map();

    pieces.forEach((p, index) => {
      pieceMap.set(
        p,
        p !== "dot" ? (
          <div className="relative">
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
  };
  const allPieces = buildElem();
  return (
    <div
      ref={refContainer}
      className="h-screen flex items-center justify-center text-center bg-black sticky top-0 -z-10"
      style={{ transform: `translateY(-${progress * 30}vh)` }}
    >
      <div className="relative">
        <div className="absolute" style={{ transform: "translate(-50%,-50%)" }}>
          {useMatchesMediaQuery("up", "md") ? (
            <Stack direction={"row"} spacing={4} fontSize={"18vw"}>
              {Object.values(allPieces).map((elem) => elem)}
            </Stack>
          ) : (
            <div className="flex flex-col">
              <Stack
                bgcolor={"black"}
                spacing={1}
                direction={"row"}
                fontSize={"30vw"}
              >
                {Object.values(allPieces)
                  .slice(0, 3)
                  .map((elem) => (
                    <div className="min-w-[25vw]">{elem}</div>
                  ))}
              </Stack>
              <Stack className="flex items-center">{allPieces.dot}</Stack>
              <Stack
                bgcolor={"black"}
                spacing={1}
                direction={"row"}
                fontSize={"30vw"}
              >
                {Object.values(allPieces)
                  .slice(4)
                  .map((elem) => (
                    <div className="min-w-[25vw]">{elem}</div>
                  ))}
              </Stack>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { Title };
