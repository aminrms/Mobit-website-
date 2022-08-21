import React, { useContext, useState } from "react";
import styled from "styled-components";

// Material-Ui
import { Button, Skeleton, Tooltip } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Context
import { ProductsContext } from "../Context/ProductsContextProvider";
import { CartContext } from "../Context/CartContextProvider";

// Component
import SellerBoxProduct from "./SellerBoxProduct";
import SpecificationSection from "./SpecificationSection";

// Css
import "./StylesPages/Product.css";
import SellerBoxOfMobile from "./SellerBoxOfMobile";
import { isInCart } from "../helpers/Function";
import { Link } from "react-router-dom";
import persianJs from "persianjs";
const ProductDetail = styled.div``;
const Product = (props) => {
  const [scrollDown, setScrollDown] = useState(false);
  const id = props.match.params.id;
  const products = useContext(ProductsContext);
  const product = products[id - 1];
  const scrollHandler = () => {
    if (window.scrollY > 300) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);

  const clickHandler = (event) => {
    event.preventDefault();
    document.querySelector("#Specifications-container").scrollIntoView({
      behavior: "smooth",
    });
  };
  const { cartState, dispatch } = useContext(CartContext);
  const addItemsHandler = () => {
    dispatch({ type: "add-item", payload: product });
  };
  return (
    <>
      {product ? (
        <>
          <ProductDetail className="product-detail">
            <div className="details-and-comments">
              <section className="detail-container">
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} />
                  <div className="more-details-image">
                    <Tooltip
                      placement="top"
                      title="افزودن به لیست علاقه مندی ها"
                    >
                      <li>
                        <i className="bi bi-heart"></i>
                      </li>
                    </Tooltip>

                    <Tooltip
                      placement="right"
                      title="اطلاع رسانی پیشنهادی ویژه"
                    >
                      <li>
                        <i class="bi bi-bell-slash"></i>
                      </li>
                    </Tooltip>
                    <Tooltip placement="right" title="مقایسه محصول">
                      <li>
                        <i class="bi bi-disc"></i>
                      </li>
                    </Tooltip>
                    <Tooltip placement="left" title="نمودار قیمت">
                      <li>
                        <i class="bi bi-bar-chart-fill"></i>
                      </li>
                    </Tooltip>
                    <Tooltip placement="bottom" title="اشتراک گذاری">
                      <li>
                        <i class="bi bi-share-fill"></i>
                      </li>
                    </Tooltip>
                  </div>
                </div>
                <div className="product-name-and-brand-container">
                  <div className="title">
                    <span>نام کالا:</span>
                    <div>{product.title}</div>
                  </div>
                  <div className="description">
                    <span>توضیحات مختصر:</span>
                    <div>{product.description}</div>
                  </div>
                  <div className="brand-and-color">
                    <div className="brand">
                      <span>دسته بندی:</span>
                      <div>{product.category}</div>
                    </div>
                    <div className="color">
                      <span>رنگ:</span>
                      <div></div>
                    </div>
                    <Button
                      href="#Specifications-container"
                      id="atag"
                      onClick={clickHandler}
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        gap: "0",
                        width: "120px",
                        borderBottom: "1px solid rgba(233, 233, 233, 0.8)",
                        mb: 1,
                      }}
                    >
                      مشاهده بیشتر
                    </Button>
                  </div>
                </div>
              </section>
              <SellerBoxOfMobile />
              <SpecificationSection />
            </div>
            <SellerBoxProduct
              TopImage={scrollDown}
              product={product}
              imageSrc={product.image}
            />
          </ProductDetail>
          <div className="pay-and-continue-mobile">
            <div className="pay-btn-mobile">
              {isInCart(cartState, product.id) ? (
                <button
                  style={{ background: "#fff", border: "2px solid #3b7fff" }}
                >
                  <Link to={"/cart"}>مشاهده سبد خرید</Link>
                </button>
              ) : (
                <button onClick={addItemsHandler}>افزودن به سبد خرید</button>
              )}
            </div>
            <div className="prices">
              <div className="price-discount">
                <span>{persianJs(`14`).englishNumber().toString()}%</span>
                <del>{persianJs(`415,000`).englishNumber().toString()}</del>
              </div>
              <div className="current-price">
                <h3 style={{ color: "#333" }}>
                  {persianJs(
                    `${(415000 - (14 * 415000) / 100).toLocaleString()}`
                  )
                    .englishNumber()
                    .toString()}
                  تومان
                </h3>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Skeleton
            type="tex"
            width={"95%"}
            height={40}
            style={{ margin: "0 auto" }}
          />
          <Skeleton
            type="rectangular"
            width={"95%"}
            height={500}
            style={{ margin: "0 auto" }}
          />
        </>
      )}
    </>
  );
};

export default Product;
