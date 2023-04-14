import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import ProductComponent from "./components/ProductComponent";
import ProductsListing from "./components/ProductsListing";
import React from "react";
import ProdectDetails from "./components/ProdectDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductsListing />} />
          <Route path="/product/:productId" exact element={<ProdectDetails/>} />
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
