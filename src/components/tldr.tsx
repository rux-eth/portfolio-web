import { Stack } from "@mui/material";
import useMatchesMediaQuery from "@src/utils/hooks/useMatchesMediaQuery";
import React from "react";
import { CommentedContent, CommentedHeader } from "./commented";
import Seperator from "./seperator";

interface Section {
  header: string;
  content: string;
  highlights?: { [key: string]: Array<string> };
}
const sections: Section[] = [
  {
    header: "Work",
    content:
      "I have a strong passion for software development and cryptography. I am driven to create efficient software that is both fast and memory efficient which is a requirement while developing on blockchains such as Ethereum. I love to continuously learn and stay challenged by working on solving complex problems and algorithms that would have previously been outside of my area of expertise. I am also very adaptable to new technoligies by reading documentation.",
    highlights: {
      "Languages I Have Used": [
        "Solidity",
        "Javascript",
        "Typescript",
        "Python",
        "Rust",
        "Java",
      ],
      "Extensive Knowledge About": ["EthersJS", "Hardhat", "NodeJS"],
      "Familiar With": ["Express", "Chai", "Mocha", "MongoDB", "NextJS"],
    },
  },
];
const TLDR: React.FC = () => {
  const compileHighlights = (hl: Section["highlights"]): string =>
    hl === undefined
      ? ""
      : `\n${Object.entries(hl)
          .map(([k, v]) => `\n${k}:${v.map((elem) => `\n - ${elem}`).join("")}`)
          .join("\n")}`;
  return (
    <div className="flex flex-col bg-inherit py-6 text-left text-primary-main space-y-3 py-7">
      <CommentedHeader
        textSize={useMatchesMediaQuery("up", "lg") ? "8vw" : "8vw"}
        content="tl;dr"
      />

      <Seperator />
      <Stack
        direction={"row"}
        paddingX={"1rem"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="text-white flex flex-col space-y-1">
          <p className="font-bold text-3xl">Max Rux</p>
          <p className="text-lg">Full-Stack Software Engineer</p>
        </div>
        <img
          //className="bg-black border-2 border-white dark:border-black dark:bg-white"
          src={"/icons/btc-logo.png"}
          height="100px"
          width={"100px"}
          style={{
            borderRadius: "50%",
            border: "5px solid rgba(0,0,0,1)",
          }}
        />
      </Stack>
      {sections.map((s) => (
        <>
          <Seperator />
          <CommentedContent
            content={`${s.content}${compileHighlights(s.highlights)}`}
            header={s.header}
            textSize="18px"
          />
        </>
      ))}
    </div>
  );
};
export default TLDR;
