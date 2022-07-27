import { WorkInfo } from "@src/types";
import { FC } from "react";
import { CommentedHeader } from "./commented";

const WorkPage: FC<WorkInfo & { children: any }> = ({
  title,
  description,
  thumbnail,
  status,
  languages,
  stack,
  website,
  article,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <CommentedHeader content={title} textSize={"30px"} />
      {children}
    </div>
  );
};
export default WorkPage;
