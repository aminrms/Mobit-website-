import React from "react";
import "./CardSearchStyle.css";
import { Link } from "react-router-dom";
const CardSearch = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="card-search">
      <div className="img-search">
        <img src={item.image} alt={item.category} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <span>{item.title}</span>
        </div>
        <div className="card-action">
          <div className="count">
            <span>{item.rating.count}</span>
            <span>:تعداد</span>
          </div>
          <div className="price">
            <span>{item.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardSearch;
