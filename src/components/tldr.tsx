import React from "react";
import { MainHeader } from "./headers";
const TLDR: React.FC = () => {
  return (
    <div className="flex flex-col py-6 text-left text-primary-main space-y-2">
      <MainHeader>Max Rux</MainHeader>
      <div className="text-xl">Full-Stack Software Engineer</div>
      <p className="py-5">about me...</p>
    </div>
  );
};
export default TLDR;
