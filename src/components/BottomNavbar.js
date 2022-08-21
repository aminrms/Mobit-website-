import React, { Component } from "react";
import BottomNavbarData from "./BottomNavbarInfo/BottomNavbarData";
import { Link } from "react-router-dom";
import "./BottomNavbarInfo/BottomNavbar.css";
class BottomNavbar extends Component {
  render() {
    return (
      <section className="bottom-header">
        <ul className="bottom-navbar">
          {BottomNavbarData.map((item) => {
            return (
              <div key={item.id.toString()}>
                <li className="item">
                  <Link to={item.path}>
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default BottomNavbar;
