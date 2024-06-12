import React, { useRef, useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import './Navbar.css'; // Import the CSS file

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
    const handleDropdownItemClick = (event) => {
        // Prevent default behavior to keep the dropdown open
        event.preventDefault();
        // Perform navigation or other actions
        console.log('Navigating to:', event.target.href);
    };
    const menuItems = {
        applyOnline: {
            icon: 'fa fa-laptop',
            items: [
                { label: 'Application Form', link: '#' },
                { label: 'Eligibility Criteria', link: '#' },
                { label: 'How to Apply', link: '#' },
                { label: 'Important Dates', link: '#' },
                { label: 'Application Status', link: '#' },
                { label: 'Associate Login', link: '#' }
            ]
        },
        admissions: {
            icon: 'fa fa-graduation-cap',
            items: [
                { label: 'Admission Procedure', link: '#' },
                { label: 'Required Documents', link: '#' },
                { label: 'Admission FAQs', link: '#' },
                { label: 'Contact Admission Office', link: '#' },
                { label: 'Admission Guidelines', link: '#' }
            ]
        },
        courses: {
            icon: 'fa fa-book',
            items: [
                { label: 'IIT JEE Courses', link: '#' },
                { label: 'CUCET Courses', link: '#' },
                { label: 'Diploma Courses', link: '#' },
                { label: 'Online Courses', link: '#' },
                { label: 'XII TH Courses', link: '#' },
                { label: 'X TH Courses', link: '#' }
            ]
        },
        studentZone: {
            icon: 'fa fa-user-graduate',
            items: [
                { label: 'Student Portal', link: '#' },
                { label: 'Library', link: '#' },
                { label: 'Hostel', link: '#' }
            ]
        },
        results: {
            icon: 'fa fa-file-alt',
            items: [
                { label: 'Examination Results', link: '#' },
                { label: 'Result FAQs', link: '#' },
                { label: 'Revaluation Process', link: '#' },
                { label: 'Result Notifications', link: '#' },
                { label: 'Download Marksheet', link: '#' }
            ]
        },
        aboutUs: {
            icon: 'fa fa-info-circle',
            items: [
                { label: 'Our Vision', link: '#' },
                { label: 'Our Mission', link: '#' },
                { label: 'Leadership Team', link: '#' },
                { label: 'History', link: '#' },
                { label: 'Contact Information', link: '#' }
            ]
        },
        contactUs: {
            icon: 'fa fa-phone',
            items: [
                { label: 'Contact Form', link: '#' },
                { label: 'Customer Support', link: '#' },
                { label: 'FAQs', link: '#' },
                { label: 'Office Locations', link: '#' },
                { label: 'Social Media', link: '#' }
            ]
        },
        centers: {
            icon: 'fa fa-map-marker',
            items: [
                { label: 'Patna', link: '#' },
                { label: 'Gaya', link: '#' },
                { label: 'MOKAMA', link: '#' }
            ]
        }
    };
    
    return (
        <>
            <nav className="navbar">
                <div className='navbar-link'>
                    <a href="tel:+91-744-2777777" className="contact-link">
                        <i className="fa fa-phone"></i><span className="icon-text">+91-744-2777777</span>
                    </a>
                    <a href="https://wa.me/7340010345" className="contact-link">
                        <i className="fab fa-whatsapp"></i><span className="icon-text"> 73400 10345</span>
                    </a>
                </div>
                <div className="additional-links">
                    <a href="#" className="navbar-link">
                        <i className="fa fa-laptop"></i><span className="icon-text"> Apply Online</span>
                    </a>
                    <a href="#" className="navbar-link">
                        <i className="fa fa-rupee-sign"></i><span className="icon-text"> Pay Fee Online</span>
                    </a>
                </div>
            </nav>

            <nav className='nav-bottom' ref={navBottomRef}>
                {Object.keys(menuItems).map((key) => (
                    <div 
                        key={key}
                        className="navbar-item"
                        onMouseEnter={(e) => handleMouseEnter(key, e)}
                        onMouseLeave={(e) => handleMouseLeave(key, e)}
                    >
                        <a href="#" className="navbar-c">
                            <i className={menuItems[key].icon}></i><span className="icon-text"> {key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                        </a>
                        <Dropdown items={menuItems[key].items} isOpen={openDropdown === key}onItemClick={handleDropdownItemClick} />
                    </div>
                ))}
                <div className="underline-slider" style={underlineStyle}></div>
            </nav>
        </>
    );
};

export default Navbar;