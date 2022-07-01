import * as React from "react";
import BurgerMenu from "./BurgerMenu";
import { Header, Wrapper, Name, NameMobile } from "./Styles/Header";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import TimeitinLogo from "../images/TimeitinLogo.png";

const pages = ["Create Account", "Settings"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  return (
    <Header>
      <Wrapper>
        <Toolbar disableGutters>
          <Name variant="h6" component="a" noWrap href="/">
            Timeitin
          </Name>
          <Name variant="h6" component="a" noWrap href="/">
            <img
              src={TimeitinLogo}
              alt="timeitin logo"
              style={{ maxWidth: "40px" }}
            />
          </Name>
          <BurgerMenu options={pages} />
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Wrapper>
    </Header>
  );
};
export default ResponsiveAppBar;
