import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SubMenuData from "./submenuData";
import Logo from "../../images/mobit-logo.7d4c25e.svg";
import "./RightNavbar.css";
import HeaderData from "./headerdata";
const RightNav = styled.div``;
class RightNavbar extends Component {
  constructor() {
    super();
    this.state = {
      closeMenu: false,
      submenu: false,
    };
    this.rightNav = React.createRef();
  }
  closeHandler = () => {
    this.setState({
      closeMenu: !this.state.closeMenu,
    });
  };
  changeClass = () => {
    this.rightNav.current.classList.toggle("open");
  };
  showSubMenuFirst = () => {
    this.setState({
      submenu: !this.state.submenu,
    });
  };
  showSubMenuSec = () => {
    this.setState({
      unSubmenu: !this.state.unSubmenu,
    });
  };
  render() {
    const { submenu  ,unSubmenu} = this.state;
    return (
      <RightNav ref={this.rightNav} className={this.props.className}>
        <div className={"menu"}>
          <div className="menu-header">
            <i
              className="bi bi-arrow-right-short"
              onClick={this.changeClass}
            ></i>
            <div className="img-box">
              <Link to="/" className="logoContainer">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </div>
          <ul className="menu-items">

          </ul>
        </div>
        <div className={"menu-cover"}></div>
      </RightNav>
    );
  }
}

export default RightNavbar;
