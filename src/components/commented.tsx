import { Stack } from "@mui/material";
import { ResizeContext } from "@src/utils/resize-observer";
import { createHash } from "crypto";
import { Map as IMap } from "immutable";
import { FC, RefObject, useContext, useRef } from "react";
interface CommentedHeaderProps {
  textSize: string;
  content: string;
}
interface CommentedContentProps extends CommentedHeaderProps {
  header?: string;
}

let refs: IMap<string, RefObject<HTMLDivElement>> = IMap();
const CommentedContent: FC<CommentedContentProps> = ({
  content,
  header,
  textSize,
}) => {
  const lh: string = `${Math.round(parseInt(textSize) * 1.5)}px`;
  const concatStr: JSX.Element =
    header === undefined ? (
      <span>{`\n\n${content}\n`}</span>
    ) : (
      <>
        <div
          className="text-[#1896FF] font-bold"
          style={{ opacity: "100%" }}
        >{`\n\n${header}\n\n`}</div>
        <span>{`${content}\n`}</span>
      </>
    );
  const id: string = createHash("sha1")
    .update(`${header}${content}`)
    .digest("hex")
    .slice(0, 10);
  const refContain = useRef<HTMLDivElement>(null);
  refs = refs.set(id, refContain);
  const { numLines } = useContext(ResizeContext);

  const nl = numLines.get(id) ?? 0;
  const comments = `/**\n${Array(nl).fill("*\n").join("")}*/`;
  return (
    <Stack
      fontFamily={"Menlo"}
      direction={"row"}
      position={"relative"}
      fontSize={textSize}
      style={{
        lineHeight: lh,
        whiteSpace: "pre-line",
        opacity: "80%",
      }}
    >
      <span>{comments}</span>
      <div
        ref={refContain}
        id={id}
        className="commented absolute"
        style={{
          marginLeft: lh,
          lineHeight: lh,
        }}
      >
        {concatStr}
      </div>
    </Stack>
  );
};
const CommentedHeader: FC<CommentedHeaderProps> = ({ textSize, content }) => {
  return (
    <Stack
      className={`w-full flex text-center opacity-[60%] `}
      fontFamily={"Menlo"}
      fontStyle={"italic"}
      fontSize={textSize}
    >{`/* ${content} */`}</Stack>
  );
};
export { refs, CommentedContent, CommentedHeader };
