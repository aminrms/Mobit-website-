import React, { Component } from "react";
import "./SkeletonInfo/SkeletonStyle.css";
class Skeleton extends Component {
  render() {
    const className = `skeleton ${this.props.type}`;
    return (
      <>
        <div className={className}></div>
      </>
    );
  }
}

export default Skeleton;
