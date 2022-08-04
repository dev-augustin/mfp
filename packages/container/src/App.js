import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <SstylesProvider generateClassName={generateClassName}>
        <div>
          <h1>Hi there!!!!!!!!!!!!!!!</h1>
          <hr />
          <Header />
          <MarketingApp />
        </div>
      </SstylesProvider>
    </BrowserRouter>
  );
};
