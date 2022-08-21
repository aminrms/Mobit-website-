import React, { useContext, useState } from "react";
import SeeAll from "./SeeAll";
import { ProductsContext } from "../Context/ProductsContextProvider";
const MostSell = () => {

  const products = useContext(ProductsContext);

  return (
    <>
      <SeeAll data={products} />
    </>
  );
};

export default MostSell;
