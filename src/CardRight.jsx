import React from "react";

export default function CardRight({ title, text, id, color = "text-light" }) {
  return (
    <div className="d-flex justify-content-end">
      <div
        class={`shadow ms-3 ps-3 mb-5 pb-3 border-secondary ${color}  `}
        style={{ width: " 60%" }}
      >
        <h4 className="text-center text-capitalise pt-3" id={id}>
          {title}
        </h4>
        <div class="card-body">
          <p class="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
