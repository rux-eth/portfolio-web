import {
  AppBar,
  Button as MuiButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "@src/components/link";
import { navDrawerAtom } from "@src/store/jotai";
import { theme } from "@src/styles/theme";
import transition from "@src/styles/utils";
import { useEthers, useLookupAddress } from "@usedapp/core";
import { Spin as Hamburger } from "hamburger-react";
import { useAtom } from "jotai";
import { FC } from "react";
import Links from "./links";

const ConnectButton: FC = () => {
  const { account, active, activateBrowserWallet } = useEthers();
  const { ens } = useLookupAddress(account);
  return (
    <MuiButton
      className="hover:bg-black duration-500"
      onClick={activateBrowserWallet}
      variant="contained"
      disabled={active}
      color="secondary"
      sx={{
        maxHeight: "40px",
        opacity: active ? "60%" : "100%",
        textTransform: "none",
      }}
    >
      {active ? (
        <Typography
          className="outline outline-white outline-2 outline-offset-2 rounded-md px-2"
          color="white"
          fontFamily="SF Pro Display"
          fontSize={"1.2rem"}
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "12ch",
          }}
        >
          {ens ?? account}
        </Typography>
      ) : (
        <div className="font-bold text-lg">Connect</div>
      )}
    </MuiButton>
  );
};
const Navbar: FC = () => {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useAtom(navDrawerAtom);

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
            alignItems: "center",
            display: "none",
            [theme.breakpoints.up("md")]: {
              display: "flex",
            },
          }}
        >
          {Links.external}
          <ConnectButton />
        </Stack>
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          sx={{ [theme.breakpoints.up("md")]: { display: "none" } }}
        >
          <ConnectButton />
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
