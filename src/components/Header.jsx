import React from "react";
import logoImg from "./../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logoImg} alt="logo showing money bag" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
