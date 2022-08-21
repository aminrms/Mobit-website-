import React, { Component } from "react";
import "../header.css";
import styled from "styled-components";
import SubMenuData from "./submenuData";
import SubMenuLinks from "./subMenuLinksData";
import "./headerStyle.css";
const Div = styled.div``;
const Li = styled.li``;
const A = styled.a``;
const Image = styled.img``;
class HeaderLinks extends Component {
  constructor() {
    super();
    this.state = {
      showSubMenu: false,
      showLinks: false,
    };
  }
  render() {
    return (
      <Li
        className={
          this.props.item.subMenu
            ? this.state.showSubMenu
              ? "menu-list active"
              : "menu-list"
            : "menu-list"
        }
      >
        <A
          className="menu-link"
          href="https://www.mobit.ir/product/haylou-gamodio-eve1-wireless-earbuds/features"
        >
          <Image src={this.props.item.logo} alt="#" />
          {this.props.item.name}
        </A>
      </Li>
    );
  }
}
export default HeaderLinks;
