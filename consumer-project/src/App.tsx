import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Products } from "base_project/Products";
import { Cart } from "base_project/Cart";
import { TopSellers } from "base_project/TopSellers";
import { Header } from "base_project/Header";
import { globalStore } from "base_project/redux-store";

import "./index.css";

const App = () => (
  <Provider store={globalStore}>
    <div id="application-container">
      <div className="grid-block header-container">
        <Header />
      </div>
      <div className="grid-block products-container">
        <Products />
      </div>
      <div className="grid-block cart-container">
        <Cart />
      </div>
      <div className="grid-block top-sellers-container">
        <TopSellers />
      </div>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
