import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "./slider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./Card";
class SliderComponent extends Component {
  render() {
    const breakpointsData = {
      // Responsive breakpoints
      // when window width is >= 320px
      320: {
        slidesPerView: 1.55,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 1.68,
      },
      // when window width is >= 480px
      410: {
        slidesPerView: 2.15,
      },
      450: {
        slidesPerView: 2.6,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.9,
        spaceBetween: 20,
      },
      800: {
        // spaceBetween: 20,
        slidesPerView: 3,
      },
      // 800: {
      //   spaceBetween: 20,
      //   slidesPerView: 4,
      // },
      900: {
        slidesPerView: 3.15,
      },
      1000: {
        slidesPerView: 3.5,
      },
      1200: {
        slidesPerView: 4.15,
      },
      1800: {
        spaceBetween: 20,
        slidesPerView: 6,
      },
    };
    return (
      <>
        <section className="Slider-section">
          <div className="header-section">
            <h1>{this.props.title}</h1>
            <Link className="see-more-link" to={this.props.link}>
              {this.props.seePart}
              <i className="bi bi-arrow-left-short"></i>
            </Link>
          </div>
          <Swiper
            breakpoints={breakpointsData}
            slidesPerView={4}
            spaceBetween={10}
            navigation={{
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
            }}
            className="mySwiper mySwiperSlider"
          >
            {this.props.data.map((item, index) => {
              return (
                <SwiperSlide className="Slide" key={index}>
                  <Card
                    src1={item.img}
                    discount={item.reduce}
                    title={item.title}
                    delPrice={item.delPrice}
                    nowPrice={item.nowPrice}
                    id={item.id}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </>
    );
  }
}

export default SliderComponent;
