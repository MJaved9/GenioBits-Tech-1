import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import HomePage from "../Pages/HomePage";
import MyProfile from "../Pages/MyProfile";
const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<MyProfile/>} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
