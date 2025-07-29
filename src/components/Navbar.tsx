import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/achievements', label: 'Achievements' },
        { path: '/coaching', label: 'Coaching' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav style={{
            backgroundColor: '#333',
            padding: '0 1rem',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: '60px'
            }}>
                {/* Logo/Brand */}
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                        fontWeight: 'bold'
                    }}
                >
                    Low Chee Kiang
                </Link>

                {/* Desktop Navigation */}
                <div style={{
                    display: 'none'
                }}
                    className="desktop-nav"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            style={{
                                color: location.pathname === item.path ? '#ffd700' : 'white',
                                textDecoration: 'none',
                                padding: '1rem',
                                fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
                                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                                transition: 'color 0.3s ease',
                                display: 'block'
                            }}
                            onMouseEnter={(e) => {
                                if (location.pathname !== item.path) {
                                    e.currentTarget.style.color = '#ffd700';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (location.pathname !== item.path) {
                                    e.currentTarget.style.color = 'white';
                                }
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem'
                    }}
                    className="mobile-menu-btn"
                    aria-label="Toggle navigation menu"
                >
                    <div style={{
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'white',
                        margin: '3px 0',
                        transition: '0.3s',
                        transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'
                    }} />
                    <div style={{
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'white',
                        margin: '3px 0',
                        transition: '0.3s',
                        opacity: isMenuOpen ? '0' : '1'
                    }} />
                    <div style={{
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'white',
                        margin: '3px 0',
                        transition: '0.3s',
                        transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'
                    }} />
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div style={{
                display: isMenuOpen ? 'block' : 'none',
                backgroundColor: '#333',
                borderTop: '1px solid #555'
            }}
                className="mobile-nav"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            color: location.pathname === item.path ? '#ffd700' : 'white',
                            textDecoration: 'none',
                            padding: '1rem',
                            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                            fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                            display: 'block',
                            borderBottom: '1px solid #555',
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#444';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .desktop-nav {
                        display: flex !important;
                    }
                    .mobile-menu-btn {
                        display: none !important;
                    }
                    .mobile-nav {
                        display: none !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar; 