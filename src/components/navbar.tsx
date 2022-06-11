import Link from "@components/link";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import { theme } from "@styles/theme";
import transition from "@styles/utils";
import { Spin as Hamburger } from "hamburger-react";
// import { navDrawerAtom } from '@src/store/jotai';
import { atom, useAtom } from "jotai";
import { FC } from "react";
import { FaGithub, FaMedium, FaTwitter } from "react-icons/fa";

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
      <Container>
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
              color: theme.palette.secondary.dark,
              textDecoration: "none",
              transition,
              transitionDuration: "500ms",
            }}
            ml="0.4rem"
          >
            <Typography
              fontFamily="SF Pro"
              fontSize="1.7rem"
              fontStyle={"bold"}
            >
              Rux.eth
            </Typography>
          </Link>

          <Stack
            direction="row"
            spacing={2}
            alignItems="flex-end"
            fontFamily="SF Pro"
            sx={{
              display: "none",
              [theme.breakpoints.up("md")]: {
                display: "flex",
              },
            }}
          >
            <Link
              href="/#faq"
              sx={{
                color: theme.palette.secondary.dark,
                textDecoration: "none",
                transition,
                transitionDuration: "500ms",
                ":hover": {
                  color: theme.palette.primary.dark,
                  cursor: "pointer",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Typography fontFamily="SF Pro" fontSize="1.22rem">
                Articles
              </Typography>
            </Link>
            {/*             <Link
              href="/#mint"
              sx={{
                color: theme.palette.secondary.dark,
                textDecoration: "none",
                transition,
                transitionDuration: "500ms",
                ":hover": {
                  color: theme.palette.primary.dark,
                  cursor: "pointer",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Typography fontFamily="SF Pro" fontSize="1.22rem">
                Github
              </Typography>
            </Link> */}

            <Link
              href="https://twitter.com/Rux_eth"
              target="_blank"
              sx={{
                color: theme.palette.secondary.dark,
                transition,
                transitionDuration: "500ms",
                ":hover": {
                  color: theme.palette.primary.dark,
                  cursor: "pointer",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <FaTwitter style={{ height: "28px", width: "28px" }} />
            </Link>
            <Link
              href="https://medium.com/@rux.eth"
              target="_blank"
              sx={{
                color: theme.palette.secondary.dark,
                transition,
                transitionDuration: "500ms",
                ":hover": {
                  color: theme.palette.primary.dark,
                  cursor: "pointer",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <FaMedium style={{ height: "28px", width: "28px" }} />
            </Link>
            <Link
              href="https://github.com/rux-eth"
              target="_blank"
              sx={{
                color: theme.palette.secondary.dark,
                transition,
                transitionDuration: "500ms",
                ":hover": {
                  color: theme.palette.primary.dark,
                  cursor: "pointer",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <FaGithub style={{ height: "28px", width: "28px" }} />
            </Link>
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
      </Container>
    </AppBar>
  );
};

export default Navbar;
