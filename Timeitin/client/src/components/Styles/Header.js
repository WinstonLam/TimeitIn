import { AppBar, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppBarStyled = styled(AppBar)({
  position: "static",
});

export const ContainerStyled = styled(Container)({
  maxWidth: "xl",
});

export const TypographyStyled = styled(Typography)({
  mr: 2,
  flexGrow: 2,
  display: { xs: "none", md: "flex" },
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
});

export 