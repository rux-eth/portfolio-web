import { Stack } from "@mui/material";
import { ScrollContext } from "@src/utils/scroll-observer";
import Chance from "chance";
import { FC, RefObject, useContext } from "react";
interface RainItem {
  path: string;
  scale: number;
  transX: number;
  rot: number;
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
const rainPool: RainItem[] = [
  "btc-logo",
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
].map(
  (icon): RainItem => ({
    path: `/icons/${icon}.png`,
    scale: chance.floating({
      min: 0.1,
      max: 0.5,
      fixed: 2,
    }),
    transX: chance.integer({ min: -20, max: 20 }),
    rot: chance.floating({
      min: -0.5,
      max: 0.5,
      fixed: 2,
    }),
  })
);
const Rain: FC<RainProps> = ({ refContain }) => {
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContain;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <Stack direction={"row"} spacing={-20} position={"absolute"}>
      {" "}
      {rainPool.map((item) => (
        <img
          src={item.path}
          style={{
            transform: `scale(${item.scale}) translateY(${Math.pow(
              progress * 100000,
              48 / 100
            )}%) translateX(${item.transX * progress}%) rotate(${
              item.rot * progress
            }turn) `,
          }}
        />
      ))}
    </Stack>
  );
};
export default Rain;
