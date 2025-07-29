import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky' as const,
        top: 0,
        zIndex: 1000
    };

    const brandStyle = {
        fontWeight: 'bold',
        fontSize: '1.3rem',
        textDecoration: 'none',
        color: '#fff'
    };

    const navLinksStyle = {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
    };

    const linkStyle = (isActive: boolean) => ({
        color: '#fff',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'transparent',
        fontWeight: isActive ? 'bold' : 'normal'
    });

    return (
        <nav style={navStyle}>
            <Link to="/" style={brandStyle}>
                Low Chee Kiang
            </Link>
            <div style={navLinksStyle}>
                <Link to="/" style={linkStyle(location.pathname === '/')}>
                    About
                </Link>
                <Link to="/achievements" style={linkStyle(location.pathname === '/achievements')}>
                    Achievements & Awards
                </Link>
                <Link to="/coaching" style={linkStyle(location.pathname === '/coaching')}>
                    Coaching Experience
                </Link>
                <Link to="/gallery" style={linkStyle(location.pathname === '/gallery')}>
                    Gallery
                </Link>
            </div>
        </nav>
    );
};

export default Navbar; 