import { LOGO_URL } from "../utils/constants";
import React from "react";
import { useState, useEffect } from "react";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = React.useState("Login");
  
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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