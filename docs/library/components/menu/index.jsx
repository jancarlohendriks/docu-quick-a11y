import "./styles.scss";
import React, { useState } from "react";
import MenuItem from "./MenuItem";

const items = [
  {
    title: "Coffee",
    subItems: ["Coffee sub 1", "Coffee sub 2"],
  },
  {
    title: "Tea",
    subItems: ["Tea sub 1", "Tea sub 2"],
  },
  {
    title: "Milk",
  },
];

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="docu-menu">
      <header className={menuOpen ? "docu-menu-open" : ""}>
        <nav>
          <span>Logo</span>
          <div
            onKeyPress={() => toggleMenu()}
            onClick={() => toggleMenu()}
            tabIndex="0"
            role="button"
          >
            Menu
          </div>
        </nav>
        <div
          className="docu-menu-container"
          style={{ "--container-items": items.length }}
          aria-expanded={menuOpen}
        >
          <ul>
            {items &&
              items.map((item, i) =>
                item.subItems ? (
                  <MenuItem
                    key={i}
                    id={i}
                    active={selectedItem === i}
                    title={item.title}
                    onClick={() =>
                      selectedItem === i
                        ? setselectedItem(null)
                        : setselectedItem(i)
                    }
                  >
                    <ul>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} tabIndex={0}>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </MenuItem>
                ) : (
                  <li key={i} tabIndex={0}>
                    {item.title}
                  </li>
                )
              )}
          </ul>
        </div>
      </header>
    </div>
  );
}
