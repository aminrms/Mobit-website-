import React, { Component } from "react";
import styled from "styled-components";
import "./CardInfo/Card.css";
import persianJs from "persianjs";
import { Link } from "react-router-dom";
const CardBox = styled.div`
  /* width: ${(props) => (props.AnyWhere ? "100%" : "auto")}; */
  margin: ${(props) => (props.AnyWhere ? "5px 0px" : "auto")};
  &:hover {
    transform: ${(props) => (props.AnyWhere ? "translateY(-5px)" : "")};
  }
  @media (max-width: 768px) {
    .detail .card-title h6 a {
      font-size: ${(props) => (props.AnyWhere ? "0.85rem" : "0.65rem")};
    }
    .price-discount del {
      font-size: ${(props) => (props.AnyWhere ? "12.5px" : "11.5px")};
    }
    .price-discount .price {
      font-size: ${(props) => (props.AnyWhere ? "12.5px" : "13px")};
    }
    .addTo-Chart-like i {
      font-size: ${(props) => (props.AnyWhere ? "12.5px" : "13.5px")};
    }
    .card-media .discount {
      font-size: ${(props) => (props.AnyWhere ? "12.5px" : "10px")};
      width: ${(props) => (props.AnyWhere ? "40px" : "35px")};
      /* height: ${(props) => (props.AnyWhere ? "20px" : "18px")}; */
    }
  }
`;
class Card extends Component {
  render() {
    return (
      <CardBox AnyWhere={this.props.InPages} className="Card">
        <Link className="card-media" to={`/product/${this.props.id}`}>
          {this.props.src1 ? (
            <img src={this.props.src1} alt="" />
          ) : (
            <img src={this.props.src2} alt="" />
          )}
          {this.props.InPages ? (
            ""
          ) : (
            <span className="discount">{this.props.discount}%</span>
          )}
        </Link>
        <div className="detail">
          <div className="card-title">
            <h6>
              <Link to={`/product/${this.props.id}`}>
                {/* گوشی موبایل شیائومی مدل POCO M3 دو سیم‌ کارت ظرفیت 64 گیگابایت و
                رم 4 گیگابایت */}
                {this.props.title}
              </Link>{" "}
            </h6>
          </div>

          <div className="price-discount-addToChart-like">
            <div className="addTo-Chart-like">
              <span className="addTo-chart">
                <i className="bi bi-bag-plus"></i>
              </span>
            </div>

            <span className="price-discount">
              {this.props.InPages ? (
                <span className="discount">{this.props.discount}%</span>
              ) : (
                ""
              )}
              <del>
                {this.props.InPages
                  ? ""
                  : persianJs(`${this.props.delPrice}`)
                      .englishNumber()
                      .toString()}
              </del>
              <span className="price">
                {persianJs(`${this.props.nowPrice}`).englishNumber().toString()}
                تومان
              </span>
            </span>
          </div>
        </div>
      </CardBox>
    );
  }
}

export default Card;
