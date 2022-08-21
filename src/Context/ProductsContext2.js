import React, { useState, useEffect, createContext } from "react";

// API
import {  getProducts2 } from "../Services/api";

export const NewProductsContext = createContext();
const ProductsContext2 = (props) => {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setNewProducts(await getProducts2());
    };
    fetchAPI();
  }, []);

  return (
    <>
      <NewProductsContext.Provider value={newProducts}>
        {props.children}
      </NewProductsContext.Provider>
    </>
  );
};
export default ProductsContext2;
