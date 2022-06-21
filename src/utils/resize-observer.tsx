import { refs } from "@src/components/commented";
import { Map as IMap } from "immutable";
import React, { useCallback, useEffect, useState } from "react";

interface LineValues {
  numLines: IMap<string, number>;
}
export const ResizeContext = React.createContext<LineValues>({
  numLines: IMap(),
});
const ResizeObserver: React.FC = ({ children }) => {
  const [numLines, setNumLines] = useState<IMap<string, number>>(IMap());
  let init = true;
  const handleResize = useCallback(() => {
    let temp = numLines;
    const divs = document.querySelectorAll(".commented");
    divs.forEach((elem) => {
      const refContainer = refs.get(elem.id);
      const { current: el } = refContainer!;
      let lines = numLines.get(elem.id) ?? 0;
      if (el) {
        const paraHt = el.offsetHeight;
        const lineHeight = parseInt(el.style.lineHeight);
        lines = Math.ceil(paraHt / lineHeight);
      }
      temp = temp.set(elem.id, lines);
    });
    init = false;

    setNumLines(temp);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, [handleResize]);
  return (
    <ResizeContext.Provider value={{ numLines }}>
      {children}
    </ResizeContext.Provider>
  );
};
export default ResizeObserver;
