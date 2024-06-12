import React from 'react';
// Import the CSS file for Dropdown

const Dropdown = ({ items, isOpen }) => {
  return (
    <div className={`dropdown ${isOpen ? 'show' : ''}`}>
      {items.map((item, index) => (
        <a key={index} href={item.link} className="dropdown-item">
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Dropdown;