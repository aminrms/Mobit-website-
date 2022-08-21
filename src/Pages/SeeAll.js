import React, { Component } from "react";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import "./StylesPages/SeeAll.css";
class SeeAll extends Component {
  constructor() {
    super();
    this.state = {
      switch: false,
      inputValue1: 100,
      inputValue2: 9000000,
      isLower: false,
    };
    this.searchBox = React.createRef();
  }
  switchHandler = () => {
    this.setState({
      switch: !this.state.switch,
    });
  };
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    event.target.name === "inputValue1" && event.target.value < 100
      ? this.setState({
          isLower: true,
        })
      : this.setState({
          isLower: false,
        });
  };

  render() {
    window.addEventListener("scroll", {});
    const { data } = this.props;
    return (
      <>
        <main className="SeeAll-Section">
          <section className="search-section">
            <div className="search-box">
              <h3>جستجو در کالاها</h3>
              <input
                type={"text"}
                placeholder="نام کالا یا برندیا...راوارد نمایید"
              />
            </div>
            <div className="customization-box">
              <div className="available-products">
                <h4>فقط کالاهای موجود</h4>
                <div
                  className={
                    this.state.switch
                      ? "switch-container active"
                      : "switch-container"
                  }
                  onClick={this.switchHandler}
                >
                  <span></span>
                </div>
              </div>
              <div className="Price-range">
                <h4> محدوده قیمت</h4>
                <div className="apply-price-range">
                  <span>از</span>
                  <div className="input-container">
                    <input
                      type={"text"}
                      value={this.state.inputValue1}
                      onChange={this.changeHandler}
                      name="inputValue1"
                      className="from-inp"
                    />
                    {this.state.isLower
                      ? "کمتر از 100 تومان نمیتواند باشد"
                      : ""}
                    <span className="unit">تومان</span>
                  </div>

                  <span>تا</span>
                  <div className="input-container">
                    <input
                      type={"text"}
                      value={this.state.inputValue2}
                      onChange={this.changeHandler}
                      name="inputValue2"
                      className="until-inp"
                    />
                    <span className="unit">تومان</span>
                  </div>
                </div>
                <div className="button-container">
                  <button className="btn-submit">اعمال محدوده قیمت</button>
                </div>
              </div>
            </div>
          </section>
          <section className="products-section">
            {/* <div className="Display-mode"></div> */}
            <div className="products">
              {data.length
                ? data.map((product) => {
                    return (
                      <div className="Card-container" key={product.id.toString()}>
                        <Card
                          src1={product.image}
                          src2={product.category.image}
                          // discount={product.rating.rate}
                          title={product.title}
                          nowPrice={product.price}
                          // InPages={true}
                          id={product.id}
                        />
                      </div>
                    );
                  })
                : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
                    return (
                      <div key={item.toString()}>
                        <div className="skeleton-section">
                          <Skeleton type={"image"} />
                          <Skeleton type={"text"} />
                          <Skeleton type={"title"} />
                        </div>
                      </div>
                    );
                  })}
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default SeeAll;
