import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { BasicArrays } from "./interfaces";

const BurgerMenu = ({ pages, links }: BasicArrays) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rotateBurger, setRotateBurger] = useState(false);

  const handleOpenNavMenu = (event: any) => {
    setRotateBurger(!rotateBurger);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setRotateBurger(!rotateBurger);
    setAnchorElNav(null);
  };

  const rotate = rotateBurger ? "rotate(90deg)" : "rotate(0)";

  return (
    <Box
      style={{ justifyContent: "right" }}
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        style={{ transform: rotate, transition: "all 0.2s linear" }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page, idx) => (
          <MenuItem
            key={idx}
            component={Link}
            to={links[idx]}
            onClick={handleCloseNavMenu}
          >
            {page}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default BurgerMenu;
