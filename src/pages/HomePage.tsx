import React from 'react';

const HomePage: React.FC = () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>Low Chee Kiang</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>
                Singapore's Premier Judo Practitioner & Coach
            </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    width: '300px',
                    height: '400px',
                    margin: '0 auto',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src="/images/prof_pic.png"
                        alt="Low Chee Kiang - Singapore's Premier Judo Practitioner & Coach"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                    Born October 1954
                </p>
            </div>

            <div>
                <h2 style={{ color: '#333', marginBottom: '1rem' }}>About</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    Low Chee Kiang is a distinguished judo practitioner from Singapore who competed actively from 1972 to 1981.
                    He holds the unique distinction of being the only judoka to have ever received the prestigious SJF Judoka of the Year award.
                </p>

                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    After retiring from competitive judo, Chee Kiang remained deeply involved in the sport as a technical and developmental coach.
                    His expertise and dedication led to his appointment as head coach for the Singapore National Team from 2013 to 2018,
                    where he played a crucial role in developing the next generation of Singaporean judokas.
                </p>

                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    Currently holding a 7th Dan with the Singapore Judo Federation, Chee Kiang has recently retired from active coaching
                    after an illustrious career spanning over four decades. His legacy continues through the countless practitioners
                    he has mentored and the judo community he has helped build in Singapore.
                </p>

                <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Retired Coach</h3>
                    <p style={{ margin: '0', color: '#666' }}>
                        <strong>Recently Retired from Active Coaching</strong><br />
                        Legacy continues through generations of judo practitioners he has mentored
                    </p>
                </div>
            </div>
        </div>

        {/* Media Highlights Section */}
        <div style={{ marginTop: '4rem' }}>
            <h2 style={{ color: '#333', marginBottom: '2rem', textAlign: 'center', fontSize: '2rem' }}>Media Highlights</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
            }}>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src="/images/photo_2025-07-17_22-52-16.jpg"
                        alt="Coaching Excellence"
                        style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{ padding: '1rem' }}>
                        <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Coaching Excellence</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                            Demonstrating advanced coaching techniques and methodologies that have shaped Singapore's judo landscape.
                        </p>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src="/images/photo_2025-07-17_22-51-30.jpg"
                        alt="Technical Mastery"
                        style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{ padding: '1rem' }}>
                        <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Technical Mastery</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                            Showcasing technical precision and skill that has earned recognition throughout the judo community.
                        </p>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src="/images/photo_2025-07-17_22-50-27.jpg"
                        alt="Training Methodology"
                        style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{ padding: '1rem' }}>
                        <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Training Methodology</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                            Innovative training approaches that have developed generations of successful judo practitioners.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Video Section */}
        <div style={{ marginTop: '3rem' }}>
            <h2 style={{ color: '#333', marginBottom: '2rem', textAlign: 'center', fontSize: '2rem' }}>Featured Videos</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                gap: '2rem'
            }}>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.2rem' }}>
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
                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                        A special farewell tribute video celebrating the remarkable career and contributions
                        of Low Chee Kiang to Singapore's judo community.
                    </p>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.2rem' }}>
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
                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                        Watch Coach Low Chee Kiang in action during an intensive training session,
                        demonstrating advanced judo techniques and coaching methodologies.
                    </p>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.2rem' }}>
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
                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                        Exclusive footage of competition preparation and strategic training sessions
                        that showcase the dedication and expertise of Singapore's premier judo coach.
                    </p>
                </div>
            </div>
        </div>

        {/* News Section */}
        <div style={{ marginTop: '4rem' }}>
            <h2 style={{ color: '#333', marginBottom: '2rem', textAlign: 'center' }}>News</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '2rem'
            }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ color: '#666', fontSize: '0.9rem' }}>Nov 23, 2017</span>
                        <span style={{ color: '#007bff', fontSize: '0.9rem' }}>📰 Article</span>
                    </div>
                    <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>
                        Lessons that stay true beyond the mat: Judo Coach Low Chee Kiang and Xuan Yi
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.5', fontSize: '0.9rem' }}>
                        An insightful article exploring the valuable life lessons that judo teaches,
                        featuring Coach Low Chee Kiang and his student Ang Xuan Yi.
                    </p>
                    <a
                        href="https://web.archive.org/web/20191207002143/https://www.myactivesg.com/team-singapore/read/2017/11/lessons-that-stay-true-beyond-the-mat-judo-coach-low-chee-kiang-and-xuan-yi"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#007bff', textDecoration: 'none', fontSize: '0.9rem' }}
                    >
                        Read Article →
                    </a>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ color: '#666', fontSize: '0.9rem' }}>Nov 23, 2017</span>
                        <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>🎥 Video</span>
                    </div>
                    <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>
                        #CoachSG: Judo Coach Low Chee Kiang and Judoka Ang Xuan Yi
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.5', fontSize: '0.9rem' }}>
                        A video feature showcasing the coaching relationship between Low Chee Kiang
                        and his student Ang Xuan Yi, highlighting the mentor-mentee dynamic.
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=nNz-NjKVsmI"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#dc3545', textDecoration: 'none', fontSize: '0.9rem' }}
                    >
                        Watch Video →
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage; 