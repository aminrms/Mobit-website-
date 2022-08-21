import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
// Material-Ui
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
// Css
import "./StylesPages/SellerBoxStyle.css";
import persianJs from "persianjs";
//Context
import { CartContext } from "../Context/CartContextProvider";

// Functions
import { isInCart } from "../helpers/Function";

const SellerBoxProduct = ({ product, TopImage, imageSrc }) => {
  const { cartState, dispatch } = useContext(CartContext);
  const history = useHistory();
  const addItemsHandler = () => {
    dispatch({ type: "add-item", payload: product });
  };
  return (
    <div className="seller-container">
      {TopImage ? (
        <div className={"img-box "}>
          <img src={imageSrc} alt="" />
        </div>
      ) : (
        <h4 style={{ color: "#444", fontSize: "20px" }}>فروشنده</h4>
      )}
      <h4 className="seller">
        <StoreIcon className="store-icon" />
        <span>عصر ارتباط</span>
      </h4>
      <div className="score-and-application">
        <span className="score">
          <div style={{ color: "#777", fontSize: "14.5px" }}>امتیاز:</div>
          <span>
            3.44
            <i className="bi bi-star-fill"></i>
          </span>
        </span>
        <span className="application">
          <div style={{ color: "#777", fontSize: "14.5px" }}>عملکرد:</div>
          <span>عالی</span>
        </span>
      </div>
      <div className="Warranty">
        <VerifiedUserIcon className="shield-icon" />
        <h4>گارانتی اصالت کالا و سلامت فیزیکی</h4>
      </div>
      <div className="store-and-send">
        <div className="store">
          <Inventory2Icon className="box-icon" />
          <h4> موجود در انبار مبیت</h4>
        </div>
        <div className="send">
          <LocalShippingIcon className="delivery-icon" />
          <h4> ارسال توسط مبیت</h4>
        </div>
      </div>
      <div className="price">
        <div className="discountPrice">
          <del className="removePrice">
            {persianJs(`415,000`).englishNumber().toString()}
          </del>
          <span className="discount">
            {persianJs(`14`).englishNumber().toString()}%
          </span>
        </div>
        <div className="currentPrice">
          <h2 style={{ color: "#333" }}>
            {persianJs(`${(415000 - (14 * 415000) / 100).toLocaleString()}`)
              .englishNumber()
              .toString()}
            تومان
          </h2>
        </div>
      </div>
      <div className="add-to-cart">
        {isInCart(cartState, product.id) ? (
          <button style={{ background: "#fff", border: "2px solid #3b7fff" }}>
            <Link to={"/cart"}>مشاهده سبد خرید</Link>
          </button>
        ) : (
          <button onClick={addItemsHandler}>افزودن به سبد خرید</button>
        )}
      </div>
      <h6>
        <a href="#">درخواست خرید عمده کالا</a>
      </h6>
    </div>
  );
};

export default SellerBoxProduct;
