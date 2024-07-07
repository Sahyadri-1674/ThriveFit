import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/gym.jpg";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          mt: { lg: "1px", xs: "100px" },
          ml: { sm: "50px" },
          textAlign: { xs: "center", sm: "left" },
          position: "relative",
          height: { lg: "80vh", xs: "auto" },
        }}
        className={styles["hero-container"]}
      >
        <Typography color="#009dbd" fontWeight="600" fontSize="39px" mt={8} >
          Fitness Club
        </Typography>
        <Typography
          fontWeight="700"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb={4}
        >
          Sweat, Smile <br /> Repeat
        </Typography>
        <Typography fontSize={22} mb={4}>
          Check Out the most effective exercise
        </Typography>

        <Button
          variant="contained"
          color="error"
          className={styles["hero-button"]}
        >
          Explore Exercises
        </Button>
        <Typography
          fontWeight={600}
          color={"#3cbbff"}
          sx={{
            opacity: 0.1,
            position: "absolute",
            top: "50%",
            left: { lg: "20%", xs: "5%" },
            display: { lg: "block", xs: "none" },
            zIndex: "2",
          }}
          fontSize={200}
        >
          Exercise
        </Typography>
        <img
          src={HeroBannerImage}
          alt="Hero Banner"
          className={styles["hero-banner-img"]}
        />
      </Box>
    </>
  );
};

export default HeroSection;
