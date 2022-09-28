import React from "react";
import { NavLink } from "react-router-dom";

const  linkStyles = {
  color: "blue",
  display : "block"
}

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
        <NavLink to="/" exact style={linkStyles} activeStyle={{
            color: "purple"
          }}>Home</NavLink>
        </li>
        <li>
        <NavLink to="/movies" exact style={linkStyles} activeStyle={{
            color: "purple"
          }}>Movies</NavLink>
        </li>
        <li>
        <NavLink to="/directors" exact style ={linkStyles} activeStyle={{
            color: "purple"
          }}> Directors</NavLink>
        </li>
        <li>
        <NavLink to="/actors" exact style={linkStyles} activeStyle={{
            color: "purple"
          }}>Actors</NavLink>
        </li>         
      </ul>
    </div>
  );
}

export default NavBar;
