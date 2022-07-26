import { theme } from "@src/styles/theme";
import transition from "@src/styles/utils";
import { FaGithub, FaMedium, FaTelegram, FaTwitter } from "react-icons/fa";
import Link from "./link";

interface LinkFormat {
  external: { [key: string]: { link: string; icon: JSX.Element } };
  internal: string[];
}
export type LinkReturn = {
  [key in keyof LinkFormat]: JSX.Element[];
};
const defaultStyles = {
  text: {},
  icon: { height: "28px", width: "28px" },
};
const allLinks: LinkFormat = {
  external: {
    twitter: {
      link: "https://twitter.com/Rux_eth",
      icon: <FaTwitter style={defaultStyles.icon} />,
    },
    medium: {
      link: "https://medium.com/@rux.eth",
      icon: <FaMedium style={defaultStyles.icon} />,
    },
    github: {
      link: "https://github.com/rux-eth",
      icon: <FaGithub style={defaultStyles.icon} />,
    },
    telegram: {
      link: "https://t.me/Rux0x",
      icon: <FaTelegram style={defaultStyles.icon} />,
    },
  },
  internal: [],
};

const Links: LinkReturn = {
  external: Object.entries(allLinks.external).map(([key, val]) => (
    <Link
      key={key}
      href={val.link}
      target="_blank"
      sx={{
        color: theme.palette.primary.main,
        textDecoration: "none",
        transition,
        transitionDuration: "500ms",
        ":hover": {
          color: theme.palette.secondary.main,
          cursor: "pointer",
          transform: "translateY(-2px)",
        },
      }}
    >
      {val.icon}
    </Link>
  )),
  internal: allLinks.internal.map((val) => (
    <Link
      key={val}
      href={`/${val}`}
      sx={{
        color: theme.palette.primary.main,
        textDecoration: "none",
        transition,
        transitionDuration: "500ms",
        ":hover": {
          color: theme.palette.secondary.main,
          cursor: "pointer",
          transform: "translateY(-2px)",
        },
      }}
    >
      <p style={defaultStyles.text}>
        {val.charAt(0).toUpperCase() + val.slice(1)}
      </p>
    </Link>
  )),
};
export default Links;
