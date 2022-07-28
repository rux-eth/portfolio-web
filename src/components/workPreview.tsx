import { WorkInfo } from "@src/types";
import Image from "next/image";
import { FC } from "react";
import Link from "./link";

export const WorkPreview: FC<WorkInfo> = ({
  children,
  id,
  title,
  description,
  thumbnail,
  status,
  languages,
  stack,
  repo,
  website,
  article,
}) => (
  <div
    className="w-full text-center  opacity-[80%] hover:scale-105 hover:opacity-[100%] duration-300"
    id={id}
  >
    <Link
      href={`/works/${id}`}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <div className="cursor-pointer text-white">
        <Image
          src={thumbnail}
          alt={title}
          width={"1980px"}
          height={"1080px"}
          className="grid-item-thumbnail rounded-lg"
        />
        <p className="text-2xl py-2 font-bold">{title}</p>
        <text fontSize={14}>{children}</text>
      </div>
    </Link>
  </div>
);
