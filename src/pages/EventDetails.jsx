import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // All events data (same as in Events.jsx)
  const allEvents = [
    {
      id: 1,
      title: 'TechFest 2025',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 6:00 PM',
      category: 'Competition',
      description: 'Annual technical festival featuring coding competitions, robotics challenges, and innovative project exhibitions.',
      fullDescription: 'TechFest 2025 is our flagship annual event that brings together the brightest minds in technology. This three-day extravaganza features intense coding competitions, cutting-edge robotics challenges, and inspiring project exhibitions. Participants will compete for prizes worth over $50,000 while networking with industry leaders and potential employers.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=3840&h=2160&fit=crop&q=80',
      venue: 'Main Campus Auditorium',
      participants: '500+',
      registrationOpen: true,
      highlights: [
        'National-level coding competitions with exciting prizes',
        'Live robotics battle arena with autonomous bots',
        'Project showcase featuring 100+ innovative ideas',
        'Industry expert keynote speeches and panel discussions'
      ],
      sponsors: ['Tech Corp', 'Innovation Labs', 'Future Tech']
    },
    {
      id: 2,
      title: 'AI & Machine Learning Bootcamp',
      date: 'February 28, 2025',
      time: '10:00 AM - 5:00 PM',
      category: 'Workshop',
      description: 'Intensive hands-on workshop on machine learning fundamentals, neural networks, and practical AI applications.',
      fullDescription: 'Dive deep into the world of Artificial Intelligence and Machine Learning in this intensive one-day bootcamp. Learn from industry practitioners about neural networks, deep learning frameworks, and real-world AI applications. This workshop includes hands-on coding sessions where you will build and train your own ML models.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=3840&h=2160&fit=crop&q=80',
      venue: 'Tech Innovation Lab',
      participants: '100',
      registrationOpen: true,
      highlights: [
        'Hands-on training with TensorFlow and PyTorch',
        'Build and deploy real ML models',
        'Learn from AI researchers and practitioners',
        'Certificate of completion from recognized institution'
      ],
      sponsors: ['AI Solutions Inc', 'DataTech', 'ML Academy']
    },
    {
      id: 3,
      title: 'Hackathon 48hrs - Code for Change',
      date: 'April 5-7, 2025',
      time: '6:00 PM Friday - 6:00 PM Sunday',
      category: 'Hackathon',
      description: '48-hour intensive coding marathon focused on building innovative solutions for social impact and sustainability.',
      fullDescription: 'Join us for an epic 48-hour coding marathon where teams compete to build innovative solutions addressing real-world social and environmental challenges. Work alongside talented developers, designers, and entrepreneurs to create impactful technology. Mentorship from industry experts, free meals, and amazing prizes await!',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=3840&h=2160&fit=crop&q=80',
      venue: 'Innovation Center',
      participants: '200+ Teams',
      registrationOpen: true,
      highlights: [
        'Prize pool of $100,000 across multiple categories',
        '24/7 mentorship from tech industry veterans',
        'Free food, beverages, and swag throughout',
        'Opportunity to pitch to venture capitalists'
      ],
      sponsors: ['Startup Hub', 'Venture Capital Partners', 'Tech Accelerator']
    },
    {
      id: 4,
      title: 'Tech Talk Series: Cloud & DevOps',
      date: 'March 25, 2025',
      time: '4:00 PM - 7:00 PM',
      category: 'Seminar',
      description: 'Expert sessions on cloud computing, DevOps practices, and modern software deployment strategies.',
      fullDescription: 'Gain insights into modern cloud architecture and DevOps practices from industry leaders. This seminar covers cloud-native development, containerization with Docker and Kubernetes, CI/CD pipelines, and infrastructure as code. Perfect for students looking to understand enterprise software deployment.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=3840&h=2160&fit=crop&q=80',
      venue: 'Conference Hall A',
      participants: '300+',
      registrationOpen: true,
      highlights: [
        'Learn AWS, Azure, and Google Cloud fundamentals',
        'Hands-on Docker and Kubernetes workshops',
        'Understanding CI/CD and GitOps workflows',
        'Q&A with senior DevOps engineers'
      ],
      sponsors: ['Cloud Providers Alliance', 'DevOps Tools Inc', 'Container Tech']
    },
    {
      id: 5,
      title: 'Web3 & Blockchain Summit',
      date: 'May 12, 2025',
      time: '10:00 AM - 6:00 PM',
      category: 'Conference',
      description: 'Comprehensive conference exploring blockchain technology, cryptocurrency, NFTs, and decentralized applications.',
      fullDescription: 'Explore the future of decentralized technology at our Web3 & Blockchain Summit. Learn about blockchain fundamentals, smart contract development, DeFi protocols, NFT ecosystems, and the future of Web3. Network with blockchain developers, crypto enthusiasts, and industry innovators.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=3840&h=2160&fit=crop&q=80',
      venue: 'Tech Convention Center',
      participants: '400+',
      registrationOpen: true,
      highlights: [
        'Smart contract development with Solidity',
        'Understanding DeFi and NFT ecosystems',
        'Blockchain security and best practices',
        'Panel discussions with Web3 founders'
      ],
      sponsors: ['Crypto Exchange', 'Blockchain Foundation', 'Web3 Ventures']
    },
    {
      id: 6,
      title: 'Mobile App Development Workshop',
      date: 'April 20, 2025',
      time: '9:00 AM - 5:00 PM',
      category: 'Workshop',
      description: 'Full-day workshop on React Native and Flutter for cross-platform mobile app development.',
      fullDescription: 'Master mobile app development with this comprehensive workshop covering React Native and Flutter. Build real mobile applications from scratch, learn best practices for mobile UI/UX, and understand how to deploy apps to iOS and Android app stores. Includes hands-on coding exercises and project work.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=3840&h=2160&fit=crop&q=80',
      venue: 'Mobile Dev Lab',
      participants: '80',
      registrationOpen: true,
      highlights: [
        'Build apps with React Native and Flutter',
        'Learn mobile UI/UX design principles',
        'App deployment to Play Store and App Store',
        'Real-world project with code review'
      ],
      sponsors: ['Mobile First Inc', 'App Development Studio', 'React Native Community']
    }
  ];

  const event = allEvents.find(e => e.id === parseInt(eventId));

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // GSAP Animations
    gsap.fromTo('.event-hero', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo('.event-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
    );
  }, [eventId]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Event Not Found</h2>
          <button 
            onClick={() => navigate('/events')}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Close Button - Fixed Top Right */}
      <button 
        onClick={() => navigate('/events')}
        className="fixed top-20 right-4 md:top-24 md:right-6 z-50 bg-white hover:bg-gray-100 text-gray-900 p-2.5 md:p-3 rounded-full shadow-lg border-2 border-gray-300 transition-all duration-300 hover:scale-110"
        aria-label="Close and go back to events"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Hero Section with Event Image */}
      <section className="event-hero relative pt-32 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <button 
              onClick={() => navigate('/events')}
              className="inline-flex items-center gap-2 text-white font-bold mb-6 hover:text-blue-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Events
            </button>

            <div className="inline-block px-4 py-2 bg-white text-gray-900 text-sm font-bold rounded-lg uppercase tracking-wider mb-6">
              {event.category}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {event.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-white text-base md:text-lg">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-bold">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="font-bold">{event.venue}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="event-content py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Event */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">About This Event</h2>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                    {event.fullDescription}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">Key Highlights</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm font-bold text-gray-800">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sponsors */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">Sponsors & Partners</h2>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {event.sponsors.map((sponsor, idx) => (
                      <div 
                        key={idx} 
                        className="px-6 py-4 bg-gray-900 text-white text-base font-bold rounded-lg border-2 border-gray-800"
                      >
                        {sponsor}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Event Stats */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 sticky top-24">
                  <h3 className="text-xl font-black text-gray-900 mb-6">Event Details</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-xs font-bold text-gray-600 uppercase mb-1">Expected Participants</p>
                      <p className="text-2xl font-black text-gray-900">{event.participants}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-xs font-bold text-gray-600 uppercase mb-1">Category</p>
                      <p className="text-xl font-black text-gray-900">{event.category}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-xs font-bold text-gray-600 uppercase mb-1">Venue</p>
                      <p className="text-base font-black text-gray-900">{event.venue}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-xs font-bold text-gray-600 uppercase mb-1">Status</p>
                      <p className="text-base font-black text-green-700">
                        {event.registrationOpen ? 'Registration Open' : 'Coming Soon'}
                      </p>
                    </div>
                  </div>

                  {/* Registration Button */}
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-base hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  </div>

                  {/* Share Event */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-gray-600 mb-3">Share This Event</p>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-gray-700 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-gray-700 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-gray-700 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
