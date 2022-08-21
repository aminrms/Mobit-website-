import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// Css
import persianJs from "persianjs";
import "./StylesPages/ShoppingCart.css";
// Material-Ui
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DeleteIcon from "@mui/icons-material/Delete";
// Context
import { CartContext } from "../Context/CartContextProvider";
import Cart from "./StylesPages/Cart";

const ShoppingCart = () => {
  const { cartState, dispatch } = useContext(CartContext);
  const history = useHistory();

  return (
    <section
      className={cartState.itemsCounter ? "ShoppingCart " : "ShoppingCart full"}
    >
      <section className="show-items">
        <div className="header-cart">
          <Link
            to={""}
            className={history.location.pathname == "/cart" ? "active" : ""}
          >
            <LocalMallIcon className="cart-icon" />
            <span>سبد خرید</span>
          </Link>
        </div>
        {cartState.itemsCounter ? (
          <div className="items">
            <div className="item">
              {cartState.selectedItems.map((item) => (
                <Cart data={item} key={item.id} />
              ))}
            </div>
            <div className="detail">
              <div className="all-handlers">
                <div className="products-count">
                  <span className="count" style={{ marginLeft:'5px'}}>
                    {persianJs(`${cartState.itemsCounter}`)
                      .englishNumber()
                      .toString()}
                  </span>
                  <span>کالا در سبد خرید</span>
                </div>
                <div className="remover-all">
                  <button onClick={() => dispatch({ type: "clear" })}>
                    <DeleteIcon />
                    حذف تمامی آیتم ها
                  </button>
                </div>
              </div>
              <div className="total-price">
                <span>مبلغ قابل پرداخت:</span>
                <span>
                  {persianJs(`${cartState.total}`).englishNumber().toString()}
                  تومان
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="cart-empty">
              <LocalMallIcon className="cart-icon" />
              <span>سبد خرید شما خالی است</span>
              <Link to="/">شروع خرید</Link>
            </div>
          </>
        )}
      </section>

      {cartState.itemsCounter ? (
        <section className="calculation">
          <h3>سفارش شما</h3>
          <div className="price-lists">
            <li>
              <span>مبلغ کالا ها</span>
              <span>
                {persianJs(`${cartState.total}`).englishNumber().toString()}
                تومان
              </span>
            </li>
            <li>
              <span>تخفیف</span>
              <span>
                {persianJs(`0`).englishNumber().toString()}
                تومان
              </span>
            </li>
            <li>
              <span>مبلغ کالا ها</span>
              <span>
                {persianJs(`${cartState.total}`).englishNumber().toString()}
                تومان
              </span>
            </li>
          </div>
          <div className="the-amount-payable">
            <span> مبلغ قابل پرداخت</span>
            <span>
              {persianJs(`${cartState.total}`).englishNumber().toString()}
              تومان
            </span>
          </div>
          <div className="pay-btn">
            <Link>ادامه و پرداخت</Link>
          </div>
        </section>
      ) : null}
      {cartState.itemsCounter ? (
        <div className="pay-part-mobile">
          <div className="pay-btn">
            <Link>ادامه و پرداخت</Link>
          </div>
          <div className="sumOfPrice">
            <div> مجموع:</div>
            <span>
              {persianJs(`${cartState.total}`).englishNumber().toString()}
              تومان
            </span>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ShoppingCart;
