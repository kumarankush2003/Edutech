import React from 'react';

const Dropdown = ({ items, isOpen, onItemClick, onMouseEnter, onMouseLeave }) => {
    return (
        <div 
            className={`dropdown ${isOpen ? 'show' : ''}`} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.map((item, index) => (
                <a 
                    key={index} 
                    href={item.link} 
                    className="dropdown-item" 
                    onClick={onItemClick}
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default Dropdown;
