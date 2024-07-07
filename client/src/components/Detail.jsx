import React from "react";
import { Typography, Stack, Button, List, ListItem } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import styles from "./Detail.module.css";
const Detail = ({ exerciseDetail }) => {
  const {
    bodyPart,
    gifUrl,
    name,
    target,
    equipment,
    secondaryMuscles,
    instructions,
  } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="90px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className={styles["detail-image"]}
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "44px", md: "30px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "20px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> is one of
          the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="14px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "20px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" }, fontWeight: 700 }}
          color="#4F4C4C"
        >
          Secondary Muscles:
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap="16px">
          {secondaryMuscles?.map((muscle, index) => (
            <Typography
              key={index}
              sx={{ fontSize: { lg: "20px", xs: "16px" }, color: "#4F4C4C" }}
            >
              {muscle}
            </Typography>
          ))}
        </Stack>

        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" }, fontWeight: 700 }}
          color="#4F4C4C"
        >
          Instructions:
        </Typography>
        <List>
          {instructions?.map((instruction, index) => (
            <ListItem key={index} sx={{ padding: "0" }}>
              <Typography
                sx={{ fontSize: { lg: "20px", xs: "16px" }, color: "#4F4C4C" }}
              >
                {`${index + 1}. ${instruction}`}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default Detail;
