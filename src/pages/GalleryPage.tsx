import React from 'react';

const GalleryPage: React.FC = () => {
    const galleryItems = [
        {
            id: 1,
            title: 'Competition Days',
            description: 'Memories from competitive judo career (1972-1981)',
            image: '/images/1.jpg'
        },
        {
            id: 2,
            title: 'National Team Coaching',
            description: 'Leading Singapore National Team (2013-2018)',
            image: '/images/2.jpg'
        },
        {
            id: 3,
            title: 'Jagsport Singapore',
            description: 'Previous coaching position and training sessions',
            image: '/images/3.jpg'
        },
        {
            id: 4,
            title: 'Technical Training',
            description: 'Teaching judo techniques and principles',
            image: '/images/4.jpg'
        },
        {
            id: 5,
            title: 'Awards Ceremony',
            description: 'Receiving the prestigious SJF Judoka of the Year award',
            image: '/images/5.jpg'
        },
        {
            id: 6,
            title: 'Student Development',
            description: 'Mentoring the next generation of judokas',
            image: '/images/6.jpg'
        },
        {
            id: 7,
            title: 'International Competitions',
            description: 'Representing Singapore on the world stage',
            image: '/images/7.jpg'
        },
        {
            id: 8,
            title: 'Judo Philosophy',
            description: 'Sharing the values and spirit of judo',
            image: '/images/8.jpg'
        },
        {
            id: 9,
            title: 'Training Sessions',
            description: 'Intensive training and skill development',
            image: '/images/9.jpg'
        },
        {
            id: 10,
            title: 'Coaching Excellence',
            description: 'Demonstrating advanced coaching techniques',
            image: '/images/photo_2025-07-17_22-52-16.jpg'
        },
        {
            id: 11,
            title: 'Technical Mastery',
            description: 'Showcasing technical precision and skill',
            image: '/images/photo_2025-07-17_22-51-30.jpg'
        },
        {
            id: 12,
            title: 'Training Methodology',
            description: 'Innovative training approaches and methods',
            image: '/images/photo_2025-07-17_22-50-27.jpg'
        },
        {
            id: 13,
            title: 'Judo Heritage',
            description: 'Preserving and passing on judo traditions',
            image: '/images/photo_2025-05-31_14-53-14.jpg'
        },
    ];

    return (
        <div style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '2rem',
                color: '#333',
                textAlign: 'center',
                lineHeight: '1.2'
            }}>
                Gallery
            </h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                {galleryItems.map((item) => (
                    <div key={item.id} style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s ease-in-out',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                        }}>
                        <div style={{
                            height: '200px',
                            overflow: 'hidden',
                            borderBottom: '1px solid #dee2e6'
                        }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <h3 style={{
                                color: '#333',
                                marginBottom: '0.5rem',
                                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                                lineHeight: '1.3'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                color: '#666',
                                fontSize: 'clamp(0.85rem, 2.2vw, 0.9rem)',
                                lineHeight: '1.4'
                            }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Section */}
            <div style={{ marginTop: '3rem' }}>
                <h2 style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    marginBottom: '2rem',
                    color: '#333',
                    textAlign: 'center',
                    lineHeight: '1.2'
                }}>
                    Video Highlights
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        padding: '1rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{
                            color: '#333',
                            marginBottom: '1rem',
                            fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
                            lineHeight: '1.3'
                        }}>
                            🎬 Farewell Tribute
                        </h3>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            paddingBottom: '56.25%', // 16:9 aspect ratio
                            marginBottom: '1rem'
                        }}>
                            <iframe
                                src="https://www.youtube.com/embed/OIzGO6zBibw"
                                title="Farewell Tribute to Low Chee Kiang"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '8px',
                                    border: 'none'
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <p style={{
                            color: '#666',
                            fontSize: 'clamp(0.85rem, 2.2vw, 0.9rem)',
                            lineHeight: '1.4'
                        }}>
                            A special farewell tribute video celebrating the remarkable career and contributions
                            of Low Chee Kiang to Singapore's judo community.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        padding: '1rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{
                            color: '#333',
                            marginBottom: '1rem',
                            fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
                            lineHeight: '1.3'
                        }}>
                            Training Session Highlights
                        </h3>
                        <video
                            controls
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                                marginBottom: '1rem'
                            }}
                        >
                            <source src="/images/IMG_9215.MOV" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p style={{
                            color: '#666',
                            fontSize: 'clamp(0.85rem, 2.2vw, 0.9rem)',
                            lineHeight: '1.4'
                        }}>
                            Watch Coach Low Chee Kiang in action during an intensive training session,
                            demonstrating advanced judo techniques and coaching methodologies.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        padding: '1rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{
                            color: '#333',
                            marginBottom: '1rem',
                            fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
                            lineHeight: '1.3'
                        }}>
                            Competition Preparation
                        </h3>
                        <video
                            controls
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                                marginBottom: '1rem'
                            }}
                        >
                            <source src="/images/IMG_9216.MOV" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p style={{
                            color: '#666',
                            fontSize: 'clamp(0.85rem, 2.2vw, 0.9rem)',
                            lineHeight: '1.4'
                        }}>
                            Exclusive footage of competition preparation and strategic training sessions
                            that showcase the dedication and expertise of Singapore's premier judo coach.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                marginTop: '2rem'
            }}>
                <h2 style={{
                    color: '#333',
                    marginBottom: '1rem',
                    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                    lineHeight: '1.2'
                }}>
                    Gallery Highlights
                </h2>
                <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: '0 1rem'
                }}>
                    This gallery showcases highlights from Low Chee Kiang's distinguished judo journey, including competition moments,
                    coaching sessions, and special achievements throughout his career. Each image represents a chapter in his
                    remarkable contribution to Singapore's judo community.
                </p>
            </div>
        </div>
    );
};

export default GalleryPage; 