import CircleIcon from "@mui/icons-material/Circle";
import { Stack } from "@mui/material";
import useMatchesMediaQuery from "@src/utils/hooks/useMatchesMediaQuery";
import { ScrollContext } from "@src/utils/scroll-observer";
import Chance from "chance";
import Image from "next/image";
import { FC, RefObject, useContext, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
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
            className="relative bg-white h-[99%] w-[99%]"
            style={{ overflow: "hidden" }}
          >
            <div className="absolute -top-[120%] md:-top-[220%] space-y-1 -z-15">
              {(() => {
                let allComps: JSX.Element[] = [];
                let splits: number = Math.floor(items!.length / 3);
                for (let i = 0; i < splits; i++) {
                  allComps.push(
                    <Stack direction={"row"} maxWidth={"10vw"}>
                      {items!
                        .slice(i * splits, i * splits + splits)
                        .map((item, index) => (
                          <img
                            key={`${item.path}_${index}`}
                            src={item.path}
                            style={{
                              left: `${item.startX}%`,
                              top: `100%`,
                              transform: `scale(${
                                item.scale
                              }) translateY(${Math.pow(
                                progress * 200000,
                                50 / 100
                              )}%) translateX(${
                                item.transX * progress
                              }%) rotate(${
                                item.rot * progress - item.rot
                              }turn) `,
                            }}
                          />
                        ))}
                    </Stack>
                  );
                }
                return allComps;
              })()}
            </div>

            <div className="bg-black mix-blend-darken text-white font-bold">
              <span>{p}</span>
            </div>
          </div>
        ) : (
          <div className="relative " style={{ overflow: "hidden" }}>
            <div
              className=" bg-black absolute bottom-0 m-5"
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
    <div ref={refContainer} className="bg-black sticky top-0 -z-10">
      <Parallax
        speed={25}
        /* ref={refContainer} */
        className="h-screen flex flex-col items-center justify-center bg-inherit"
        /* style={{ transform: `translateY(-${progress * 30}vh)` }} */
      >
        {useMatchesMediaQuery("up", "md") ? (
          <Stack direction={"row"} spacing={2} fontSize={"18vw"}>
            {Object.values(allPieces).map((elem) => elem)}
          </Stack>
        ) : (
          <>
            <Stack
              direction={"row"}
              spacing={3}
              fontSize={"35vw"}
              padding={"5rem"}
              style={{ overflow: "hidden" }}
            >
              {Object.values(allPieces)
                .slice(0, 3)
                .map((elem) => elem)}
            </Stack>
            <Stack direction={"row"} style={{ overflow: "hidden" }}>
              {allPieces.dot}
            </Stack>
            <Stack
              direction={"row"}
              spacing={3}
              fontSize={"35vw"}
              style={{ overflow: "hidden" }}
            >
              {Object.values(allPieces)
                .slice(4)
                .map((elem) => elem)}
            </Stack>
          </>
        )}
      </Parallax>
    </div>
  );
};
export { Title };
