import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const upcomingRef = useRef(null);
  const pastRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Counter animation states
  const [eventsCount, setEventsCount] = useState(0);
  const [participantsCount, setParticipantsCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);
  const countersRef = useRef({ events: 0, participants: 0, categories: 0 });
  const hasCountedRef = useRef(false);

  useEffect(() => {
    // Setup IntersectionObserver to start counters when hero is visible
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasCountedRef.current) {
          hasCountedRef.current = true;
          // targets
          const targetEvents = upcomingEvents.length;
          const targetParticipants = upcomingEvents.reduce((total, event) => {
            const num = parseInt(event.participants);
            return total + (isNaN(num) ? 0 : num);
          }, 0);
          const targetCategories = new Set(upcomingEvents.map(e => e.category)).size;

          // simple easing counter using requestAnimationFrame
          const animate = (key, setter, start, end, duration = 900) => {
            const startTime = performance.now();
            const step = (now) => {
              const t = Math.min(1, (now - startTime) / duration);
              const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
              const value = Math.floor(start + (end - start) * eased);
              setter(value);
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          };

          animate('events', setEventsCount, 0, targetEvents);
          animate('participants', setParticipantsCount, 0, targetParticipants);
          animate('categories', setCategoriesCount, 0, targetCategories);
        }
      });
    }, { threshold: 0.2 });

    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, [upcomingEvents]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-title',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        }
      );

      // Filter Animation
      gsap.fromTo('.filter-button',
        { opacity: 0, scale: 0.8 },
        {
          scrollTrigger: {
            trigger: '.filter-section',
            start: 'top 80%',
          },
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        }
      );

      // Event Cards Animation
      gsap.fromTo('.event-card',
        { opacity: 0, y: 80 },
        {
          scrollTrigger: {
            trigger: upcomingRef.current,
            start: 'top 70%',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [activeTab]);

  const upcomingEvents = [
    {
      id: 1,
      title: 'TechFest 2025',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 6:00 PM',
      category: 'Competition',
      description: 'Annual technical festival featuring coding competitions, robotics challenges, and innovative project exhibitions.',
      fullDescription: 'Join us for 3 days of non-stop innovation! Compete in intense coding challenges, showcase your groundbreaking robotics projects, and network with industry leaders from top tech companies. Prize pool exceeding $50,000 with internship opportunities for winners.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=3840&h=2160&fit=crop&q=80',
      venue: 'Main Campus Auditorium',
      participants: '500+',
      registrationOpen: true,
      highlights: ['20+ Competitions', 'Industry Mentors', 'Live Project Demo', 'Networking Dinner'],
      sponsors: ['Google', 'Microsoft', 'Amazon'],
    },
    {
      id: 2,
      title: 'AI & Machine Learning Bootcamp',
      date: 'February 28, 2025',
      time: '10:00 AM - 5:00 PM',
      category: 'Workshop',
      description: 'Intensive hands-on workshop on machine learning fundamentals, neural networks, and practical AI applications.',
      fullDescription: 'Learn from Google AI engineers and data scientists! Master neural networks, deep learning algorithms, and real-world ML applications. Get hands-on experience with TensorFlow and PyTorch. Certificates and course materials included.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=3840&h=2160&fit=crop&q=80',
      venue: 'Tech Innovation Lab',
      participants: '100',
      registrationOpen: true,
      highlights: ['Expert Instructors', 'Hands-on Projects', 'Certificate', 'Free Resources'],
      sponsors: ['Google AI', 'NVIDIA', 'IBM'],
    },
    {
      id: 3,
      title: 'Hackathon 48hrs - Code for Change',
      date: 'April 5-7, 2025',
      time: '6:00 PM Friday - 6:00 PM Sunday',
      category: 'Hackathon',
      description: '48-hour intensive coding marathon focused on building innovative solutions for social impact and sustainability.',
      fullDescription: 'Code non-stop for 48 hours to solve real-world problems! Build solutions for healthcare, education, environment, and social welfare. Free meals, mentorship from industry experts, and amazing prizes. Top 3 teams get funded internship opportunities and incubation support.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=3840&h=2160&fit=crop&q=80',
      venue: 'Innovation Center',
      participants: '200+ Teams',
      registrationOpen: true,
      highlights: ['48hrs Non-Stop', 'Free Food & Drinks', 'Mentorship', '$20K Prize Pool'],
      sponsors: ['Startup India', 'AWS', 'GitHub'],
    },
    {
      id: 4,
      title: 'Tech Talk Series: Cloud & DevOps',
      date: 'March 25, 2025',
      time: '4:00 PM - 7:00 PM',
      category: 'Seminar',
      description: 'Expert sessions on cloud computing, DevOps practices, and modern software deployment strategies.',
      fullDescription: 'Guest speakers from Microsoft Azure, Amazon AWS, and leading startups! Learn about cloud architecture, CI/CD pipelines, Kubernetes, Docker, and modern DevOps practices. Includes networking dinner and career guidance session.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=3840&h=2160&fit=crop&q=80',
      venue: 'Conference Hall A',
      participants: '300+',
      registrationOpen: true,
      highlights: ['Industry Experts', 'Live Demos', 'Networking Dinner', 'Career Guidance'],
      sponsors: ['Microsoft', 'AWS', 'Google Cloud'],
    },
    {
      id: 5,
      title: 'Web3 & Blockchain Summit',
      date: 'May 12, 2025',
      time: '10:00 AM - 6:00 PM',
      category: 'Conference',
      description: 'Comprehensive conference exploring blockchain technology, cryptocurrency, NFTs, and decentralized applications.',
      fullDescription: 'Dive into the future of Web3! Learn about blockchain fundamentals, smart contracts, DeFi, NFTs, and build your first dApp. Expert panels, live demonstrations, and hands-on workshops. Connect with blockchain developers and crypto entrepreneurs.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=3840&h=2160&fit=crop&q=80',
      venue: 'Tech Convention Center',
      participants: '400+',
      registrationOpen: true,
      highlights: ['Expert Panels', 'Smart Contract Workshop', 'NFT Lab', 'Crypto Networking'],
      sponsors: ['Ethereum Foundation', 'Polygon', 'Coinbase'],
    },
    {
      id: 6,
      title: 'Mobile App Development Workshop',
      date: 'April 20, 2025',
      time: '9:00 AM - 5:00 PM',
      category: 'Workshop',
      description: 'Full-day workshop on React Native and Flutter for cross-platform mobile app development.',
      fullDescription: 'Build production-ready mobile apps! Learn React Native and Flutter from experienced developers. Create your own app during the workshop with guidance from mentors. Covers UI design, state management, API integration, and app deployment.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=3840&h=2160&fit=crop&q=80',
      venue: 'Mobile Dev Lab',
      participants: '80',
      registrationOpen: true,
      highlights: ['Build Real Apps', 'Expert Mentors', 'Code Resources', 'Certificate'],
      sponsors: ['React', 'Google Flutter', 'Expo'],
    },
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'CodeFest 2024',
      date: 'December 10-12, 2024',
      category: 'Competition',
      description: 'Three-day coding competition with 450+ participants from 50+ colleges across the country.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=3840&h=2160&fit=crop&q=80',
      participants: '450+',
      highlights: ['50+ Colleges', '15 Winners', '$30K Prizes', 'Great Success'],
      gallery: 8,
    },
    {
      id: 8,
      title: 'Robotics Championship',
      date: 'November 5, 2024',
      category: 'Competition',
      description: 'Inter-college robotics competition featuring autonomous robots, line followers, and sumo bots.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=3840&h=2160&fit=crop&q=80',
      participants: '200+',
      highlights: ['30+ Teams', 'Live Battles', 'Tech Showcase', 'Amazing Bots'],
      gallery: 12,
    },
    {
      id: 9,
      title: 'Startup Pitch Day',
      date: 'October 18, 2024',
      category: 'Conference',
      description: 'Platform for student entrepreneurs to pitch their startup ideas to investors and industry leaders.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=3840&h=2160&fit=crop&q=80',
      participants: '150+',
      highlights: ['25 Pitches', 'Top VCs', '5 Funded', 'Mentorship'],
      gallery: 6,
    },
    {
      id: 10,
      title: 'Cyber Security Workshop',
      date: 'September 22, 2024',
      category: 'Workshop',
      description: 'Comprehensive workshop on ethical hacking, penetration testing, and cybersecurity fundamentals.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=3840&h=2160&fit=crop&q=80',
      participants: '120',
      highlights: ['Ethical Hacking', 'Live Demos', 'CTF Challenge', 'Certificates'],
      gallery: 10,
    },
  ];

  const categories = ['all', 'Competition', 'Workshop', 'Hackathon', 'Seminar', 'Conference'];

  const filterEvents = (events) => {
    if (activeFilter === 'all') return events;
    return events.filter(event => event.category === activeFilter);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
  <section ref={heroRef} className="relative pt-40 md:pt-56 pb-12 overflow-hidden bg-white">
        {/* Subtle Dotted Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>
        </div>

        {/* Abstract Line-Art Illustration - Background */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            {/* Flowing organic lines */}
            <path d="M0 400 Q200 200 400 400 T800 400 T1200 400" stroke="#9333EA" strokeWidth="2" />
            <path d="M0 500 Q300 300 600 500 T1200 500" stroke="#3B82F6" strokeWidth="1.5" />
            <path d="M200 0 Q200 200 400 200 T600 200 T800 200" stroke="#EC4899" strokeWidth="1.5" />
            
            {/* Scattered circles */}
            <circle cx="150" cy="200" r="30" stroke="#A855F7" strokeWidth="2" fill="none" />
            <circle cx="950" cy="150" r="45" stroke="#3B82F6" strokeWidth="2" fill="none" />
            <circle cx="700" cy="650" r="35" stroke="#EC4899" strokeWidth="2" fill="none" />
            
            {/* Grid patterns */}
            <line x1="100" y1="100" x2="250" y2="100" stroke="#9333EA" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="100" y1="100" x2="100" y2="250" stroke="#9333EA" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="900" y1="600" x2="1050" y2="600" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="1050" y1="500" x2="1050" y2="650" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* Angular geometric shapes */}
            <polygon points="500,50 520,80 500,110 480,80" stroke="#EC4899" strokeWidth="2" fill="none" />
            <rect x="800" y="450" width="60" height="60" stroke="#A855F7" strokeWidth="2" fill="none" transform="rotate(45 830 480)" />
            
            {/* Curved connecting lines */}
            <path d="M300 150 Q400 250 500 150" stroke="#9333EA" strokeWidth="1.5" fill="none" />
            <path d="M600 550 Q700 450 800 550" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Top Left - Subtle Geometric Shapes */}
        <div className="absolute top-32 left-8 opacity-15 z-0">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="8" stroke="#9333EA" strokeWidth="2" />
            <rect x="50" y="10" width="15" height="15" stroke="#9333EA" strokeWidth="2" />
            <path d="M40 50L45 40L50 50L40 50Z" stroke="#9333EA" strokeWidth="2" />
            <line x1="15" y1="60" x2="25" y2="60" stroke="#9333EA" strokeWidth="3" />
            <line x1="20" y1="55" x2="20" y2="65" stroke="#9333EA" strokeWidth="3" />
          </svg>
        </div>

        {/* Large Abstract Wave - Bottom Right - Enhanced Colors */}
        <div className="absolute bottom-0 right-0 w-2/3 h-96 pointer-events-none opacity-70 z-0">
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#A855F7', stopOpacity: 0.95 }} />
                <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="waveAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <path 
              d="M800 400 L800 250 Q700 150 600 200 Q500 250 400 180 Q300 110 200 220 Q100 330 0 280 L0 400 Z" 
              fill="url(#waveGradient)"
            />
            {/* Additional wave layer for depth */}
            <path 
              d="M800 400 L800 280 Q700 200 600 240 Q500 280 400 220 Q300 160 200 260 Q100 360 0 310 L0 400 Z" 
              fill="url(#waveAccent)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Main Headline */}
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Upcoming Tech Events & Workshops
            </h1>
            
            {/* Description Paragraph */}
            <p className="hero-subtitle text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              Expand your skills, build your network, and shape your future. Join industry-leading workshops, intensive hackathons, and professional conferences designed to accelerate your career in technology.
            </p>

            {/* CTA Button */}
            <div>
              <button className="px-8 py-3 bg-purple-600 text-white text-base font-semibold rounded-xl hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
  <section className="py-6 bg-gray-50 border-b border-gray-200 sticky top-[120px] z-40">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 font-semibold text-base rounded-lg transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
              }`}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 font-semibold text-base rounded-lg transition-all ${
                activeTab === 'past'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
              }`}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filter-button px-6 py-2.5 font-semibold text-sm uppercase tracking-wider rounded-lg transition-all ${
                  activeFilter === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {activeTab === 'upcoming' && (
        <section ref={upcomingRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                Register now for these exciting upcoming events and secure your spot!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filterEvents(upcomingEvents).map((event, index) => (
                <div key={event.id}>
                  <div
                    className="event-card bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                  >
                    {/* Event Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white text-gray-900 text-xs font-bold rounded-lg uppercase tracking-wider shadow-md">
                          {event.category}
                        </span>
                      </div>

                      {/* Registration Status */}
                      {event.registrationOpen && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 bg-white border-2 border-green-600 text-green-700 text-xs font-bold rounded-lg uppercase">
                            Open
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Event Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-black text-gray-900 mb-4">
                        {event.title}
                      </h3>

                      {/* Date & Time */}
                      <div className="space-y-2.5 mb-4">
                        <div className="flex items-center text-gray-800">
                          <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-bold">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-800">
                          <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm font-bold">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-800">
                          <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className="text-sm font-bold">{event.venue}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm leading-relaxed mb-4 font-medium">
                        {event.description}
                      </p>

                      {/* Participants */}
                      <div className="flex items-center mb-5 pb-4 border-b border-gray-200">
                        <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm font-bold text-gray-900">{event.participants} Expected</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg text-sm">
                          Register Now
                        </button>
                        <button 
                          onClick={() => navigate(`/events/${event.id}`)}
                          className="px-5 py-3.5 bg-gray-900 text-white font-bold rounded-lg text-sm flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      {activeTab === 'past' && (
        <section ref={pastRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Past Events
              </h2>
              <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                Take a look at our successfully conducted events and their amazing outcomes!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {filterEvents(pastEvents).map((event) => (
                <div
                  key={event.id}
                  className="event-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Gallery Badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-extrabold rounded-full flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.gallery} Photos
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-extrabold rounded-full uppercase">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-bold text-green-600 uppercase">Completed</span>
                    </div>

                    <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 text-xs font-semibold mb-3">{event.date}</p>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
                      {event.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs font-bold text-gray-700">
                          <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* View Gallery Button */}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2.5 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                      View Gallery
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Join the Next Event?
            </h2>
            <p className="text-xl text-white/90 font-medium mb-12 leading-relaxed">
              Don't miss out on opportunities to learn, network, and grow. Subscribe to our newsletter for event updates and exclusive early-bird registrations!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="px-10 py-4 bg-white text-gray-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
                Subscribe Now
              </button>
            </div>
            <p className="text-white/80 text-sm mt-6 font-medium">
              Join 5,000+ students already subscribed to our events newsletter
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
