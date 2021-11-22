import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from ".././assets/avatar.png";

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Avatar" />
    </Box>
  );
};

export default Header;
