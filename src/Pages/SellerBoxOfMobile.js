import React, { useContext } from "react";
// Material-UI
import StoreIcon from "@mui/icons-material/Store";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// Css
import "./StylesPages/SellerStyleMobile.css";
// Context
import { CartContext } from "../Context/CartContextProvider";

const SellerBoxOfMobile = () => {
  return (
    <div className="sellerBox-mobile">
      <div className="header">
        <StoreIcon className="icon"/>
        <h4>فروشندگان کالا</h4>
      </div>
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
    </div>
  );
};

export default SellerBoxOfMobile;
