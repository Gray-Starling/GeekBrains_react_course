import React from "react";
import "./Header.css";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="span" sx={{ flexGrow: 2 }}>
          Real Chat
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
