import React from "react";

export default function Card({ title, text }) {
  return (
    <div class="shadow ms-3 ps-3 mb-5" style={{ width: " 50%" }}>
      {title}
      <div class="card-body">
        <p class="card-text">{text}</p>
      </div>
    </div>
  );
}
