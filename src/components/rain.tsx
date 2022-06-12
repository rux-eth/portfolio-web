import { ScrollContext } from "@src/utils/scroll-observer";
import Chance from "chance";
import { FC, RefObject, useContext } from "react";
interface RainItem {
  path: string;
  scale: number;
  transX: number;
  rot: number;
  startX: number;
  startY: number;
}

interface RainProps {
  refContain: RefObject<HTMLDivElement>;
  variant?: number;
}

interface Config {
  numItems: number;
  // number of rain variants to cache
  numVars: number;
  vertSpread: number;
}

const config: Config = {
  numItems: 30,
  numVars: 10,
  // modifies how many items per row. lower number = more items per row
  vertSpread: 7,
};

const chance = new Chance();
/* const rainPool: string[] = [
  "btc-logo",
  "cssIcon",
  "expressJSIcon",
  "GitIcon",
].map((icon) => `/icons/${icon}.png`); */
const getSeeds = (): RainItem[] => {
  let allItems: RainItem[] = [];
  const addItems = (newItems: string[]) => {
    newItems.forEach((icon) => {
      allItems.push({
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
        startY: -chance.integer({ min: 0, max: 20 }),
      });
    });
  };

  const pool: string[] = [
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
  ];

  const temp: number = Math.floor(config.numItems / pool.length);
  for (let i = 0; i < temp; i++) {
    addItems(pool);
  }
  const remainder: number = config.numItems - allItems.length;

  if (remainder > 0) {
    const r = chance.pickset(pool, remainder);

    addItems(r);
  }
  allItems = allItems.sort(() => Math.random() - 0.5);
  return allItems;
};
const variants: RainItem[][] = Array.from(Array(config.numVars), () =>
  getSeeds()
);
const Rain: FC<RainProps> = ({ refContain, variant }) => {
  const { scrollY } = useContext(ScrollContext);
  const v: number = variant ?? chance.integer({ min: 0 });
  let progress = 0;
  const { current: elContainer } = refContain;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <div
      className="absolute bg-white h-[97%] w-[97%] top-0 p-px left-[50%] top-[50%]"
      style={{
        boxSizing: "border-box",
        overflow: "hidden",
        transform: "translateX(-50%) translateY(-50%)",
      }}
    >
      {(() => {
        const items: RainItem[] = variants[v % variants.length];
        let allComps: JSX.Element[] = [];
        let splits: number = Math.floor(items!.length / config.vertSpread);
        for (let i = 0; i <= splits; i++) {
          const s: RainItem[] = items!.slice(i * splits, i * splits + splits);
          allComps.push(
            <div
              className="flex flex-row"
              style={{
                position: "absolute",
                maxWidth: `${100 / splits}%`,
                top: `${i * 20 - 110}px`,
                transform: `translateY(${progress * 10}vh)`,
              }}
            >
              {s.map((item, index) => (
                <img
                  key={`${item.path}_${index}`}
                  src={item.path}
                  style={{
                    transform: `scale(${item.scale}) translateY(${Math.pow(
                      progress * 200000,
                      50 / 100
                    )}%) translateX(${item.transX * progress}%) rotate(${
                      item.rot * progress - item.rot
                    }turn) `,
                  }}
                />
              ))}
            </div>
          );
        }
        return allComps;
      })()}
    </div>
  );
};
const Slot: FC<RainProps> = ({ refContain }) => {
  const coins = [
    "/icons/btc-logo.png",
    "/icons/eth-logo.png",
    "/icons/sol-logo.png",
    "/icons/avax-logo.png",
  ];
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContain;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return (
    <div
      className="absolute bg-black h-[97%] w-[97%] top-0 p-px left-[50%] top-[50%]"
      style={{
        boxSizing: "border-box",
        overflow: "hidden",
        transform: "translateX(-50%) translateY(-50%)",
      }}
    >
      <div
        className="flex flex-col-reverse bottom-0 bg-black"
        style={{
          position: "absolute",
          transform: `translateY(${progress * 120}%)`,
        }}
      >
        {coins.map((c, index) => (
          <div className="m-auto">
            <img
              key={`slot_${c}_${index}`}
              src={c}
              style={{ transform: "scale(0.7)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Rain;
export { Slot };
