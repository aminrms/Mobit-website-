import React, { Component } from "react";
import "../ImageComponent/images.css";
class Images extends Component {
  render() {
    // const {}
    return (
      <>
        <div className={`img-container ${this.props.className}`}>
          <a href="#">
            <img loading="lazy" src={this.props.src} alt={this.props.alt} />
            {this.props.techNews ? <div className="coverOfImg"></div> : null}
            {this.props.techNews ? <div className="TitleCoverOf-img">{this.props.title}</div> : null}
          </a>
        </div>
      </>
    );
  }
}

export default Images;
