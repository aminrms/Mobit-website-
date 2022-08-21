import React, { Component } from "react";
import Images from "./ImageComponent/Images";
import "./TechnologyNews/TechnologyNews.css";
import BestSamsung from "../images/1.webp";
import BestIphone from "../images/2.webp";
import BestHonor from "../images/3.webp";
import BestHeadPhone from "../images/4.webp";
class TechnologyNews extends Component {
  render() {
    return (
      <section className="TechnologyNews-section">
        <h2>اخبار و تکنولوژی</h2>
        <div className="TechnologyNews-part">
          <Images
            src={BestSamsung}
            alt={""}
            className={"FourImg"}
            techNews={true}
            title={"بهترین گوشی سامسونگ (در سال 1401، 2022)"}
          />
          <Images
            src={BestIphone}
            alt={""}
            className={"FourImg"}
            techNews={true}
            title={"بهترین گوشی اپل (در سال 1401، 2022)"}
          />
          <Images
            src={BestHonor}
            alt={""}
            className={"FourImg"}
            techNews={true}
            title={"بهترین گوشی آنر (در سال 1401، 2022)"}
          />
          <Images
            src={BestHeadPhone}
            alt={""}
            className={"FourImg"}
            techNews={true}
            title={"بهترین هندزفری تا 300 تومان (در سال 1401، 2022)"}
          />
        </div>
      </section>
    );
  }
}

export default TechnologyNews;
