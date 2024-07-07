import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import styles from "./SearchExercises.module.css";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ]);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        setBodyParts(["all", ...bodyPartsData]);
      } catch (error) {
        console.error("Error fetching body parts data:", error);
      }
    };
    fetchExerciseData();
  }, []);

  return (
    <Stack
      alignItems="center"
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        ></TextField>

        <Button
          className={styles["search-btn"]}
          sx={{
            color: "#fff",
            textTransform: "none",
            width: { lg: "100px", xs: "80px" }, // Adjust the width here
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0", // Align the button to the right edge of the TextField
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        ></HorizontalScrollbar>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
