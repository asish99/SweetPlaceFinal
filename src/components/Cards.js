import React from "react";
import Cardsdata from "./CardsData";
import "./style.css";
import CardComponent from "./CardComponent";

export default function Cards() {
  return (
    <div className="container mt-3">
      <br />
      <br />
      <h2 className="text-center text-danger">SWEET PLACE</h2>

      <div className="row d-flex justify-content-center align-items-center">
        <CardComponent arraydata={Cardsdata} isForm="home" />
      </div>
    </div>
  );
}
