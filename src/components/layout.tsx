import { Box, Container } from "@mui/material";
import { theme } from "@styles/theme";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Masthead from "./masthead";
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
        <link rel="stylesheet" href="/fonts/sf-pro.css" />
        <link rel="stylesheet" href="/fonts/menlo.css" />
      </Head>
      <Navbar />

      <Masthead />
      <Box bgcolor={theme.palette.primary.dark}>
        <Container>{children}</Container>
      </Box>

      <Footer />
    </motion.article>
  );
};

export default Layout;
