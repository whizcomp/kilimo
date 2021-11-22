import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import logo from "./tomato.png";
import down from "./down-arrow.svg";
export default function Welcome() {
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-row">
        <div className="d-flex justify-content-center ms-3 ps-5 flex-column">
          <h1 className="Header">The future of Tomato</h1>
          <div className=" d-flex justify-content-start ps-5">
            <img src={logo} height="300" width="300" />{" "}
          </div>
        </div>
        <div className="navigation  m-5 p-5 d-flex justify-content-center">
          <div className="p-3 ps-5">
            <div class="shadow p-4 mb-5 bg-body rounded">Introduction</div>
            <div class="shadow p-3 mb-5 bg-body rounded">Storyline</div>
            <div class="shadow p-3 mb-5 bg-body rounded">Future prediction</div>
            <div class="shadow p-3 mb-5 bg-body rounded">Solution</div>
          </div>
        </div>
        <div class="position-absolute top-100 start-50 translate-middle">
          <img src={down} width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
