import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);
  const history = useNavigate();

  const getdetailsvaliduser = async () => {
    const res = await fetch("http://localhost:8005/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log("from getdetailsvaliduser: ", data);

    if (res.status !== 201) {
      console.log("first login");
    } else {

      setAccount(data);
    }
  };

  useEffect(() => {
    getdetailsvaliduser();
  }, []);
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/">
              {" "}
              <img src="./amazon_PNG25.png" alt="logo" />{" "}
            </NavLink>
          </div>
          <div className="nav_searchbar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            {account ? (
              <NavLink to="/home">sign out</NavLink>
            ) : (
              <NavLink to="/login">sign in</NavLink>
            )}
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account.carts.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}
            <p>cart</p>
          </div>
          {account ? (
            <Avatar
              className="avtar2"
              // onClick={handleClick}
              title={account.fname.toUpperCase()}>
              {account.fname[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar className="avtar" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
