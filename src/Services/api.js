import axios from "axios";

const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};
const getProducts2 = async () =>{
  const response = await axios.get("https://api.escuelajs.co/api/v1/products")
  return response.data
}

export { getProducts , getProducts2};
