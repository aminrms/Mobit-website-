import React, { useContext } from "react";

// Material-Ui
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Skeleton, Typography } from "@mui/material";
// Context
import { CartContext } from "../../Context/CartContextProvider";
import { Link } from "react-router-dom";
// Css
import "./Cart.css";
import persianJs from "persianjs";
const Cart = ({ data }) => {
  const { image, title, price, id, quantity } = data;
  const { dispatch } = useContext(CartContext);
  return (
    <div className="cart">
      {image ? (
        <div className="img-box">
          <Link to={`/product/${id}`}>
            <img src={image} alt={title} />
          </Link>
        </div>
      ) : (
        <Skeleton width={40} height={40} />
      )}
      <div className="cart-details">
        <div className="title">
          <Link to={`/product/${id}`}>
            {" "}
            گوشی موبایل شیائومی مدل POCO M3 دو سیم‌ کارت ظرفیت 64 گیگابایت و رم
            4 گیگابایت{" "}
          </Link>
        </div>
        <div className="cart-handlers">
          <div className="remove">
            <button
              onClick={() => dispatch({ type: "remove-item", payload: data })}
            >
              <DeleteOutlineIcon />
              حذف
            </button>
          </div>
        </div>
      </div>
      <div className="in-de-part">
        <button onClick={() => dispatch({ type: "increase", payload: data })}>
          <i className="bi bi-plus"></i>
        </button>
        <span>{persianJs(`${quantity}`).englishNumber().toString()}</span>
        <button onClick={() => dispatch({ type: "decrease", payload: data })}>
          <i className="bi bi-dash"></i>
        </button>
      </div>
      <div className="cart-price">
        <Typography
          variant="subtitle1"
          component={"span"}
          sx={{ display: { xs: "flex", md: "none" }, ml: 0.5, color: "#555" }}
        >
          قیمت:
        </Typography>
        <span>
          {persianJs(`${price}`).englishNumber().toString()}
          تومان
        </span>
      </div>
    </div>
  );
};

export default Cart;
