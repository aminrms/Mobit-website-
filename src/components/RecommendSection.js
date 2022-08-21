import React, { Component } from "react";
import "./RecommendSectionInfo/RecommendSectionStyle.css";
import RecData from "./RecommendSectionInfo/RecData";
import SliderComponent from "./sliderComponent";
class RecommendSection extends Component {
  render() {
    return (
      <>
        <section className="recommend-section">
                <SliderComponent
                  data={RecData}
                  title={"پیشنهادات ویژه"}
                  seePart={"مشاهده لیست کامل"}
                  link={"/promotion"}
                />
        </section>
      </>
    );
  }
}

export default RecommendSection;
