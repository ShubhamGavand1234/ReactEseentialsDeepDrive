import React from "react";
import reactImg from "../assets/react-core-concepts.png";

function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  function getRandom() {
    return Math.floor(Math.random() * (reactDescriptions.length + 1));
  }

  return (
    <>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[getRandom()]} React concepts you will need for
          almost any app you are going to build!
        </p>
      </header>
    </>
  );
}

export default Header;
