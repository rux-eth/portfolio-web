import { FC } from "react";
interface Category {
  name: string;
  rgb: number[];
}
const BuildCategory: FC<Category> = ({ name, rgb }) => {
  const bgRGB = rgb.map((elem) => Math.min(255, elem + 80)).join(",");
  const textRGB = rgb.join(",");
  return (
    <span
      className={` font-Menlo rounded py-[2px] px-[5px]`}
      style={{
        color: `rgba(${textRGB},1)`,
        backgroundColor: `rgba(${textRGB},0.4)`,
      }}
    >
      {`${name}`}
    </span>
  );
};
export const categories: { [key: string]: JSX.Element } = {
  Building: <BuildCategory name="Building" rgb={[255, 255, 0]} />,
  Deprecated: <BuildCategory name="Deprecated" rgb={[255, 35, 35]} />,
  Completed: <BuildCategory name="Completed" rgb={[0, 240, 0]} />,
  typescript: <BuildCategory name="Typescript" rgb={[49, 120, 198]} />,
  python: <BuildCategory name="Python" rgb={[112, 81, 162]} />,
  node: <BuildCategory name="NodeJS" rgb={[83, 158, 67]} />,
  express: <BuildCategory name="ExpressJS" rgb={[247, 223, 30]} />,
  solidity: <BuildCategory name="Solidity" rgb={[98, 126, 234]} />,
  rust: <BuildCategory name="Rust" rgb={[230, 123, 16]} />,
  javascript: <BuildCategory name="Javascript" rgb={[240, 219, 79]} />,
  ethers: <BuildCategory name="EthersJS" rgb={[66, 97, 195]} />,
  hardhat: <BuildCategory name="Hardhat" rgb={[254, 176, 23]} />,
  foundry: <BuildCategory name="Foundry" rgb={[230, 230, 230]} />,
  mongodb: <BuildCategory name="MongoDB" rgb={[79, 171, 65]} />,
  next: <BuildCategory name="NextJS" rgb={[74, 179, 177]} />,
};

/**
 * ethersjs
 * hardhat
 * mongodb
 * NextJs
 *
 */
