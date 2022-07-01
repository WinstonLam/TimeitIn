import * as React from "react";
import BurgerMenu from "./BurgerMenu";
import { Header, Wrapper, HeaderSection, InnerWrapper } from "./Styles/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TimeitinLogo from "../images/TimeitinLogo.png";

const pages = ["Create Account", "Settings"];

const ResponsiveAppBar = () => {
  return (
    <Header>
      <Wrapper>
        <InnerWrapper>
          <HeaderSection
            variant="h5"
            component="a"
            noWrap
            href="/"
            style={{ justifyContent: "left" }}
          >
            Timeitin
          </HeaderSection>
          <HeaderSection component="a" noWrap href="/">
            <img
              src={TimeitinLogo}
              alt="timeitin logo"
              style={{ maxWidth: "40px" }}
            />
          </HeaderSection>
          <HeaderSection noWrap style={{ justifyContent: "right" }}>
            <BurgerMenu options={pages} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} sx={{ color: "white" }}>
                  {page}
                </Button>
              ))}
            </Box>
          </HeaderSection>
        </InnerWrapper>
      </Wrapper>
    </Header>
  );
};
export default ResponsiveAppBar;
