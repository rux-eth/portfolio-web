import React from "react";
import Links from "./links";

const Footer = () => {
  return (
    <div className="flex flex-col items-center my-2 p-3 space-y-2 text-xl opacity-50">
      <div className="flex flex-row space-x-3">{Links.external}</div>
      {Links.internal}
    </div>
  );
};

export default Footer;
