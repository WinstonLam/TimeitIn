import { AppBar, Container, Typography, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = styled(AppBar)({
  position: "static",
});

export const Wrapper = styled(Container)({
  maxWidth: "xl",
});

export const InnerWrapper = styled(Toolbar)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",

  disableGutters: true,
});

export const HeaderSection = styled(Typography)({
  display: "flex",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  alignItems: "center",
  justifyContent: "center",
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
