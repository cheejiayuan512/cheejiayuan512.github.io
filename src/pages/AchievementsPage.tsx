import React from 'react';

const AchievementsPage: React.FC = () => {
    const achievements = [
        {
            id: 1,
            title: "SJF Judoka of the Year Award",
            description: "The only judoka to have ever received this prestigious award from the Singapore Judo Federation, recognizing exceptional contributions to the sport.",
            image: "/images/1.jpg"
        },
        {
            id: 2,
            title: "7th Dan Black Belt",
            description: "Achieved the highest rank in judo, demonstrating mastery of techniques, leadership, and dedication to the martial art.",
            image: "/images/2.jpg"
        },
        {
            id: 3,
            title: "Singapore National Team Head Coach",
            description: "Led the Singapore National Team from 2013 to 2018, guiding athletes to international competitions and fostering national pride.",
            image: "/images/3.jpg"
        },
        {
            id: 4,
            title: "Competitive Career Excellence",
            description: "Active competitor from 1972 to 1981, representing Singapore in numerous national and international judo competitions.",
            image: "/images/4.jpg"
        },
        {
            id: 5,
            title: "Technical Mastery",
            description: "Recognized for exceptional technical skills and deep understanding of judo principles, earning respect throughout the judo community.",
            image: "/images/photo_2025-07-17_22-52-16.jpg"
        },
        {
            id: 6,
            title: "Training Innovation",
            description: "Developed innovative training methodologies that have shaped the development of judo practitioners across Singapore.",
            image: "/images/photo_2025-07-17_22-51-30.jpg"
        },
        {
            id: 7,
            title: "Judo Heritage Preservation",
            description: "Dedicated to preserving and passing on traditional judo values while adapting to modern training approaches.",
            image: "/images/photo_2025-07-17_22-50-27.jpg"
        },
        {
            id: 8,
            title: "Raffles Judo Legacy (2010-2025)",
            description: "Served as Raffles Judo coach for 15 years, building a strong foundation for judo development in the institution.",
            image: "/images/5.jpg"
        }
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
                Achievements & Awards
            </h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {achievements.map((achievement, index) => (
                    <div key={achievement.id} style={{
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
                                src={achievement.image}
                                alt={achievement.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{
                                color: '#333',
                                marginBottom: '1rem',
                                fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                                lineHeight: '1.3'
                            }}>
                                {achievement.title}
                            </h3>
                            <p style={{
                                color: '#666',
                                lineHeight: '1.6',
                                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                            }}>
                                {achievement.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                marginTop: '3rem'
            }}>
                <h2 style={{
                    color: '#333',
                    marginBottom: '1rem',
                    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                    lineHeight: '1.2'
                }}>
                    Legacy of Excellence
                </h2>
                <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: '0 1rem'
                }}>
                    Low Chee Kiang's achievements represent a lifetime of dedication to judo, from his competitive days to his coaching career.
                    His contributions have shaped Singapore's judo landscape and inspired generations of practitioners to pursue excellence
                    both on and off the mat.
                </p>
            </div>
        </div>
    );
};

export default AchievementsPage; 