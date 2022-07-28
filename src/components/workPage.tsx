import { WorkInfo } from "@src/types";
import { FC } from "react";
import { CommentedHeader } from "./commented";

const WorkPage: FC<WorkInfo & { children: any }> = ({
  children,
  id,
  title,
  description,
  thumbnail,
  status,
  languages,
  stack,
  website,
  article,
}) => {
  return (
    <div className="flex flex-col text-white">
      <CommentedHeader content={title} textSize={"7vw"} />
      {children}
    </div>
  );
};
export default WorkPage;
