// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import LearnMore from "./pages/LearnMore"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/learn-more" element={<LearnMore />} />
    </Routes>
  );
};

export default App;
