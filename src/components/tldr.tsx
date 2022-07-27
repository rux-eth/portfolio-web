import useMatchesMediaQuery from "@src/utils/hooks/useMatchesMediaQuery";
import React from "react";
import { CommentedContent, CommentedHeader } from "./commented";
import { WorkGridItem } from "./gridItem";
import Seperator from "./seperator";

interface Section {
  header: string;
  content: string;
  highlights?: { [key: string]: Array<string> };
  extraCompenent?: JSX.Element;
}
const sections: Section[] = [
  {
    header: "Introduction",
    content:
      "Hello, my name is Max Rux, and I am a full-stack software engineer. I was born and raised in Minnesota, USA. Since I was young, I have had a strong interest in computers and gaming. This interest has eventually led me to my passion.",
    highlights: {},
  },
  {
    header: "Work",
    content:
      "I have been a software engineer for about 18 months. I have a strong passion for software development, especially cryptography and making decentralized applications. I have always been a learner, always researching interests until I have a deep understanding of the concept. This curiousity has led me to work with various frameworks and technologies.",
    highlights: {
      "Languages I Have Used": [
        "Solidity",
        "Javascript",
        "Typescript",
        "Rust",
        "Python",
        "Java",
      ],
      "Extensive Knowledge About": ["EthersJS", "Hardhat", "NodeJS"],
      "Familiar With": ["Express", "MongoDB", "NextJS/ReactJS"],
    },
    extraCompenent: (
      <div className="flex flex-col text-center space-y-3">
        <CommentedHeader content="Recent Works" textSize="30px" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 p-6">
          <WorkGridItem
            href="https://github.com/rux-eth/portfolio-web"
            title="Portfolio Site"
            thumbnail="/thumbnails/portfolio-site.png"
          >
            Website to display my portfolio and work experience
          </WorkGridItem>
          <WorkGridItem
            href="https://github.com/rux-eth/defi-taxes"
            title="Defi Taxes(TS)"
            thumbnail="/thumbnails/defi-taxes.png"
          >
            Software that calculates DeFi taxes. Currently working on updating
            it with Rust and web assembly
          </WorkGridItem>
          <WorkGridItem
            href="https://github.com/rux-eth/nft-data-miner-rust"
            title="NFT Data Miner"
            thumbnail="/thumbnails/nft-data-miner.png"
          >
            Efficiently mines NFT data for a collection using Rust and web3.rs
          </WorkGridItem>
        </div>
        {/*   <Link href="/works">
          <span className="text-3xl text-blue-500 cursor-pointer underline underline-offset-2 hover:scale-105 duration-300 py-2">
            {`View all works>>`}
          </span>
        </Link> */}
      </div>
    ),
  },
  {
    header: "Personal",
    content:
      "In my free time I am usually working on side-projects. However when I'm not developing software, I am usually either enjoying nature or playing videogames",
    highlights: {
      "My Hobbies": ["Fishing", "Hunting", "Cooking", "Learning"],
      "Interests/Passions": ["Music", "Finance", "Crypto", "Dogs :P"],
      "Favorite Movies/Videogames": [
        "Lord of the Rings",
        "Scarface",
        "American Psycho",
        "Gran Torino",
        "Red Dead Redemption",
        "Skyrim",
      ],
    },
  },
  {
    header: "Contact Me",
    content:
      "Due to an influx of scammers targeting my email and phone number, I do not provide them.",
    highlights: {
      Socials: [
        "Twitter: @Rux_eth",
        "Telegram: https://t.me/Rux0x",
        "Discord: Rux#2216",
      ],
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
    <div className="flex flex-col bg-inherit text-left text-primary-main space-y-3">
      <CommentedHeader
        textSize={useMatchesMediaQuery("up", "lg") ? "8vw" : "8vw"}
        content="tl;dr"
      />

      {/* <Seperator />
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
      </Stack> */}
      {sections.map((s) => (
        <>
          <Seperator />
          <CommentedContent
            content={`${s.content}${compileHighlights(s.highlights)}`}
            header={s.header}
            textSize="18px"
          />
          <>{s.extraCompenent ?? <></>}</>
        </>
      ))}
      <Seperator />
    </div>
  );
};
export default TLDR;
