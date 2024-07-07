import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;
const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/tutorials" exact element={<Tutorials />} />
              <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer/>
          </Container>
        ) : (
          <Container>
            <Authentication></Authentication>
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
