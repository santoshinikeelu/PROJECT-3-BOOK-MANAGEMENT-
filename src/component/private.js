import React from "react";
import {Navigate,Outlet} from "react-router-dom"
import Signup from "./signup";

const PrivateComponent = () => {
    const auth = localStorage.getItem("users")
    return(
       auth?<Outlet />:<Navigate to="/signup" />
    )
}

export default PrivateComponent