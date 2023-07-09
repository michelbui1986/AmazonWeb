import React from "react";
import { Divider } from "@mui/material";
import "./buynow.css";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";
const BuyNow = () => {
  return (
    <>
      <div className="buynow_section">
        <div className="buynow_container">
          <div className="left_buy">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            <span className="leftbuyprice">Price</span>
            <Divider />
            <>
              <div className="item_containert">
                <img src="" alt="imgitem" />
                <div className="item_details">
                  <h3>xxx</h3>
                  <h3>yyy</h3>
                  <h3 className="diffrentprice">€20.00</h3>
                  <p className="unusuall">Usually dispatched in 8 days.</p>
                  <p>Eligible for FREE Shipping</p>
                  <img
                    src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                    alt="logo"
                  />
                  <Option />
                </div>
                <h3 className="item_price">€30.00</h3>
              </div>
              <Divider />
            </>

            <Subtotal items="20" />
          </div>
          <Right items={20} />
        </div>
      </div>
    </>
  );
};

export default BuyNow;
