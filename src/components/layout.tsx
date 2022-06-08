import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Navbar from "./navbar";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};
interface LayoutProps {
  title?: string;
}
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const t = title ? `${title} - Rux.eth` : `Rux.eth`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Head>
        <title>{t}</title>
        <meta name="twitter:title" content={t} />
        <meta property="og:title" content={t} />
      </Head>{" "}
      <Navbar />
      {children}
    </motion.article>
  );
};

export default Layout;
