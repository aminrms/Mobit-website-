import React, { Component, useState, useContext } from "react";
import axios from "axios";
import PromotionData from "./PagesInfo/PromotionData";
import Card from "../components/Card";
import "./StylesPages/Promotion.css";
import Skeleton from "../components/Skeleton";
import { ProductsContext } from "../Context/ProductsContextProvider";
const Promotion = () => {
  const Products = useContext(ProductsContext);

  return (
    <main>
      <section className="timerSection-of-Promotion">
        <div className="timer">
          {/* <div id="seconds">
              <span></span>
              <h6></h6>
            </div>
            <div id="minutes">
              <span></span>
              <h6></h6>
            </div>
            <div id="hours">
              <span></span>
              <h6></h6>
            </div>
            <div id="days">
              <span></span>
              <h6></h6>
            </div> */}
        </div>
      </section>
      <section className="promotion-products">
        <div className="categories">
          <h3>دسته بندی ها : </h3>
          <div className="category-box">
            {PromotionData.map((item) => {
              return (
                <div key={item.id}>
                  <a className="category-item" href="#">
                    {item.text}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <section className="products">
          {}
          {Products.length
            ? Products.map((product, index) => {
                return (
                  <div key={product.id.toString()}>
                    <Card
                      src1={product.image}
                      discount={product.rating.rate}
                      title={product.title}
                      nowPrice={product.price}
                      InPages={true}
                      id={product.id}
                    />
                  </div>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
                return (
                  <div key={item.toString()}>
                    <div className="skeleton-section">
                      <Skeleton type={"image"} />
                      <Skeleton type={"text"} />
                      <Skeleton type={"title"} />
                    </div>
                  </div>
                );
              })}
        </section>
      </section>
    </main>
  );
};

export default Promotion;
