import React, { Component } from "react";
import Images from "./ImageComponent/Images";
import "./TwoImageInfo/TwoImage.css";
import TypesOfCover from "../images/TypesOfCover.jpg";
import HowaviNova9 from "../images/HowaviNova9.jpg";
class TwoImageSection extends Component {
  render() {
    return (
      <div className="container">
        <Images src={TypesOfCover} alt={""} className={'TwoImg'} />
        <Images src={HowaviNova9} alt={""} className={'TwoImg'} />
      </div>
    );
  }
}

export default TwoImageSection;
