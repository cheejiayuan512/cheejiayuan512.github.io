import React from 'react';

const Footer: React.FC = () => (
    <footer style={{
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: '#fff',
        marginTop: '2rem'
    }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>
                © Copyright 2025 Low Chee Kiang.
            </p>
            <p style={{ margin: '1rem 0 0 0', fontSize: '0.9rem', opacity: 0.7 }}>
                Feel free to send me an email.
            </p>
        </div>
    </footer>
);

export default Footer; 