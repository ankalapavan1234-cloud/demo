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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Upcoming Tech Events & Workshops
            </h1>
            
            {/* Subheading */}
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-white font-bold mb-8 leading-relaxed">
              Expand Your Skills. Build Your Network. Shape Your Future.
            </p>
            
            {/* Impressive Description */}
            <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed max-w-4xl mx-auto mb-6">
              Join industry-leading workshops, intensive hackathons, and professional conferences designed to transform theoretical knowledge into practical expertise. Connect with innovators, learn from experts, and accelerate your career in technology.
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">1000+</div>
                <div className="text-sm md:text-base text-white/90 font-bold uppercase tracking-wider">Annual Participants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">50+</div>
                <div className="text-sm md:text-base text-white/90 font-bold uppercase tracking-wider">Events Per Year</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">100%</div>
                <div className="text-sm md:text-base text-white/90 font-bold uppercase tracking-wider">Industry Expert Led</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b-2 border-gray-300 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 font-bold text-base rounded-lg border-2 ${
                activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 font-bold text-base rounded-lg border-2 ${
                activeTab === 'past'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filter-button px-6 py-2.5 font-bold text-sm uppercase tracking-wider rounded-lg border-2 ${
                  activeFilter === category
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
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
