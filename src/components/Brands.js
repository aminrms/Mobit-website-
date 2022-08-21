import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./BrandsInfo/BrandStyle.css";
import BrandsData from "./BrandsInfo/BrandsInfo";
class Brands extends Component {
  render() {
    return (
      <>
        <section className="Brands-Section">
          <h3>برند ها ی موجود در مبیت</h3>
          <Swiper
            breakpoints={{
              280: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2.8,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1800:{
                slidesPerView:6,
              }
            }}
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper-brand-section"
          >
            {BrandsData.map((item, index) => {
              return (
                <SwiperSlide className="Brand-slide" key={index}>
                  <a href="#" className="img-box">
                    <img src={item.img} alt="5" className="img-container" />
                  </a>
                  <a href="#" className="title">
                    <span>{item.title}</span>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </>
    );
  }
}

export default Brands;
