import CircleIcon from "@mui/icons-material/Circle";
import { Stack } from "@mui/material";
import useMatchesMediaQuery from "@src/utils/hooks/useMatchesMediaQuery";
import { ScrollContext } from "@src/utils/scroll-observer";
import Image from "next/image";
import { FC, useContext, useRef } from "react";

interface Pieces {
  R: string;
  U: string;
  X: string;
  dot: string;
  E: string;
  T: string;
  H: string;
}
interface PieceArgs {
  imgSrc: string;
}

let pieces: Pieces = {
  R: "/btc.png",
  U: "/btc.png",
  X: "/btc.png",
  dot: "/btc.png",
  E: "/btc.png",
  T: "/btc.png",
  H: "/btc.png",
};

const Parallax: FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return useMatchesMediaQuery("up", "md") ? (
    <div
      ref={refContainer}
      className="h-screen flex flex-col items-center justify-center bg-black sticky top-0 -z-10"
      style={{
        transform: `translateY(${progress * 40}vh)`,
      }}
    >
      {" "}
      <Stack
        direction={"row"}
        spacing={0}
        justifyContent="center"
        alignItems={"center"}
      >
        {Object.entries(pieces).map(([key, val]) => (
          <div style={{ position: "relative" }}>
            <Image
              src={"/btc.png"}
              width={3840}
              height={2160}
              layout="fill"
              style={{ transform: `translateY(${progress * 10}vh)` }}
            />
            <div className="flex bg-black bg-cover text-center font-bold mix-blend-darken text-white">
              {key === "dot" ? (
                <CircleIcon sx={{ width: "6vw", height: "6vh" }} />
              ) : (
                <Stack fontSize={"19vw"}>
                  <span className="text-white">{`${key}`}</span>
                </Stack>
              )}
            </div>
          </div>
        ))}
      </Stack>
    </div>
  ) : (
    <div
      ref={refContainer}
      className="h-screen flex flex-col items-center justify-center bg-black sticky top-0 -z-10"
      style={{
        transform: `translateY(${progress * 40}vh)`,
      }}
    >
      {" "}
      <Stack
        direction={"row"}
        spacing={0}
        justifyContent="center"
        alignItems={"center"}
      >
        {Object.entries(pieces).map(([key, val]) => (
          <div style={{ position: "relative" }}>
            <Image
              src={"/btc.png"}
              width={3840}
              height={2160}
              layout="fill"
              style={{ transform: `translateY(${progress * 10}vh)` }}
            />
            <div className="flex bg-black bg-cover text-center font-bold mix-blend-darken text-white">
              {key === "dot" ? (
                <CircleIcon sx={{ width: "6vw", height: "6vh" }} />
              ) : (
                <Stack fontSize={"19vw"}>
                  <span className="text-white">{`${key}`}</span>
                </Stack>
              )}
            </div>
          </div>
        ))}
      </Stack>
    </div>
  );
};
export { Parallax };
