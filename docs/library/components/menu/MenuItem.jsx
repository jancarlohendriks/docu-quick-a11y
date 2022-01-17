import React from "react";

export default function MenuItem({ id, active, title, children, onClick }) {
  return (
    <li className="menu-item">
      <h3>
        <span
          tabIndex="0"
          id={`${id}-header`}
          aria-controls={`${id}-panel`}
          aria-expanded={active}
          onKeyPress={() => {
            onClick();
          }}
          onClick={() => {
            onClick();
          }}
        >
          {title}
        </span>
      </h3>
      <ul
        id={`${id}-panel`}
        aria-labelledby={`${id}-header`}
        hidden={!active}
        className="menu-item"
      >
        {children}
      </ul>
    </li>
  );
}
