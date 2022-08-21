import React, { Component } from 'react';
import SliderComponent from './sliderComponent';
import PowerBankData from './PowerBankInfo/PowerBankData';
class PowerBank extends Component {
    render() {
        return (
          <div>
            <SliderComponent
              data={PowerBankData}
              title={"پاور بانک"}
              seePart={"مشاهده همه"}
              link={"/powerBank"}
            />
          </div>
        );
    }
}

export default PowerBank;