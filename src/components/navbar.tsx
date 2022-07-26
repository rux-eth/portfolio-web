import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import Link from "@src/components/link";
import { theme } from "@src/styles/theme";
import transition from "@src/styles/utils";
import { Spin as Hamburger } from "hamburger-react";
// import { navDrawerAtom } from '@src/store/jotai';
import { atom, useAtom } from "jotai";
import { FC } from "react";
import Links from "./links";

const Navbar: FC = () => {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useAtom(atom(false));

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(18, 18, 18, 0.75)",
        border: "2px solid rgba(255, 255, 255, 0.015)",
        zIndex: 1201,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            color: theme.palette.primary.main,
            textDecoration: "none",
            transition,
            transitionDuration: "500ms",
          }}
          ml="0.4rem"
        >
          <div className="flex flex-row space-x-3 items-center">
            <img src="/eth-logo-white.png" width={"18px"} />
            <Typography
              fontFamily="SF Pro"
              fontSize="1.7rem"
              fontStyle={"bold"}
            >
              Rux.eth
            </Typography>
          </div>
        </Link>

        <Stack
          direction="row"
          spacing={3}
          alignItems="flex-end"
          fontFamily="SF Pro"
          sx={{
            display: "none",
            [theme.breakpoints.up("md")]: {
              display: "flex",
            },
          }}
        >
          {Links.external}
        </Stack>
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          sx={{ [theme.breakpoints.up("md")]: { display: "none" } }}
        >
          <Hamburger
            toggled={isNavDrawerOpen}
            toggle={setIsNavDrawerOpen}
            color={theme.palette.primary.main}
            hideOutline
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
