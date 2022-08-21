import React, { Component } from "react";
import Images from "./ImageComponent/Images";
import FlashMemory from "../images/flashMemory.jpg";
import SmartCamera from "../images/smartCamera.jpg";
import MashinehEslah from "../images/MashinehEslah.jpg";
import TypesOfWatch from "../images/TypesOfWatch.jpg";
import "./FourImageInfo/FourImage.css";
class FourImage extends Component {
  render() {
    return (
      <div className="FourImage-part">
        <Images src={FlashMemory} alt={""} className={"FourImg"} />
        <Images src={SmartCamera} alt={""} className={"FourImg"} />
        <Images src={MashinehEslah} alt={""} className={"FourImg"} />
        <Images src={TypesOfWatch} alt={""} className={"FourImg"} />
      </div>
    );
  }
}

export default FourImage;
