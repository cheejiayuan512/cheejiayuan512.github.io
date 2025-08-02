import React from 'react';

const CoachingExperiencePage: React.FC = () => {
    const coachingExperiences = [
        {
            id: 1,
            title: "Singapore National Team Head Coach (2013-2018)",
            description: "Led the Singapore National Team for five years, guiding elite athletes to international competitions and fostering national pride. Developed comprehensive training programs and mentored athletes who represented Singapore at various international levels.",
            image: "/images/1.jpg"
        },
        {
            id: 2,
            title: "Technical and Developmental Coach",
            description: "Specialized in technical training and athlete development, focusing on fundamental judo techniques and advanced strategies. Created systematic approaches to skill development that have been adopted by judo programs throughout Singapore.",
            image: "/images/2.jpg"
        },
        {
            id: 3,
            title: "Competition Preparation Specialist",
            description: "Expert in preparing athletes for competitive judo events, including mental conditioning, physical training, and strategic planning. Developed comprehensive pre-competition routines that maximize athlete performance.",
            image: "/images/3.jpg"
        },
        {
            id: 4,
            title: "Advanced Coaching Techniques",
            description: "Pioneered advanced coaching methodologies that combine traditional judo principles with modern sports science. These techniques have revolutionized how judo is taught and practiced in Singapore.",
            image: "/images/photo_2025-07-17_22-51-30.jpg"
        },
        {
            id: 5,
            title: "Competition Preparation",
            description: "Specialized in preparing athletes for high-level competitions through comprehensive training programs that address physical, technical, and mental aspects of competitive judo.",
            image: "/images/photo_2025-07-17_22-50-27.jpg"
        },
        {
            id: 6,
            title: "Training Methodology Innovation",
            description: "Developed innovative training approaches that have shaped the development of judo practitioners across Singapore, combining traditional techniques with modern training principles.",
            image: "/images/photo_2025-05-31_14-53-14.jpg"
        },
        {
            id: 7,
            title: "Mentorship and Leadership",
            description: "Focused on developing not only judo skills but also leadership qualities and character development in young practitioners, ensuring the growth of well-rounded individuals.",
            image: "/images/6.jpg"
        },
        {
            id: 8,
            title: "Raffles Judo Coach (1982-2025)",
            description: "Served as Raffles Judo coach for 43 years, building a strong foundation for judo development in the institution. Started coaching journey in 1982 and continued until retirement in 2025. Mentored countless students and helped establish Raffles as a center of judo excellence.",
            image: "/images/4.jpg"
        },
        {
            id: 9,
            title: "Previous Position: Jagsport Singapore",
            description: "Previously served as a Technical Advisor Coach at Jagsport Singapore, contributing to the development of judo programs and mentoring athletes in the organization.",
            image: "/images/5.jpg"
        },
        {
            id: 10,
            title: "Retirement and Legacy",
            description: "Recently retired from active coaching after an illustrious career spanning over five decades. His legacy continues through the countless practitioners he has mentored and the judo community he has helped build.",
            image: "/images/photo_2025-07-17_22-52-16.jpg"
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
                Coaching Experience
            </h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {coachingExperiences.map((experience) => (
                    <div key={experience.id} style={{
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
                                src={experience.image}
                                alt={experience.title}
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
                                {experience.title}
                            </h3>
                            <p style={{
                                color: '#666',
                                lineHeight: '1.6',
                                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                            }}>
                                {experience.description}
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
                    Coaching Philosophy
                </h2>
                <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: '0 1rem'
                }}>
                    Throughout his coaching career, Low Chee Kiang has emphasized the importance of technical excellence,
                    character development, and the preservation of judo's traditional values. His approach combines rigorous
                    training with mentorship, ensuring that students develop not only as athletes but as individuals who embody
                    the spirit of judo in all aspects of their lives.
                </p>
            </div>
        </div>
    );
};

export default CoachingExperiencePage; 