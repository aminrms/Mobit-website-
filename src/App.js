import React, { useEffect, useLocation } from "react";
import Header from "./components/Header";
import "./AllStyle.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Landing from "./Pages/Landing";
import Promotion from "./Pages/Promotion";
import MostView from "./Pages/MostView";
import MostSell from "./Pages/MostSell";
import Product from "./Pages/Product";
import PowerBankProducts from "./Pages/PowerBankProducts";
import NewProductsPage from "./Pages/NewProductsPage";
import Footer from "./components/Footer";
import PhonePage from "./Pages/PhonePage";
import ProductsContextProvider from "./Context/ProductsContextProvider";
import ProductsContext2 from "./Context/ProductsContext2";
import { createTheme, ThemeProvider } from "@mui/material";
import CartContextProvider from "./Context/CartContextProvider";
import ShoppingCart from "./Pages/ShoppingCart";
const theme = createTheme({
  typography: {
    fontFamily: "YekanBakhHeavy",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductsContext2>
        <ProductsContextProvider>
          <CartContextProvider>
            <Header InProductPage={""} />
            <Switch>
              <Route path={"/cart"} component={ShoppingCart} />
              <Route path={"/phone"} component={PhonePage} />
              <Route path="/newProducts" component={NewProductsPage} />
              <Route path="/powerBank" component={PowerBankProducts} />
              <Route path="/product/:id" component={Product} />
              <Route path="/mostSell" component={MostSell} />
              <Route path="/mostView" component={MostView} />
              <Route path="/promotion" component={Promotion} />
              <Route exact path="/" component={Landing} />
            </Switch>
            <Footer />
          </CartContextProvider>
        </ProductsContextProvider>
      </ProductsContext2>
    </ThemeProvider>
  );
};

export default App;
