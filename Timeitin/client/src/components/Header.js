import * as React from "react";
import BurgerMenu from "./BurgerMenu";
import { Header, Wrapper, HeaderSection, InnerWrapper } from "./Styles/Header";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import TimeitinLogo from "../images/TimeitinLogo.png";

const pages = ["Create Account", "Settings"];
const links = ["users/new", "settings"];

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
              {pages.map((page, idx) => (
                <Link to={`/${links[idx]}`} key={page} sx={{ color: "white" }}>
                  {page}
                </Link>
              ))}
            </Box>
          </HeaderSection>
        </InnerWrapper>
      </Wrapper>
    </Header>
  );
};
export default ResponsiveAppBar;
