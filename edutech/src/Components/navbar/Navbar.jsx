import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import './Navbar.css';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const navBottomRef = useRef(null);
    const hideTimeoutRef = useRef(null); 

    const handleMouseEnter = (menu, event) => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
        }
        setOpenDropdown(menu);
        const target = event.currentTarget;
        setUnderlineStyle({
            left: target.offsetLeft,
            width: target.offsetWidth
        });
    };

    const handleMouseLeave = () => {
        hideTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
            setUnderlineStyle({ left: 0, width: 0 });
        }, 500); // Adjust the delay as needed
    };

    const handleDropdownMouseEnter = () => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
        }
    };

    const handleDropdownMouseLeave = () => {
        // if (navBottomRef.current && navBottomRef.current.contains(document.activeElement)) {
        //     return;
        // }
        setOpenDropdown(null);
        setUnderlineStyle({ left: 0, width: 0 });
    };

    const handleDropdownItemClick = (event) => {
        console.log('Navigating to:', event.target.href);
    };

    const menuItems = {
        apply_Online: {
            icon: 'fa fa-laptop',
            items: [
                { label: 'Application Form', link: '#' },
                { label: 'Login', link: '/login' },
                { label: 'Eligibility Criteria', link: '#' },
                { label: 'How to Apply', link: '#' },
                { label: 'Important Dates', link: '#' },
                { label: 'Application Status', link: '#' },
                { label: 'Associate Login', link: '/associatelogin' }
            ]
        },
        // Other menu items...
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
        student_Zone: {
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
        about_Us: {
            icon: 'fa fa-info-circle',
            items: [
                { label: 'Our Vision', link: '#' },
                { label: 'Our Mission', link: '#' },
                { label: 'Leadership Team', link: '#' },
                { label: 'History', link: '#' },
                { label: 'Contact Information', link: '#' }
            ]
        },
        contact_Us: {
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
                    <Link to="/login" className="navbar-link">
                        <i className="fa fa-laptop"></i><span className="icon-text"> Apply Online</span>
                    </Link>
                    <Link to="#" className="navbar-link">
                        <i className="fa fa-rupee-sign"></i><span className="icon-text"> Pay Fee Online</span>
                    </Link>
                </div>
            </nav>

            <nav className='nav-bottom' ref={navBottomRef} style={{ zIndex: 100 }}>
                {Object.keys(menuItems).map((key) => (
                    <div 
                        key={key}
                        className="navbar-item"
                        onMouseEnter={(e) => handleMouseEnter(key, e)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="#" className="navbar-c">
                            <i className={menuItems[key].icon}></i><span className="icon-text"> {key.toUpperCase().replace(/_/g, ' ')}</span>
                        </Link>
                        <Dropdown 
                            items={menuItems[key].items} 
                            isOpen={openDropdown === key}
                            onItemClick={handleDropdownItemClick}
                            onMouseEnter={handleDropdownMouseEnter}
                            onMouseLeave={handleDropdownMouseLeave}
                        />
                    </div>
                ))}
                <div className="underline-slider" style={underlineStyle}></div>
            </nav>
        </>
    );
};

export default Navbar;
