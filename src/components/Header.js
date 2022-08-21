import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import HeaderData from "./HeaderInfo/headerdata";
import "../components/HeaderInfo/headerStyle.css";
import HeaderLinks from "./HeaderInfo/headerLinks";
import Logo from "../images/mobit-logo.7d4c25e.svg";
import BottomNavbar from "./BottomNavbar";
import SearchBox from "./HeaderInfo/SearchBox";
import styled from "styled-components";
import RightNavbar from "./HeaderInfo/RightNavbar";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import { CartContext } from "../Context/CartContextProvider";
import persianJs from "persianjs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const HeaderTag = styled.header`
  @media (max-width: 990px) {
  }
`;
// Context

const Header = () => {
  const [inputText, setInputText] = useState("");
  const [linkBox, setLinkBox] = useState(false);
  const [classRightNav, setClassRightNav] = useState("rightNav");
  const hamburgerBar = useRef(null);
  const searchBox = useRef(null);
  const navbar = useRef(null);
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const hamburgerHandler = () => {
    hamburgerBar.current.classList.toggle("active");

    setClassRightNav(
      `${classRightNav} ${
        hamburgerBar.current.classList == "hamburger-menu active" ? "open" : ""
      }`
    );
  };

  const searchBoxHandler = () => {
    searchBox.current.classList.toggle("active");
  };
  let scroll = document.documentElement.scrollTop;
  window.addEventListener("scroll", () => {
    let scrolled = document.documentElement.scrollTop;
    if (scrolled > scroll) {
      navbar.current.classList.remove("sticky");
    } else {
      navbar.current.classList.add("sticky");
    }
    scroll = document.documentElement.scrollTop;
  });

  const mouseEnterHandler = () =>{
    setLinkBox(true)
  }
  const mouseLeave = () => {
    setLinkBox(false);
  };
  const { cartState } = useContext(CartContext);

  return (
    <>
      <HeaderTag>
        <section className="HeaderNavbar">
          <div
            ref={hamburgerBar}
            className={"hamburger-menu"}
            onClick={hamburgerHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo-box">
            <Link to="/" className="logoContainer">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <SearchBox showDis={true} unShow={false} />
          <div className="sendToCities">
            <i className="bi bi-geo-alt"></i>
            <span className="sending">
              <span>انتخاب شهر </span>
            </span>
          </div>
          <div className="ButtonsBox">
            <li className="signUpLoginLink">
              <Link>
                <PersonIcon style={{ color: "#ddd" }} />
                <span className="text">ورود / ثبت نام</span>
              </Link>
            </li>
            <li
              className={linkBox ? "CartBox show" : "CartBox"}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeave}
            >
              {cartState.itemsCounter ? (
                <>
                  <Link to="/cart">
                    <LocalMallIcon style={{ color: "#3b7fff" }} />
                    <span style={{ margin: "0 3px" }}>
                      {persianJs(`${cartState.itemsCounter}`)
                        .englishNumber()
                        .toString()}
                    </span>
                    <span
                      style={{
                        margin: "0 5px",
                        fontSize: "13px",
                        alignItems: "center",
                      }}
                    >
                      کالا
                      <KeyboardArrowDownIcon
                        style={{
                          fontSize: "16px",
                        }}
                      />
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/cart">
                    <LocalMallIcon style={{ color: "#ccc" }} />
                    <span>سبد خرید</span>
                  </Link>
                </>
              )}
              {cartState.itemsCounter ? (
                <div className="small-boxOf-cart">
                  {cartState.selectedItems.map((item) => {
                    return (
                      <>
                        <Link
                          to={`/product/${item.id}`}
                          className="small-box-product"
                          style={{ width: "100%", height: "60px" }}
                        >
                          <div className="img-box">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="detail">
                            <div className="title">
                              <span>{item.title}</span>
                            </div>
                            <div className="price">{item.price} تومان </div>
                          </div>
                        </Link>
                      </>
                    );
                  })}
                  <div className="btn-part">
                    <span style={{ color: "#333" }}>
                      {cartState.total}تومان
                    </span>
                    <div className="btn">
                      <Link to={"/cart"}>مشاهده سبد خرید</Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="small-boxOf-cart" style={{ height: "200px" }}>
                  <LocalMallIcon
                    style={{ color: "#ccc" }}
                    sx={{ fontSize: 40 }}
                  />
                  <h4>سبد خرید شما خالی است</h4>
                </div>
              )}
            </li>
          </div>
        </section>
        <div
          ref={searchBox}
          className="search-container-mobile"
          onClick={searchBoxHandler}
        >
          <div class="search-container">
            <SearchBox showDis={false} unShow={true} />
          </div>
          <div
            className="searchBox-cover"
            // onClick={this.coverSearchHandel}
          ></div>
        </div>

        <RightNavbar className={classRightNav} />
      </HeaderTag>
      <section className={"top-header"} ref={navbar}>
        <ul className="menu">
          {HeaderData.map((item, index) => {
            return <HeaderLinks item={item} key={index} />;
          })}
        </ul>
      </section>
      <BottomNavbar />
    </>
  );
};
export default Header;
