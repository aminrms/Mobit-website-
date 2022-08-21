import React, { Component } from "react";
import NewProductsData from "./NewProductsInfo/NewProductsData";
import SliderComponent from "./sliderComponent";
class NewProducts extends Component {
  render() {
    return (
      <div>
        <SliderComponent
          link={"/newProducts"}
          data={NewProductsData}
          title={"محصولات جدید"}
          seePart={"مشاهده همه"}
        />
      </div>
    );
  }
}

export default NewProducts;
