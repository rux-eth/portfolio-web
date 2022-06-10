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

interface RainProps {
  refContain: RefObject<HTMLDivElement>;
}

const chance = new Chance();
/* const rainPool: string[] = [
  "btc-logo",
  "cssIcon",
  "expressJSIcon",
  "GitIcon",
].map((icon) => `/icons/${icon}.png`); */
const rainPool = (): RainItem[] =>
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
  R: rainPool(),
  U: rainPool(),
  X: rainPool(),
  E: rainPool(),
  T: rainPool(),
  H: rainPool(),
};
const coins = [
  "/icons/btc-logo.png",
  "/icons/btc-logo.png",
  "/icons/btc-logo.png",
  "/icons/btc-logo.png",
  "/icons/btc-logo.png",
];
const TitleCrunched: FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return (
    <div ref={refContainer} className="bg-black sticky top-0 -z-10">
      <Parallax
        /* speed={20} */
        /* ref={refContainer} */
        className="h-screen flex flex-col items-center justify-center bg-inherit"
        /* style={{ transform: `translateY(-${progress * 30}vh)` }} */
      >
        <Stack direction={"row"} spacing={3} fontSize={"35vw"}>
          {Object.entries(pieces)
            .slice(0, 3)
            .map(([key, val]) => (
              <div className="relative bg-white" style={{ overflow: "hidden" }}>
                <div className="flex flex-col absolute -top-10 space-y-1">
                  {(() => {
                    let allComps: JSX.Element[] = [];
                    let splits: number = Math.floor(val.length / 3);
                    for (let i = 0; i < splits; i++) {
                      allComps.push(
                        <Stack direction={"row"} spacing={0} maxWidth={"10vw"}>
                          {val
                            .slice(i * splits, i * splits + splits)
                            .map((item) => (
                              <img
                                src={item.path}
                                style={{
                                  left: `${item.startX}%`,
                                  top: `100%`,
                                  transform: `scale(${
                                    item.scale
                                  }) translateY(${Math.pow(
                                    progress * 100000,
                                    48 / 100
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

                <div className="bg-black bg-cover text-white mix-blend-darken font-bold ">
                  <span>{key}</span>
                </div>
              </div>
            ))}
        </Stack>
        <Stack direction={"row"}>
          <div className="relative " style={{ overflow: "hidden" }}>
            <div
              className="flex flex-col bg-black absolute bottom-0 m-5"
              style={{ transform: `translateY(${progress * 110}%)` }}
            >
              <Stack direction={"column"} spacing={3}>
                {coins.map((c) => (
                  <Stack>
                    <Image
                      src={c}
                      width={"500"}
                      height={"500"}
                      style={{ padding: "10vw" }}
                    />
                  </Stack>
                ))}
              </Stack>
            </div>

            <div className="bg-black bg-cover text-white mix-blend-darken ">
              <CircleIcon sx={{ fontSize: "12vw" }} />
            </div>
          </div>
        </Stack>
        <Stack direction={"row"} spacing={3} fontSize={"35vw"}>
          {Object.entries(pieces)
            .slice(3)
            .map(([key, val]) => (
              <div className="relative bg-white" style={{ overflow: "hidden" }}>
                <div className="flex flex-col absolute -top-10 space-y-1">
                  {(() => {
                    let allComps: JSX.Element[] = [];
                    let splits: number = Math.floor(val.length / 3);
                    for (let i = 0; i < splits; i++) {
                      allComps.push(
                        <Stack direction={"row"} maxWidth={"10vw"}>
                          {val
                            .slice(i * splits, i * splits + splits)
                            .map((item) => (
                              <img
                                src={item.path}
                                style={{
                                  left: `${item.startX}%`,
                                  top: `100%`,
                                  transform: `scale(${
                                    item.scale
                                  }) translateY(${Math.pow(
                                    progress * 100000,
                                    48 / 100
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

                <div className="bg-black bg-cover text-white mix-blend-darken font-bold ">
                  <span>{key}</span>
                </div>
              </div>
            ))}
        </Stack>
      </Parallax>
    </div>
  );
};
const TitleFull: FC = () => {
  return <></>;
};
const Title: FC = () => {
  return useMatchesMediaQuery("up", "md") ? <TitleFull /> : <TitleCrunched />;
};
export { Title };
