import React, { useState, useRef } from 'react';
import './Navbar.css'; // Import the CSS file
import Dropdown from '../dropdown/Dropdown';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const navBottomRef = useRef(null);

    const handleMouseEnter = (menu, event) => {
        setOpenDropdown(menu);
        const target = event.currentTarget;
        setUnderlineStyle({
            left: target.offsetLeft,
            width: target.offsetWidth
        });
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
        setUnderlineStyle({ left: 0, width: 0 });
    };

    const menuItems = {
        applyOnline: [
            { label: 'Application Form', link: '#' },
            { label: 'Eligibility Criteria', link: '#' },
            { label: 'How to Apply', link: '#' },
            { label: 'Important Dates', link: '#' },
            { label: 'Application Status', link: '#' },
            { label: 'Associate Login', link: '#' }
        ],
        admissions: [
            { label: 'Admission Procedure', link: '#' },
            { label: 'Required Documents', link: '#' },
            { label: 'Admission FAQs', link: '#' },
            { label: 'Contact Admission Office', link: '#' },
            { label: 'Admission Guidelines', link: '#' }
        ],
        courses: [
            { label: 'IIT JEE Courses', link: '#' },
            { label: 'CUCET Courses', link: '#' },
            { label: 'Diploma Courses', link: '#' },
            { label: 'Online Courses', link: '#' },
            { label: 'XII TH Courses', link: '#' },
            { label: 'X TH Courses', link: '#' }
        ],
        studentZone: [
            { label: 'Student Portal', link: '#' },
            { label: 'Library', link: '#' },
            { label: 'Hostel', link: '#' },
        ],
        results: [
            { label: 'Examination Results', link: '#' },
            { label: 'Result FAQs', link: '#' },
            { label: 'Revaluation Process', link: '#' },
            { label: 'Result Notifications', link: '#' },
            { label: 'Download Marksheet', link: '#' }
        ],
        aboutUs: [
            { label: 'Our Vision', link: '#' },
            { label: 'Our Mission', link: '#' },
            { label: 'Leadership Team', link: '#' },
            { label: 'History', link: '#' },
            { label: 'Contact Information', link: '#' }
        ],
        contactUs: [
            { label: 'Contact Form', link: '#' },
            { label: 'Customer Support', link: '#' },
            { label: 'FAQs', link: '#' },
            { label: 'Office Locations', link: '#' },
            { label: 'Social Media', link: '#' }
        ],
        centers: [
            { label: 'Patna', link: '#' },
            { label: 'Gaya', link: '#' },
            { label: 'MOKAMA', link: '#' }
        ]
    };

    return (
        <>
            <nav className="navbar">
                <div className='navbar-link'>
                    <a href="tel:+91-744-2777777" className="contact-link">
                        +91-744-2777777
                    </a>
                    <a href="https://wa.me/7340010345" className="contact-link">
                        73400 10345
                    </a>
                </div>
                <div className="additional-links">
                    <a href="#" className="navbar-link">
                        <i className="fa fa-laptop"></i> Apply Online
                    </a>
                    <a href="#" className="navbar-link">
                        <i className="fa fa-rupee-sign"></i> Pay Fee Online
                    </a>
                </div>
            </nav>

            <nav className='nav-bottom' ref={navBottomRef}>
                {Object.keys(menuItems).map((key) => (
                    <div 
                        key={key}
                        className="navbar-item"
                        onMouseEnter={(e) => handleMouseEnter(key, e)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="#" className="navbar-c">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</a>
                        <Dropdown items={menuItems[key]} isOpen={openDropdown === key} />
                    </div>
                ))}
                <div className="underline-slider" style={underlineStyle}></div>
            </nav>
        </>
    );
};

export default Navbar;
