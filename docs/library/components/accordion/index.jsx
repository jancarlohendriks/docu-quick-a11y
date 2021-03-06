import React, { useState } from "react";

export default function Accordion({ id, title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <h3>
        <button
          id={`${id}-header`}
          aria-controls={`${id}-panel`}
          aria-expanded={isExpanded}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          onKeyPress={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {title}
        </button>
      </h3>
      <section
        id={`${id}-panel`}
        aria-labelledby={`${id}-header`}
        hidden={!isExpanded}
      >
        {children}
      </section>
    </>
  );
}
