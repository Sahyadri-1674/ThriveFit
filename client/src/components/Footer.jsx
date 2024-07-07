import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/grmLogo.png";
const Footer = () => {
  return (
    <Box mt={20} bgcolor={"#e6f7ff"}>
      <Stack gap={2} alignItems={"center"} px="40px" pt="24px">
        <img src={Logo} alt="logo" width={270} height={200} />
        <Typography variant="h5" pb={5} mb={1}>
          Made by Prasad Arote
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
