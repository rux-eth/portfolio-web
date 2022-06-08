import { BreakpointVals, theme } from "@styles/theme";
import React from "react";
interface LayoutProps {
  baseSize: number;
  mult?: number;
}
const Font: React.FC<LayoutProps> = ({ children, baseSize, mult }) => {
  const final: string = Object.entries(
    theme.breakpoints.values as BreakpointVals
  )
    .map(
      ([key, val], _, iter) =>
        `${key === "xs" ? "" : `${key}:`}text-[${
          Math.floor(
            (baseSize + (val / iter[iter.length - 1][1]) * baseSize) * 10
          ) / 10
        }rem]`
    )
    .join(" ");
  console.log(final);
  return <div className={`flex ${final}`}>{children}</div>;
};

export default Font;
