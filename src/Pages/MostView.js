import axios from "axios";
import React, { Component, useContext } from "react";
import { NewProductsContext } from "../Context/ProductsContext2";
import SeeAll from "./SeeAll";

import "./StylesPages/MostView.css";
const MostView = () => {
  const products = useContext(NewProductsContext);

  return (
    <>
      <SeeAll data={products} />
    </>
  );
}

export default MostView;
