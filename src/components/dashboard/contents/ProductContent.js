import React from "react";
import { Route, Switch } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";
import ProductList from "./components/products/ProductList";

function ProductContent({ match }) {
  return (
    <Switch>
      <Route path={match.url + "/edit"} component={EditProduct} />
      <Route path={match.url + "/add"} component={AddProduct} />
      <Route path={match.url + "/"} component={ProductList} />
    </Switch>
  );
}

export default ProductContent;
