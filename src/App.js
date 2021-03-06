import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import SellCreatePage from "./pages/SellCreatePage";
import LoginPage from "./pages/LoginPage";
import ComparePage from "./pages/ComparePage";
import FarmerDashboardPage from "./pages/FarmerDashboardPage";
import SearchPage from "./pages/SearchPage";
import ViewProductDetails from "./components/home/component/ViewProductDetails";

function App() {
  return (
    <Switch>
      <Route path="/view-product" component={ViewProductDetails} />
      <Route path="/search" component={SearchPage} />
      <Route path="/farmer-dashboard" component={FarmerDashboardPage} />
      <Route path="/compare" component={ComparePage} />
      <Route path="/create-seller" component={SellCreatePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
