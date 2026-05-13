//import useContext
import React, { useContext } from 'react';

//import context
import { AuthContext } from '../context/AuthContext';

//import react router dom
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../views/home/Index.jsx";
import Register from "../views/register/Index.jsx";
import Login from "../views/login/Index.jsx";

export default function AppRoutes() {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={ <Home/> }  />
            <Route  path="/register" element={ isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Register/>} />
            <Route path="/login" element={ isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Login/>} />
        </Routes>
    );
}
