import { AppBar, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = styled(AppBar)({
  position: "static",
});

export const Wrapper = styled(Container)({
  maxWidth: "xl",
});

export const Name = styled(Typography)({
  mr: 2,
  flexGrow: 2,
  alignItems: "center",
  display: { xs: "none", md: "flex" },
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
});

export const NameMobile = styled(Typography)({
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
});
