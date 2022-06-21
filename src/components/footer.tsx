import React from "react";
import Links from "./links";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black items-center py-6 p-3 space-y-2 text-xl ">
      <div className="opacity-50"></div>
      <div className="flex flex-row space-x-3">{Links.external}</div>
      {Links.internal}
    </div>
  );
};

export default Footer;
