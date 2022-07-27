import { Box, Container, Slide, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import snackbarAtom from "@src/store/jotai";
import { theme } from "@src/styles/theme";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Head from "next/head";
import React, { forwardRef, useCallback } from "react";
import Footer from "../footer";
import Masthead from "../masthead";
import Navbar from "../navbar";
import NavDrawer from "../navDrawer";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};
interface LayoutProps {
  title?: string;
}
function SlideTransition(props: any) {
  return <Slide {...props} direction="down" />;
}

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={4} ref={ref as any} variant="filled" {...props} />
));
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const [snackbar, setSnackbar] = useAtom(snackbarAtom);
  const handleClose = useCallback(
    () => setSnackbar({ ...snackbar, isOpen: false }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [snackbar.isOpen]
  );
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
      <Masthead scale={1} />
      <Box bgcolor={theme.palette.primary.dark}>
        <Container>{children}</Container>
      </Box>

      <Footer />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbar.isOpen}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        autoHideDuration={3000}
      >
        {/* @ts-ignore */}
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          sx={
            snackbar.severity === "success"
              ? { width: "100%", backgroundColor: "#06ff76", color: "black" }
              : {}
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <NavDrawer />
    </motion.article>
  );
};

export default Layout;
