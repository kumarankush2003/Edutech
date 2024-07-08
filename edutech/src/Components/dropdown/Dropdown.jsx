import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ items, isOpen, onItemClick, onMouseEnter, onMouseLeave }) => {
    return (
        <div 
            className={`dropdown ${isOpen ? 'show' : ''}`} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.map((item, index) => (
                <Link 
                    key={index} 
                    to={item.link} 
                    className="dropdown-item" 
                    onClick={onItemClick}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

export default Dropdown;
