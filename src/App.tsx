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
} from "./components";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="section">
          <ElegantDress />
          <WhiteDress />
        </div>
      </div>
      <Banner />
      <Collections />
      <Products />
      <DressProduct />
    </>
  );
}

export default App;
