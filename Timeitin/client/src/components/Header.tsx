import * as React from "react";
import BurgerMenu from "./BurgerMenu";
import { Header, Wrapper, HeaderSection, InnerWrapper } from "./Styles/Header";
import "./Styles/Header.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import TimeitinLogo from "./images/TimeitinLogo.png";

const pages = ["Users", "Settings"];
const links = ["users", "settings"];

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
          <HeaderSection noWrap>
            <BurgerMenu links={links} pages={pages} />

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              style={{ justifyContent: "left" }}
            >
              {pages.map((page, idx) => (
                <Link to={links[idx]} key={page} style={{ color: "white" }}>
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
