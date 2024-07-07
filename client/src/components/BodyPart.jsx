import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/weight.png";
import styles from "./BodyPart.module.css";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className={styles["bodyPart-card"]}
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #0b134c",
            background: "#e6f7ff",
            borderBottomLeftRadius: "20px",
            width: "180px",
            height: "172px",
            cursor: "pointer",
            gap: "27px",
          }
        : {
            background: "#e6f7ff",
            borderBottomLeftRadius: "20px",
            width: "180px",
            height: "172px",
            cursor: "pointer",
            gap: "27px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
