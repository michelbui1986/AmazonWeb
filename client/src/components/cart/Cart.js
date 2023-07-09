import React from "react";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./cart.css";
const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="" alt="cart" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <NavLink to="/buynow">
              <button className="cart_btn1">Buy now</button>
            </NavLink>
          </div>
        </div>
        <div className="right_cart">
          <div>
            <h3>xxxx</h3>
            <h4>yyyy</h4>
          </div>
          <Divider />
          <p className="mrp">
            M.R.P. : 999 € <del></del>
          </p>
          <p>
            Deal of the Day : <span style={{ color: "#B12704" }}>20.00</span>
          </p>
          <p>
            You save :{" "}
            <span style={{ color: "#B12704" }}>
              {20} ({20})
            </span>
          </p>

          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>{20}</span>{" "}
            </h5>
            <h4>
              FREE Delivery :{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>{20}</span>{" "}
              Details
            </h4>
            <p style={{ color: "#111" }}>
              Fastest delivery:{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Item:{" "}
            <span
              style={{
                color: "#565959",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.4px",
              }}>
              {"ok"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
