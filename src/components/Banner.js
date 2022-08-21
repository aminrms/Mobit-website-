import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import BannerImages from "./BannerInfo/BannerImages";
import BannerCategoryImages from "./BannerInfo/BannerCategoryImages";
import "./BannerInfo/BannerStyle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/scrollbar";
import styles from "./BannerInfo/BannerSliderStyle.module.css";
import TypeOfLaptopImage from "../images/typeOfLaptop.jpg";
import ConsoleGame from "../images/ConsoleGame.jpg";
import { Link } from "react-router-dom";
class Banner extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
    };
  }
  render() {
    return (
      <>
        <section className="banner-section">
          <Link className="right-image" to={"/phone"}>
            <img src={TypeOfLaptopImage} alt="" />
          </Link>

          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            keyboard={true}
            modules={[Autoplay, Navigation, Pagination, Keyboard]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            className="banner-swiper"
          >
            {BannerImages.map((item) => {
              return (
                <div key={item.id}>
                  <SwiperSlide className="banner-slide">
                    <Link to={item.path}>
                      <img loading="lazy" src={item.image} alt="" />
                    </Link>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>

          <Link className="left-image" to="/newProducts">
            <img src={ConsoleGame} alt="" />
          </Link>
        </section>
        <section className="category-lists">
          {BannerCategoryImages.map((item, index) => {
            return (
              <div key={item.id}>
                <a className="category-list" href="#">
                  <img src={item.image} alt="" />
                  <span>{item.title}</span>
                </a>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}

export default Banner;
