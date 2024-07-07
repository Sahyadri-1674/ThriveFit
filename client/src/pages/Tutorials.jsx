import React,{useState} from "react";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Tutorials = () => {
     const [exercises, setExercises] = useState([]);
     const [bodyPart, setBodyPart] = useState("all");
     console.log(bodyPart);
  return (
    <>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </>
  );
};

export default Tutorials;
