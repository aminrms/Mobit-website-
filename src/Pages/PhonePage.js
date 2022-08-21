import axios from 'axios';
import React, { Component, useContext } from 'react';
import SeeAll from './SeeAll';

import { ProductsContext } from "../Context/ProductsContextProvider";
const PhonePage = () => {
  const products = useContext(ProductsContext);

  return (
    <>
      <SeeAll data={products} />
    </>
  );
};

export default PhonePage;