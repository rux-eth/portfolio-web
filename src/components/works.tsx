import { WorkInfo } from "@src/types";
import { List, Set } from "immutable";
import Image from "next/image";
import { FC } from "react";
import { categories } from "./category";
import Link from "./link";
class Works {
  works: List<WorkInfo> = List([
    {
      id: "kong-scraper",
      title: "Kong Scraper",
      description:
        "Periodically updates sale data for the NFT collection Rumble Kong League",
      thumbnail: "/thumbnails/default.png",
      status: "Completed",
      languages: Set(["rust"]),
      stack: Set([]),
      repo: "https://github.com/rux-eth/kong-scraper",
    },
    {
      id: "personal",
      title: "Personal Site",
      description:
        "Website for clients to manage projects and to show my work experience.",
      thumbnail: "/thumbnails/portfolio-site.png",
      status: "Building",
      languages: Set(["typescript"]),
      stack: Set(["next"]),
      repo: "https://github.com/rux-eth/portfolio-web",
      website: "/",
    },
    {
      id: "defi-taxes-v2",
      title: "DeFi Taxes V2",
      description:
        "Computes DeFi capital gains taxes given an address or exchange csv file. Exchange rates are cached",
      thumbnail: "/thumbnails/default.png",
      status: "Building",
      languages: Set(["rust", "typescript", "solidity"]),
      stack: Set(["next", "foundry", "mongodb"]),
      repo: "https://github.com/rux-eth/defi-taxes-wasm",
    },
    {
      id: "defi-taxes-v1",
      title: "DeFi Taxes V1",
      description:
        "Computes DeFi capital gains taxes given an address or exchange csv file. Exchange rates are cached",
      thumbnail: "/thumbnails/default.png",
      status: "Deprecated",
      languages: Set(["typescript", "python", "javascript"]),
      stack: Set(["node", "express", "ethers", "mongodb"]),
      repo: "https://github.com/rux-eth/defi-taxes",
    },
    {
      id: "rarity-ranker",
      title: "Rarity Ranker",
      description:
        "An implicit way of defining rarities for each trait in an NFT collection",
      thumbnail: "/thumbnails/default.png",
      status: "Completed",
      languages: Set(["rust"]),
      stack: Set([]),
      repo: "https://github.com/rux-eth/rarity-ranker",
    },
    {
      id: "nft-data-miner-v2",
      title: "NFT Data Miner V2",
      description: "Mines NFT collection data and compiles it into an csv file",
      thumbnail: "/thumbnails/default.png",
      status: "Building",
      languages: Set(["rust"]),
      stack: Set([]),
      repo: "https://github.com/rux-eth/nft-data-miner-rust",
    },
    {
      id: "treasure",
      title: "Treasure NFTs",
      description:
        "An on-chain NFT collection with very advanced metadata generation",
      thumbnail: "/thumbnails/default.png",
      status: "Completed",
      languages: Set(["typescript", "solidity"]),
      stack: Set(["node", "next", "hardhat"]),
      repo: "https://github.com/rux-eth/treasure",
      website: "https://www.treasurenfts.io/",
      article:
        "https://medium.com/coinsbench/treasure-nfts-advanced-on-chain-metadata-generation-1cc6fb6b4653",
    },
    {
      id: "club-cards-contract",
      title: "Club Cards Contract",
      description:
        "An expandable NFT card collection. I wrote the back-end, not the front. This included the contract and API that handles claims",
      thumbnail: "/thumbnails/default.png",
      status: "Completed",
      languages: Set(["typescript", "solidity"]),
      stack: Set(["hardhat", "ethers"]),
      repo: "https://github.com/rux-eth/club-cards-contract",
      website: "https://www.clubcards.cc/",
    },
    {
      id: "club-cards-api",
      title: "Club Cards API",
      description:
        "An expandable NFT card collection. I wrote the back-end, not the front. This included the contract and API that handles claims",
      thumbnail: "/thumbnails/default.png",
      status: "Completed",
      languages: Set(["typescript"]),
      stack: Set(["ethers", "express", "mongodb"]),
      repo: "https://github.com/rux-eth/club-cards-contract",
      website: "https://www.clubcards.cc/",
    },
    {
      id: "nft-data-miner",
      title: "NFT Data Miner",
      description:
        "My first dev project. Mines NFT collection data for a user specified contract address. Deprecated since Opensea began requiring API keys to use their API",
      thumbnail: "/thumbnails/default.png",
      status: "Deprecated",
      languages: Set(["python"]),
      stack: Set([]),
      repo: "https://github.com/rux-eth/nft-data-miner",
    },
  ]);
  constructor() {}
  getPreview(id: string): JSX.Element {
    const res = this.works.find((val) => val.id === id);
    if (!res) return <p>NOT FOUND</p>;
    return (
      <WorkPreview
        id={id}
        title={res.title}
        description={res.description}
        thumbnail={res.thumbnail}
        status={res.status}
        languages={res.languages}
        stack={res.stack}
        repo={res.repo}
        website={res.website}
        article={res.article}
      />
    );
  }
  getAllPreviews(): JSX.Element[] {
    return this.works.toArray().map((elem) => this.getPreview(elem.id));
  }
  getWorkById(id: string): WorkInfo | undefined {
    return this.works.find((val) => val.id === id);
  }
}

export const WorkPreview: FC<WorkInfo> = ({
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
  const tags = [status, ...languages.toArray(), ...stack.toArray()];
  return (
    <div
      className="w-full text-center  opacity-[80%] hover:scale-105 hover:opacity-[100%] duration-300"
      id={id}
    >
      <Link
        href={`/works/${id}`}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="cursor-pointer text-white flex flex-col space-y-1">
          <Image
            src={thumbnail}
            alt={title}
            width={"1980px"}
            height={"1080px"}
            className="grid-item-thumbnail rounded-lg"
          />
          <p className="text-2xl py-1 font-bold">{title}</p>
          <text fontSize={14}>{description}</text>
          <div
            className="text-sm flex justify-center"
            style={{
              flexWrap: "wrap",
              gap: "3px",
            }}
          >
            {tags.map((elem) => categories[elem])}
          </div>
        </div>
      </Link>
    </div>
  );
};
export const works = new Works();
