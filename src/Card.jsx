import React from "react";

export default function Card({ title, text, id, color = "text-light" }) {
  return (
    <div
      class={`shadow ms-3 ps-3 mb-5 pb-3 border-secondary ${color}`}
      style={{ width: " 50%" }}
      data-aos="slide-right"
    >
      <h4 className="text-center text-capitalise pt-3" id={id}>
        {title}
      </h4>
      <div class="card-body">
        <p class="card-text">{text}</p>
      </div>
    </div>
  );
}
