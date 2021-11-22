import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import logo from "./tomato.png";
import maize from "./maize.png";
import Content from "./Content";
export default function Welcome() {
  const [tomato, setTomato] = React.useState(false);
  return (
    <div>
      <Navbar
        tomato={tomato}
        setTomato={() => setTomato(true)}
        setMaize={() => setTomato(false)}
      />
      <div className="d-flex flex-row">
        <div className="d-flex justify-content-center ms-3 ps-5 flex-column">
          <h1 className="Header">
            The future of {tomato ? "tomato" : "Maize"}
          </h1>
          <div className=" d-flex justify-content-start ps-5">
            {tomato ? (
              <img src={logo} height="300" width="300" />
            ) : (
              <img src={maize} height="300" width="300" />
            )}
          </div>
        </div>
        <div className="navigation  m-5 p-5 d-flex justify-content-center">
          <div className="p-3 ps-5">
            <div class="shadow p-4 mb-5 bg-body rounded">
              {" "}
              <a href="#intro">Introduction</a>{" "}
            </div>
            <div class="shadow p-3 mb-5 bg-body rounded">Storyline</div>
            <div class="shadow p-3 mb-5 bg-body rounded">Future prediction</div>
            <div class="shadow p-3 mb-5 bg-body rounded">Solution</div>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
}
