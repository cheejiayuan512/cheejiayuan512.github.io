import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '2rem 1rem',
            marginTop: '3rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>
                    <div>
                        <h3 style={{
                            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                            marginBottom: '1rem',
                            color: '#ffd700'
                        }}>
                            Low Chee Kiang
                        </h3>
                        <p style={{
                            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                            lineHeight: '1.6',
                            color: '#ccc'
                        }}>
                            Singapore's Premier Judo Practitioner & Coach
                        </p>
                    </div>

                    <div>
                        <h3 style={{
                            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                            marginBottom: '1rem',
                            color: '#ffd700'
                        }}>
                            Legacy
                        </h3>
                        <p style={{
                            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                            lineHeight: '1.6',
                            color: '#ccc'
                        }}>
                            7th Dan Black Belt<br />
                            SJF Judoka of the Year Award<br />
                            Former Singapore National Team Head Coach
                        </p>
                    </div>

                    <div>
                        <h3 style={{
                            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                            marginBottom: '1rem',
                            color: '#ffd700'
                        }}>
                            Contact
                        </h3>
                        <p style={{
                            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                            lineHeight: '1.6',
                            color: '#ccc'
                        }}>
                            Singapore Judo Federation<br />
                            Retired Coach<br />
                            Legacy continues through generations
                        </p>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #555',
                    paddingTop: '1.5rem',
                    fontSize: 'clamp(0.85rem, 2.2vw, 0.9rem)',
                    color: '#999'
                }}>
                    <p style={{ margin: '0 0 0.5rem 0' }}>
                        © 2025 Low Chee Kiang. All rights reserved.
                    </p>
                    <p style={{ margin: '0' }}>
                        Dedicated to the spirit of judo and the development of Singapore's judo community.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 