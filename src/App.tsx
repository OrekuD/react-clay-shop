import React from "react";
import "./App.scss";
import {
  Header,
  Banner,
  Collections,
  Products,
  DressProduct,
  ElegantDress,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <ElegantDress />
      <Banner />
      <Collections />
      <Products />
      <DressProduct />
    </>
  );
}

export default App;
