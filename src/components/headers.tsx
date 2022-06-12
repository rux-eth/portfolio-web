import { Typography } from "@mui/material";
import { theme } from "@styles/theme";

const MainHeader: React.FC = ({ children }) => {
  return (
    <Typography
      fontFamily="SF Pro"
      sx={{
        mb: "1.5rem",
        mt: "1.5rem",
      }}
      color={theme.palette.secondary.dark}
    >
      {children}
    </Typography>
  );
};
export { MainHeader };
