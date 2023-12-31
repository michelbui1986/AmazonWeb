import React, { useEffect, useState, useContext } from "react";
import { Divider } from "@mui/material";
import { useParams, useNavigate, NavLink } from "react-router-dom";
// import { useParams, useNavigate, NavLink } from "react-router-dom";


import "./cart.css";
import { LoginContext } from "../context/ContextProvider";

const Cart = () => {
  const history = useNavigate();
  const { id } = useParams("");
  const { account, setAccount } = useContext(LoginContext);
  const [inddata, setIndedata] = useState({});
  const getinddata = async () => {
    const res = await fetch(`http://localhost:8005/getproductsone/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(res);
    console.log("data from cart:", data);
    setIndedata(data);
    // console.log(inddata.title.shortTitle);
  };
  // console.log(id)
  useEffect(() => {
    getinddata();
  }, [id]);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const addToCart = async (id) => {
    try {
      const checkResult = await fetch(`http://localhost:8005/addcart/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inddata }),
        credentials: "include",
      });

      if (checkResult.status === 401) {
        console.log("user invalid");
      } else {
        const data1 = await checkResult.json();
        console.log("test", data1, " frontend data");
        alert("data added to your cart");
        history("/buynow");
        setAccount(data1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart_section">
      {inddata && Object.keys(inddata).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={inddata.detailUrl} alt="cart" />
            <div className="cart_btn">
              <button
                className="cart_btn1"
                onClick={() => addToCart(inddata.id)}>
                Add to Cart
              </button>
              <NavLink to="/buynow">
                <button className="cart_btn1">Buy now</button>
              </NavLink>
            </div>
          </div>
          <div className="right_cart">
            <div>
              <h3>{inddata.title.shortTitle}</h3>
              <h4>{inddata.title.longTitle}</h4>
            </div>
            <Divider />
            <p className="mrp">
              M.R.P. : {inddata.price.mrp} € <del></del>
            </p>
            <p>
              Deal of the Day :{" "}
              <span style={{ color: "#B12704" }}>{inddata.price.cost}.00</span>
            </p>
            <p>
              You save :{" "}
              <span style={{ color: "#B12704" }}>
                {inddata.price.mrp - inddata.price.cost} (
                {inddata.price.discount})
              </span>
            </p>

            <div className="discount_box">
              <h5>
                Discount :{" "}
                <span style={{ color: "#111" }}>{inddata.discount}</span>{" "}
              </h5>
              <h4>
                FREE Delivery :{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  {`${day + 3}-${month}-${year}`}
                </span>{" "}
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
                {inddata.description}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
