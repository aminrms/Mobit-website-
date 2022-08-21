import React, { Component } from "react";
import SliderComponent from "./sliderComponent";
import PhoneData from "./PhoneInfo/PhoneData";
class Phone extends Component {
  render() {
    return (
      <div>
        <SliderComponent
          data={PhoneData}
          title={"گوشی موبایل"}
          seePart={"مشاهده همه"}
          link={"/phone"}
        />
      </div>
    );
  }
}

export default Phone;
