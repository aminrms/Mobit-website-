import React from "react";
import SpecificationsData from "./SpecificationData";
import "./StylesPages/SpecificationSectionStyle.css";
const SpecificationSection = () => {
  return (
    <section className="Specifications-container" id="Specifications-container">
      <div className="header">
        <i class="bi bi-menu-button-wide"></i>
        <h4>مشخصات کالا</h4>
      </div>
      <section className="Specifications">
        {SpecificationsData.map((dsc) => {
          return (
            <div className="container-of-specifications">
              <div className="category">
                <li>{dsc.category}</li>
              </div>
              <ul className="lists">
                {dsc.listsItems.map((item) => {
                  return (
                    <li>
                      <div className="title">{item.title}</div>
                      <div className="description">{item.dsc}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default SpecificationSection;
