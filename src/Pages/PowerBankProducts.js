import axios from 'axios';
import React, { Component, useContext } from 'react';
import SeeAll from './SeeAll';

import { ProductsContext } from "../Context/ProductsContextProvider";
const PowerBankProducts = () => {
  const products = useContext(ProductsContext);

  return (
    <>
      <SeeAll data={products} />
    </>
  );
};

export default PowerBankProducts;