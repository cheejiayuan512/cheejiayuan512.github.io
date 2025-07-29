import React from 'react';

const AchievementsPage: React.FC = () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>
            Achievements & Awards
        </h1>

        <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="/images/1.jpg"
                            alt="SJF Judoka of the Year Award"
                            style={{
                                width: '100%',
                                maxWidth: '300px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                    <div>
                        <h2 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>🏆 SJF Judoka of the Year Award</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                            Low Chee Kiang holds the unique distinction of being the <strong>only judoka</strong> to have ever received
                            the prestigious Singapore Judo Federation (SJF) Judoka of the Year award. This recognition highlights his
                            exceptional contributions to the sport and his outstanding achievements during his competitive career.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>🥋 Competitive Career (1972-1981)</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                            During his active competitive period from 1972 to 1981, Chee Kiang established himself as one of Singapore's
                            most accomplished judo practitioners. His dedication to the sport and technical excellence earned him numerous
                            accolades and respect within the judo community.
                        </p>
                        <ul style={{ lineHeight: '1.6', paddingLeft: '2rem' }}>
                            <li>Represented Singapore in international competitions</li>
                            <li>Demonstrated exceptional technical skills and sportsmanship</li>
                            <li>Contributed significantly to Singapore's judo development</li>
                        </ul>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="/images/2.jpg"
                            alt="Competitive Career Highlights"
                            style={{
                                width: '100%',
                                maxWidth: '250px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="/images/3.jpg"
                            alt="7th Dan Black Belt"
                            style={{
                                width: '100%',
                                maxWidth: '300px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                    <div>
                        <h2 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>🎖️ 7th Dan Black Belt</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                            Currently holding a <strong>7th Dan</strong> with the Singapore Judo Federation, Chee Kiang's rank reflects
                            his decades of dedication to judo, his technical mastery, and his contributions to the sport's development
                            in Singapore.
                        </p>
                        <p style={{ lineHeight: '1.6' }}>
                            The 7th Dan is a prestigious rank that recognizes not only technical skill but also leadership,
                            mentorship, and service to the judo community.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>🏅 Coaching Excellence</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                            As head coach of the Singapore National Team from 2013 to 2018, Chee Kiang led the development of
                            Singapore's elite judokas, contributing to the nation's success in international competitions and
                            fostering the next generation of judo talent.
                        </p>
                        <p style={{ lineHeight: '1.6' }}>
                            His coaching achievements include mentoring athletes who have represented Singapore at various
                            international levels and competitions, leaving a lasting legacy in Singapore's judo community.
                        </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="/images/4.jpg"
                            alt="Coaching Excellence"
                            style={{
                                width: '100%',
                                maxWidth: '250px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Additional Achievement Sections with Available Images */}
            <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="/images/photo_2025-07-17_22-52-16.jpg"
                            alt="Technical Mastery Achievement"
                            style={{
                                width: '100%',
                                maxWidth: '300px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                    <div>
                        <h2 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>🥋 Technical Mastery</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                            Chee Kiang's technical mastery has been recognized throughout his career, demonstrating exceptional
                            skill and precision in judo techniques. His ability to execute complex moves with perfect form
                            has set the standard for judo excellence in Singapore.
                        </p>
                        <p style={{ lineHeight: '1.6' }}>
                            His technical expertise continues to inspire and guide the next generation of judo practitioners,
                            ensuring the preservation of high-quality judo techniques in Singapore.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>🎯 Training Innovation</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                            Throughout his coaching career, Chee Kiang has developed innovative training methodologies that
                            have revolutionized how judo is taught and practiced in Singapore. His approaches combine traditional
                            techniques with modern training principles.
                        </p>
                        <p style={{ lineHeight: '1.6' }}>
                            These innovative methods have produced numerous successful athletes and have been adopted by
                            judo programs throughout the region, further establishing Singapore's reputation in the sport.
                        </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="/images/photo_2025-07-17_22-51-30.jpg"
                            alt="Training Innovation"
                            style={{
                                width: '100%',
                                maxWidth: '250px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="/images/photo_2025-07-17_22-50-27.jpg"
                            alt="Judo Heritage Preservation"
                            style={{
                                width: '100%',
                                maxWidth: '300px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                    <div>
                        <h2 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>🏛️ Judo Heritage Preservation</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                            As a custodian of judo traditions, Chee Kiang has played a vital role in preserving and passing on
                            the rich heritage of judo in Singapore. His commitment to maintaining the sport's traditional values
                            while adapting to modern requirements has been instrumental in judo's continued growth.
                        </p>
                        <p style={{ lineHeight: '1.6' }}>
                            His efforts ensure that future generations will continue to benefit from the wisdom and techniques
                            that have been passed down through judo's long history.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>🎓 Raffles Judo Legacy (2010-2025)</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                            During his 15-year tenure as Raffles Judo coach from 2010 to 2025, Chee Kiang established an unparalleled
                            legacy of excellence in student development. He mentored countless young practitioners, helping them
                            develop not only their judo skills but also their character and leadership abilities.
                        </p>
                        <p style={{ lineHeight: '1.6' }}>
                            His impact at Raffles Institution extends beyond the dojo, as he helped shape the institution's
                            sporting culture and inspired generations of students to pursue excellence in judo and in life.
                        </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="/images/5.jpg"
                            alt="Raffles Judo Legacy"
                            style={{
                                width: '100%',
                                maxWidth: '250px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AchievementsPage; 