import React, { Component } from "react";
import persianJs from "persianjs";
import "./FooterInfo/footerStyle.css";
import fastSend from "../images/fastSend.57a5d18.svg";
import productReturn from "../images/productReturn.dea9b58.svg";
import phoneSupport from "../images/phoneSupport.14858ff.svg";
import productGuaranty from "../images/productGuaranty.e7f72bd.svg";
import FooterData from "./FooterInfo/FooterData";
import aparat from "../images/aparat.68703cc.svg";
import instagram from "../images/hInstagram.152a855.svg";
import MobitApp from "../images/apple-touch-icon.png";
import BazarLink from "../images/bazar.4747cbd.svg";
import iApps from "../images/iApps.c9104cf.svg";
import DownloadDirect from "../images/download-direct.3a0c56a.svg";
import Etehadiyeh from "../images/etehadiye.png";
import digital from "../images/digital.png";
import parvanehKasb from "../images/parvanehKasb.png";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      paragraph: false,
    };
  }

  morePargHandler = () => {
    this.setState({
      paragraph: !this.state.paragraph,
    });
  };

  render() {
    return (
      <footer>
        <section className="support-and-moreInformation-of-web">
          <a className="moveToUp" href="#">
            <span> بازگشت به بالا</span>
            <i className="bi bi-hand-thumbs-up-fill"></i>
          </a>
          <div className="support-part">
            <h4>پشتیبانی</h4>
            <div className="phone-and-day">
              <span className="title">تلفنی:</span>
              <div className="phone">
                {/* {persianJs("034-91002425").englishNumber().toString()} */}
                034-91002425
              </div>
              <span>شنبه تا چهارشنبه ۸ الی ۲۱ - پنجشنبه ۸ الی ۲۰:۳۰</span>
            </div>
            <div className="email">
              <span className="title">ایمیل : </span>
              <span className="emailLink">info@mobit.ir</span>
            </div>
          </div>
          <div className="moreInformation-part">
            <a className="img-box" href="#">
              <img src={fastSend} alt="" />
              <span>ارسال سریع کالا</span>
            </a>
            <a className="img-box" href="#">
              <img src={productReturn} alt="" />
              <span>مهلت 7 روز بازگشت کالا</span>
            </a>
            <a className="img-box" href="#">
              <img src={phoneSupport} alt="" />
              <span>پشتیبانی تلفنی</span>
            </a>
            <a className="img-box" href="#">
              <img src={productGuaranty} alt="" />
              <span>تضمین اصالت کالا</span>
            </a>
          </div>
        </section>
        <section className="links-webSite-and-socialMedias">
          <ul className="footer-links">
            {FooterData.map((item, index) => {
              return (
                <li key={index}>
                  <h4>{item.title}</h4>
                  {item.links.map((i, ind) => {
                    return (
                      <div className="links" key={ind}>
                        <a href="#">{i.link}</a>
                      </div>
                    );
                  })}
                </li>
              );
            })}
          </ul>
          <div className="socialMedias-and-contactWithUs">
            <div className="socialMedias">
              <h4>با ما همراه باشید</h4>
              <div className="links">
                <a href="#">
                  <img src={instagram} alt="" />
                </a>
                <a href="#">
                  <img src={aparat} alt="" />
                </a>
              </div>
            </div>
            <div className="contactWithUs">
              <h4>از آخرین تخفیف ها با خبر شوید</h4>
              <div className="submit-email">
                <input type={"text"} placeholder="ایمیل خود را وارد کنید" />
                <div className="button-container">
                  <button>ثبت</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="linksDownload-MobitApp">
          <div className="performanceBox">
            <div className="img-box">
              <img src={MobitApp} alt="" />
            </div>
            <h2>کارایی بهتر در اپلیکیشن مبیت </h2>
          </div>
          <div className="download-links-more">
            <a href="#">
              <img src={BazarLink} alt="" />
            </a>
            <a href="#">
              <img src={iApps} alt="" />
            </a>
            <a href="#">
              <img src={DownloadDirect} alt="" />
            </a>
            <a href="#">
              <span>بیشتر</span>
              <i className="bi bi-arrow-down-short"></i>
            </a>
          </div>
        </section>
        <section className="License-and-moreInformation">
          <div className="moreInformation">
            <h3>
              فروشگاه اینترنتی مبیت، خرید آسان کالای دیجیتال با مناسب ترین قیمت
            </h3>
            <p
              className={
                this.state.paragraph ? "paragraph active" : "paragraph"
              }
            >
              مارکت پلیس مبیت، یکی از بزرگترین عرضه کنندگان کالای دیجیتال در
              سراسر کشور است که بروزترین و جدیدترین کالاها مانند گوشی های
              موبایل، لپ تاپ، تبلت و لوازم جانبی گوشی و کامپیوتر را از برترین
              برندهای جهانی با مناسب ترین قیمت و ضمانت اصالت کالا به کاربران
              عرضه می کند. این فروشگاه بزرگ اینترنتی همواره در تلاش است تا در
              راستای کسب رضایت مشتریان کالاهای خود را به بهترین شکل ممکن با
              ارزان ترین قیمت به کاربران عرضه کند. شما می توانید تنها با چند
              کلیک ساده کالای مورد نیاز خود را از مبیت خریداری کنید ؛ تیم مجرب
              پشتیبانی این فروشگاه بزرگ نیز در تمامی مراحل خرید، حتی پس از تحویل
              کالا نیز شما را همراهی خواهد کرد. ضمانت اصالت تمامی کالاهای موجود
              در مبیت مهر تاییدی بر کیفیت آن ها می باشد. سیستم چند فروشگاهی مبیت
              علاوه بر ایجاد محیطی مناسب برای خرید کالا، به فروشندگان نیز این
              امکان را می دهد تا در هر نقطه از ایران کالای خود را در این فروشگاه
              اینترنتی به فروش برسانند. فروشندگان علاقه‌مند به گسترش و توسعه کسب
              و کار خود می توانند تنها با طی چند مرحله ساده در فروشگاه اینترنتی
              مبیت کالای دیجیتال خود را به هزاران کاربر نمایش داده و به فروش
              برسانند.
            </p>
            <div className="button-container">
              <button onClick={this.morePargHandler} className="more-pBtn">
                {this.state.paragraph ? "مشاهده کمتر" : "مشاهده بیشتر"}
                {this.state.paragraph ? (
                  <i class="bi bi-arrow-up-short"></i>
                ) : (
                  <i class="bi bi-arrow-down-short"></i>
                )}
              </button>
            </div>
          </div>
          <div className="License">
            <div className="img-box">
              <a href="#">
                <img src={parvanehKasb} alt="" />
              </a>
            </div>
            <div className="img-box">
              <a href="#">
                <img src={digital} alt="" />
              </a>
            </div>{" "}
            <div className="img-box">
              <a href="#">
                <img src={Etehadiyeh} alt="" />
              </a>
            </div>
          </div>
        </section>
        <section className="end-partOfFooter">
          <p>
            کلیه حقوق این سایت متعلق به شرکت{" "}
            <a href="#">آواپرداز کیهان کریمان</a> می باشد./
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;
