import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const BurgerMenu = ({ pages, links }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rotateBurger, setRotateBurger] = useState(false);

  const handleOpenNavMenu = (event) => {
    setRotateBurger(!rotateBurger);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setRotateBurger(!rotateBurger);
    setAnchorElNav(null);
  };

  const rotate = rotateBurger ? "rotate(90deg)" : "rotate(0)";

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
            component={Link}
            to={links[idx]}
            key={page}
            onClick={handleCloseNavMenu}
          >
            <Typography textAlign="center"> {page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default BurgerMenu;
