import CircleIcon from "@mui/icons-material/Circle";
import { Stack } from "@mui/material";
import useMatchesMediaQuery from "@src/utils/hooks/useMatchesMediaQuery";
import { ScrollContext } from "@src/utils/scroll-observer";
import Chance from "chance";
import Image from "next/image";
import { FC, RefObject, useContext, useRef } from "react";
import Rain from "./rain";
interface RainItem {
  path: string;
  scale: number;
  transX: number;
  rot: number;
  startX: number;
}
interface Pieces {
  [key: string]: JSX.Element;
}
interface RainProps {
  refContain: RefObject<HTMLDivElement>;
}

const chance = new Chance();
/* const getSeeds: string[] = [
  "btc-logo",
  "cssIcon",
  "expressJSIcon",
  "GitIcon",
].map((icon) => `/icons/${icon}.png`); */
const getSeeds = () =>
  [
    "cssIcon",
    "expressJSIcon",
    "GitIcon",
    "htmlIcon",
    "JavaIcon",
    "javascriptIcon",
    "JupyterIcon",
    "LinuxIcon",
    "nodeJSIcon",
    "pythonIcon",
    "cssIcon",
    "expressJSIcon",
    "GitIcon",
    "htmlIcon",
    "JavaIcon",
    "javascriptIcon",
    "JupyterIcon",
    "LinuxIcon",
    "nodeJSIcon",
    "pythonIcon",
  ]
    .map(
      (icon): RainItem => ({
        path: `/icons/${icon}.png`,
        scale: chance.floating({
          min: 0.7,
          max: 1.3,
          fixed: 2,
        }),
        transX: chance.integer({ min: -20, max: 20 }),
        rot: chance.floating({
          min: -0.5,
          max: 0.5,
          fixed: 2,
        }),
        startX: chance.integer({ min: -50, max: 200 }),
      })
    )
    .sort(() => Math.random() - 0.5);
const pieces = {
  R: getSeeds(),
  U: getSeeds(),
  X: getSeeds(),
  dot: undefined,
  E: getSeeds(),
  T: getSeeds(),
  H: getSeeds(),
};
const coins = [
  "/icons/btc-logo.png",
  "/icons/btc-logo.png",
  "/icons/btc-logo.png",
  "/icons/btc-logo.png",
  "/icons/btc-logo.png",
];

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

    Object.entries(pieces).forEach(([p, items]) => {
      pieceMap.set(
        p,
        p !== "dot" ? (
          <div
            className="relative min-w-[25vw]"
            /* style={{
              overflow: "hidden",
            }} */
          >
            <Rain refContain={refContainer} variant={5} />

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
          <div className="relative " style={{ overflow: "hidden" }}>
            <div
              className=" bg-black absolute bottom-0 m-2"
              style={{ transform: `translateY(${progress * 110}%)` }}
            >
              <Stack direction={"column"} spacing={3}>
                {coins.map((c) => (
                  <Stack>
                    <Image
                      key={c}
                      src={c}
                      width={"500"}
                      height={"500"}
                      style={{ padding: "10vw" }}
                    />
                  </Stack>
                ))}
              </Stack>
            </div>

            <div className="bg-black bg-cover text-white mix-blend-darken font-bold">
              <CircleIcon className="md:mb-7 text-[12vw] md:text-[7vw]" />
            </div>
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
      className="h-screen flex flex-col items-center justify-center text-center bg-black sticky top-0 -z-10"
      style={{ transform: `translateY(-${progress * 30}vh)` }}
    >
      <div className="relative w-[80vw] h-[50vh] m-auto">
        <div
          className="absolute top-[50%] left-[50%]"
          style={{ transform: "translate(-50%,-50%)" }}
        >
          {useMatchesMediaQuery("up", "md") ? (
            <Stack direction={"row"} spacing={4} fontSize={"18vw"}>
              {Object.values(allPieces).map((elem) => elem)}
            </Stack>
          ) : (
            <>
              <Stack
                bgcolor={"black"}
                spacing={1}
                direction={"row"}
                fontSize={"30vw"}
              >
                {Object.values(allPieces)
                  .slice(0, 3)
                  .map((elem) => elem)}
              </Stack>
              {/* <Stack direction={"row"}>{allPieces.dot}</Stack> */}
              <Stack
                bgcolor={"black"}
                spacing={1}
                direction={"row"}
                fontSize={"30vw"}
              >
                {Object.values(allPieces)
                  .slice(4)
                  .map((elem) => elem)}
              </Stack>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export { Title };
