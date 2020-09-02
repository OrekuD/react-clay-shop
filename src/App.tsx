import React from "react";
import "./App.scss";
import {
  Header,
  Banner,
  Collections,
  Products,
  DressProduct,
  ElegantDress,
  WhiteDress,
  ProductCard,
  ShinyDress,
  RedDress,
  Footer,
} from "./components";
import { products } from "./data/products";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="wrapper">
        <div className="section">
          <ElegantDress />
          <ProductCard product={products[3]} />
          <WhiteDress />
        </div>
      </div>
      <Collections />
      <Products />
      {/* <DressProduct /> */}
      <div className="wrapper">
        <div className="section">
          <ShinyDress />
          <RedDress />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
