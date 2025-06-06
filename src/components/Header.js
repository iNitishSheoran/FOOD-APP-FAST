import { LOGO_URL } from "../utils/constants";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

  const [btnNameReact, setBtnNameReact] = React.useState("Login");

  const onlineStatus = useOnlineStatus();
  
      useEffect(() => {
        console.log("useEffect called");
      },[btnNameReact]);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            src= {LOGO_URL}
            alt="logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li> <Link to = "/" > Home </Link> </li>
            <li> <Link to = "/about" > About Us </Link> </li>
            <li> <Link to = "/contact" > Contact Us </Link> </li>
            <li> <Link to = "/grocery" > Grocery </Link> </li>
            <li>Cart</li>
            <button className="login"
            onClick={()=>{
              btnNameReact === "Login" ?
              setBtnNameReact("Logout") :
              setBtnNameReact("Login");
            }}>
              {btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;