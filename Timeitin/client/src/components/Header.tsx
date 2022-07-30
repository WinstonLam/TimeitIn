import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAdmin } from "./strore";
import { useAppDispatch } from "./hooks";
import { fetchAdmin } from "../actions";
import { useNavigate, useLocation } from 'react-router-dom';
import AuthModal from "./modals/AuthModal";
import BurgerMenu from "./BurgerMenu";
import Box from "@mui/material/Box";

import { Header, Wrapper, HeaderSection, InnerWrapper } from "./Styles/Header";
import "./Styles/Header.css";
import TimeitinLogo from "./images/TimeitinLogo.png";

const pages = ["Users", "Settings"];
const links = ["/users", "/settings"];

const ResponsiveAppBar = () => {
  let navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const dispatch = useAppDispatch();
  const fetchedAdmin: any = useSelector(selectAdmin);
  const [admin, setAdmin] = useState(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [navigateTo, setNavigateTo] = useState("");

  useEffect(() => { dispatch(fetchAdmin()) }, [dispatch]);
  useEffect(() => { setAdmin(fetchedAdmin) }, [fetchedAdmin]);

  const handleRedirect = (link: string) => {
    if (link === currentPath) {
      return
    } else if (admin) {
      setAuthRequired(true);
      setNavigateTo(link);
    } else {
      navigate(link);
    }
  }
  if (!admin) return
  return (
    <>
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
            {admin.length !== 0 &&
              <HeaderSection noWrap>
                <BurgerMenu links={links} pages={pages} />

                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                  style={{ justifyContent: "left" }}
                >
                  {pages.map((page, idx) => (
                    <div key={page} onClick={() => handleRedirect(links[idx])} style={{ color: "white", cursor: "pointer", margin: "20px" }}>
                      {page}
                    </div>
                  ))}
                </Box>
              </HeaderSection>
            }
          </InnerWrapper>
        </Wrapper>
      </Header>
      {authRequired ? <AuthModal
        onAuthorization={true}
        setOnAuthorization={setAuthRequired}
        currentPath={currentPath}
        successAuthPath={navigateTo} /> : null}
    </>
  );
};
export default ResponsiveAppBar;
