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
            title: "Raffles Judo Legacy (1982-2025)",
            description: "Served as Raffles Judo coach for 43 years, building a strong foundation for judo development in the institution. Started coaching journey in 1982 and continued until retirement in 2025.",
            image: "/images/5.jpg"
        },
        {
            id: 9,
            title: "Pesta Sukan Dominance (1973-1981)",
            description: "Achieved an outstanding record of 12 gold medals in Pesta Sukan competitions. In 3 of these years, competed in both Extra Lights and Open categories, winning gold in both events each time. Pesta Sukan allows non-Singaporeans to participate, making this achievement even more remarkable.",
            image: "/images/6.jpg"
        }
    ];

    const competitionRecords = [
        {
            date: "1973-1981",
            tournament: "S'PORE NATIONAL/PESTA SUKAN",
            category: "-60KG",
            result: "GOLD (24 gold medals - Extra Lights & Open categories in 3 of these years)"
        },
        {
            date: "1973",
            tournament: "SEAP GAMES",
            category: "-60KG",
            result: "BRONZE"
        },
        {
            date: "1975",
            tournament: "SEA GAMES",
            category: "-60KG",
            result: "SILVER"
        },
        {
            date: "1977",
            tournament: "1ST SINGAPORE OPEN",
            category: "-60KG",
            result: "GOLD"
        },
        {
            date: "1977",
            tournament: "SEA GAMES",
            category: "-60KG",
            result: "SILVER"
        },
        {
            date: "1977",
            tournament: "INDONESIAN OPEN",
            category: "-60KG",
            result: "GOLD"
        },
        {
            date: "1978",
            tournament: "JIGIRO KANO CUP",
            category: "-60KG",
            result: "PARTICIPATION"
        },
        {
            date: "1978",
            tournament: "WORLD JUDO INVITATION ROC",
            category: "-60KG",
            result: "BRONZE"
        },
        {
            date: "1981",
            tournament: "ASIAN JUDO CHAMPIONSHIP",
            category: "-60KG",
            result: "4TH PLACE"
        },
        {
            date: "1981",
            tournament: "SEA GAMES",
            category: "-60KG",
            result: "BRONZE"
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

            {/* Major Achievements Section */}
            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                    marginBottom: '1.5rem',
                    color: '#333',
                    textAlign: 'center'
                }}>
                    Major Achievements
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {achievements.map((achievement) => (
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
            </div>

            {/* Competition Records Table */}
            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                    marginBottom: '1.5rem',
                    color: '#333',
                    textAlign: 'center'
                }}>
                    Competition Records
                </h2>
                <div style={{
                    overflowX: 'auto',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)'
                    }}>
                        <thead>
                            <tr style={{
                                backgroundColor: '#333',
                                color: 'white'
                            }}>
                                <th style={{
                                    padding: '1rem',
                                    textAlign: 'left',
                                    borderBottom: '2px solid #555',
                                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                                    fontWeight: '600'
                                }}>
                                    Date
                                </th>
                                <th style={{
                                    padding: '1rem',
                                    textAlign: 'left',
                                    borderBottom: '2px solid #555',
                                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                                    fontWeight: '600'
                                }}>
                                    Tournament
                                </th>
                                <th style={{
                                    padding: '1rem',
                                    textAlign: 'left',
                                    borderBottom: '2px solid #555',
                                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                                    fontWeight: '600'
                                }}>
                                    Category
                                </th>
                                <th style={{
                                    padding: '1rem',
                                    textAlign: 'left',
                                    borderBottom: '2px solid #555',
                                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                                    fontWeight: '600'
                                }}>
                                    Result
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {competitionRecords.map((record, index) => (
                                <tr key={index} style={{
                                    backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff',
                                    borderBottom: '1px solid #dee2e6'
                                }}>
                                    <td style={{
                                        padding: '1rem',
                                        fontWeight: '500',
                                        color: '#333'
                                    }}>
                                        {record.date}
                                    </td>
                                    <td style={{
                                        padding: '1rem',
                                        color: '#666'
                                    }}>
                                        {record.tournament}
                                    </td>
                                    <td style={{
                                        padding: '1rem',
                                        color: '#666'
                                    }}>
                                        {record.category}
                                    </td>
                                    <td style={{
                                        padding: '1rem',
                                        fontWeight: '600',
                                        color: record.result.includes('GOLD') ? '#d4af37' :
                                            record.result.includes('SILVER') ? '#c0c0c0' :
                                                record.result.includes('BRONZE') ? '#cd7f32' : '#333'
                                    }}>
                                        {record.result}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    Low Chee Kiang's achievements represent a lifetime of dedication to judo, spanning from competitive excellence
                    to coaching mastery. His contributions have shaped Singapore's judo landscape and inspired generations of practitioners
                    to pursue excellence both on and off the mat.
                </p>
            </div>
        </div>
    );
};

export default AchievementsPage; 