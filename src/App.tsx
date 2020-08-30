import React from "react";
import "./App.scss";
import {
  Header,
  Banner,
  Collections,
  Products,
  DressProductCard,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Collections />
      <Products />
      <DressProductCard />
    </>
  );
}

export default App;
