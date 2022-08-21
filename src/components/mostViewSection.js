import React, { Component } from "react";
import MostViewData from "./mostViewSectionInfo/mostViewDatas";
import SliderComponent from "./sliderComponent";
class MostViewSection extends Component {
  render() {
    return (
      <>
        <SliderComponent
          data={MostViewData}
          title={"پربازدیدترین ها"}
          seePart={"مشاهده لیست کامل"}
          link={'/mostView'}
        />
      </>
    );
  }
}

export default MostViewSection;
