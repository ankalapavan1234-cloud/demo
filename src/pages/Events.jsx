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
      // Hero Animation - Editorial style
      gsap.fromTo('.hero-title',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        }
      );

      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.3,
          ease: 'power3.out',
        }
      );

      gsap.fromTo('.hero-cta',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.5,
          ease: 'power3.out',
        }
      );

      // Grid line-art fade in
      gsap.fromTo('.line-art-grid',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          delay: 0.2,
          ease: 'power2.out',
        }
      );

      // Event Cards Animation
      gsap.fromTo('.event-card',
        { opacity: 0, y: 60 },
        {
          scrollTrigger: {
            trigger: upcomingRef.current,
            start: 'top 75%',
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
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
      {/* Hero Section - Minimal Text-Centered Design with Animated Background */}
      <section ref={heroRef} className="relative pt-52 pb-32 overflow-hidden bg-white">
        
        {/* Animated SVG Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Animated diagonal lines pattern */}
              <pattern id="diagonalLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="40" y2="40" stroke="#1f2937" strokeWidth="0.5">
                  <animate attributeName="x1" values="0;40;0" dur="20s" repeatCount="indefinite"/>
                  <animate attributeName="y1" values="0;40;0" dur="20s" repeatCount="indefinite"/>
                </line>
              </pattern>
              
              {/* Animated dots pattern */}
              <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="#1f2937">
                  <animate attributeName="r" values="1.5;2.5;1.5" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
                </circle>
              </pattern>
              
              {/* Animated circles pattern */}
              <pattern id="circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="20" stroke="#1f2937" strokeWidth="0.5" fill="none">
                  <animate attributeName="r" values="20;25;20" dur="6s" repeatCount="indefinite"/>
                </circle>
              </pattern>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#diagonalLines)"/>
            <rect width="100%" height="100%" fill="url(#dots)" opacity="0.6"/>
            <rect width="100%" height="100%" fill="url(#circles)" opacity="0.4"/>
          </svg>
        </div>

        {/* SVG Illustration - Collaboration (Left Side) */}
        <div className="absolute top-32 left-12 w-80 h-80 opacity-[0.25]">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Three people in discussion circle */}
            <circle cx="60" cy="80" r="15" stroke="#1f2937" strokeWidth="2" fill="none"/>
            <circle cx="100" cy="60" r="15" stroke="#1f2937" strokeWidth="2" fill="none"/>
            <circle cx="140" cy="80" r="15" stroke="#1f2937" strokeWidth="2" fill="none"/>
            
            {/* Bodies */}
            <path d="M60 95 L60 120 M50 105 L70 105" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/>
            <path d="M100 75 L100 100 M90 85 L110 85" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/>
            <path d="M140 95 L140 120 M130 105 L150 105" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/>
            
            {/* Connection lines between people */}
            <path d="M75 85 L85 70" stroke="#1f2937" strokeWidth="1.5" strokeDasharray="3,3">
              <animate attributeName="stroke-dashoffset" values="0;6;0" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M115 70 L125 85" stroke="#1f2937" strokeWidth="1.5" strokeDasharray="3,3">
              <animate attributeName="stroke-dashoffset" values="0;6;0" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Idea bulb in center */}
            <circle cx="100" cy="100" r="12" stroke="#1f2937" strokeWidth="2" fill="none">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
            </circle>
            <path d="M100 88 L100 82 M94 94 L94 88 M106 94 L106 88" stroke="#1f2937" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
            </path>
            
            {/* Speech bubbles */}
            <ellipse cx="45" cy="65" rx="10" ry="8" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
            <ellipse cx="155" cy="65" rx="10" ry="8" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
            
            {/* Surrounding connection circle */}
            <circle cx="100" cy="90" r="55" stroke="#1f2937" strokeWidth="0.5" fill="none" strokeDasharray="4,4">
              <animateTransform attributeName="transform" type="rotate" from="0 100 90" to="360 100 90" dur="30s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* SVG Illustration - Idea/Innovation (Right Side) */}
        <div className="absolute top-40 right-16 w-72 h-72 opacity-[0.25]">
          <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Large lightbulb */}
            <circle cx="90" cy="75" r="25" stroke="#1f2937" strokeWidth="2" fill="none">
              <animate attributeName="r" values="25;27;25" dur="4s" repeatCount="indefinite"/>
            </circle>
            <path d="M90 50 L90 40 M75 60 L68 53 M105 60 L112 53 M65 75 L55 75 M115 75 L125 75" 
                  stroke="#1f2937" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
            </path>
            
            {/* Base of bulb */}
            <rect x="82" y="100" width="16" height="8" stroke="#1f2937" strokeWidth="2" fill="none"/>
            <rect x="84" y="108" width="12" height="4" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
            
            {/* Network nodes around idea */}
            <circle cx="50" cy="50" r="6" fill="#1f2937">
              <animate attributeName="cy" values="50;45;50" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="130" cy="50" r="6" fill="#1f2937">
              <animate attributeName="cy" values="50;45;50" dur="3s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="100" r="6" fill="#1f2937">
              <animate attributeName="cy" values="100;95;100" dur="3s" begin="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="130" cy="100" r="6" fill="#1f2937">
              <animate attributeName="cy" values="100;95;100" dur="3s" begin="1.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Connecting lines to nodes */}
            <line x1="65" y1="67" x2="50" y2="50" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2"/>
            <line x1="115" y1="67" x2="130" y2="50" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2"/>
            <line x1="65" y1="83" x2="50" y2="100" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2"/>
            <line x1="115" y1="83" x2="130" y2="100" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2"/>
            
            {/* Glow effect circle */}
            <circle cx="90" cy="75" r="35" stroke="#1f2937" strokeWidth="0.5" fill="none" opacity="0.3">
              <animate attributeName="r" values="35;40;35" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.1;0.3" dur="5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* SVG Illustration - Team Connection (Bottom) */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-40 opacity-[0.20]">
          <svg viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Five connected people representing team */}
            <g>
              {/* Person 1 */}
              <circle cx="30" cy="40" r="12" stroke="#1f2937" strokeWidth="1.8" fill="none"/>
              <path d="M30 52 L30 70 M20 60 L40 60" stroke="#1f2937" strokeWidth="1.8" strokeLinecap="round"/>
              
              {/* Person 2 */}
              <circle cx="80" cy="30" r="12" stroke="#1f2937" strokeWidth="1.8" fill="none"/>
              <path d="M80 42 L80 60 M70 50 L90 50" stroke="#1f2937" strokeWidth="1.8" strokeLinecap="round"/>
              
              {/* Person 3 - Center */}
              <circle cx="150" cy="25" r="14" stroke="#1f2937" strokeWidth="2" fill="none"/>
              <path d="M150 39 L150 60 M138 48 L162 48" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Person 4 */}
              <circle cx="220" cy="30" r="12" stroke="#1f2937" strokeWidth="1.8" fill="none"/>
              <path d="M220 42 L220 60 M210 50 L230 50" stroke="#1f2937" strokeWidth="1.8" strokeLinecap="round"/>
              
              {/* Person 5 */}
              <circle cx="270" cy="40" r="12" stroke="#1f2937" strokeWidth="1.8" fill="none"/>
              <path d="M270 52 L270 70 M260 60 L280 60" stroke="#1f2937" strokeWidth="1.8" strokeLinecap="round"/>
            </g>
            
            {/* Connection arch lines */}
            <path d="M42 45 Q60 20 68 35" stroke="#1f2937" strokeWidth="0.8" fill="none" strokeDasharray="3,2">
              <animate attributeName="stroke-dashoffset" values="0;5;0" dur="4s" repeatCount="indefinite"/>
            </path>
            <path d="M92 35 Q120 15 138 30" stroke="#1f2937" strokeWidth="0.8" fill="none" strokeDasharray="3,2">
              <animate attributeName="stroke-dashoffset" values="0;5;0" dur="4s" begin="0.5s" repeatCount="indefinite"/>
            </path>
            <path d="M162 30 Q180 15 208 35" stroke="#1f2937" strokeWidth="0.8" fill="none" strokeDasharray="3,2">
              <animate attributeName="stroke-dashoffset" values="0;5;0" dur="4s" begin="1s" repeatCount="indefinite"/>
            </path>
            <path d="M232 35 Q240 20 258 45" stroke="#1f2937" strokeWidth="0.8" fill="none" strokeDasharray="3,2">
              <animate attributeName="stroke-dashoffset" values="0;5;0" dur="4s" begin="1.5s" repeatCount="indefinite"/>
            </path>
            
            {/* Bottom connection line */}
            <path d="M30 70 L80 60 L150 60 L220 60 L270 70" stroke="#1f2937" strokeWidth="1" fill="none" strokeDasharray="5,3">
              <animate attributeName="stroke-dashoffset" values="0;8;0" dur="6s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>

        {/* Floating Animated Geometric Accent */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-24 h-24 opacity-[0.20]">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
            <circle cx="50" cy="50" r="40" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
            <circle cx="50" cy="50" r="25" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
            <line x1="50" y1="10" x2="50" y2="90" stroke="#1f2937" strokeWidth="1.5"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke="#1f2937" strokeWidth="1.5"/>
          </svg>
        </div>
        
        {/* Content Container - Center-Aligned */}
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Main Headline with Extending Lines */}
            <div className="relative mb-12">
              {/* Thin horizontal lines extending from both sides */}
              <div className="line-art-grid absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                {/* Left line with geometric elements */}
                <svg className="w-[35%] h-1" viewBox="0 0 400 4" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <line x1="0" y1="2" x2="320" y2="2" stroke="#1f2937" strokeWidth="1"/>
                  <circle cx="340" cy="2" r="3" fill="#1f2937"/>
                  <line x1="350" y1="2" x2="380" y2="2" stroke="#1f2937" strokeWidth="1.5"/>
                  <rect x="385" y="0" width="4" height="4" fill="#1f2937"/>
                </svg>
                
                {/* Right line with geometric elements */}
                <svg className="w-[35%] h-1" viewBox="0 0 400 4" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <rect x="11" y="0" width="4" height="4" fill="#1f2937"/>
                  <line x1="20" y1="2" x2="50" y2="2" stroke="#1f2937" strokeWidth="1.5"/>
                  <circle cx="60" cy="2" r="3" fill="#1f2937"/>
                  <line x1="80" y1="2" x2="400" y2="2" stroke="#1f2937" strokeWidth="1"/>
                </svg>
              </div>
              
              {/* Large uppercase headline */}
              <h1 className="hero-title relative inline-block px-8 bg-white text-[48px] md:text-[64px] lg:text-[80px] font-black text-gray-900 uppercase tracking-wide leading-[1.1]" style={{ letterSpacing: '0.05em' }}>
                Where Minds<br/>Meet Moments
              </h1>
            </div>
            
            {/* Subtitle - Minimal serif font */}
            <p className="hero-subtitle text-[16px] md:text-[18px] text-gray-700 leading-relaxed mb-16 max-w-2xl mx-auto font-medium" style={{ fontFamily: "'Georgia', serif" }}>
              Discover transformative experiences through curated workshops, immersive hackathons,<br className="hidden md:block"/>and thought-leading conferences designed to elevate your journey in technology.
            </p>

            {/* Abstract geometric accent below */}
            <div className="hero-cta flex justify-center items-center gap-3 mb-8">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="2" fill="#1f2937"/>
              </svg>
              <div className="h-[1px] w-16 bg-gray-900"></div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="4" height="4" fill="#1f2937"/>
              </svg>
              <div className="h-[1px] w-16 bg-gray-900"></div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="2" fill="#1f2937"/>
              </svg>
            </div>

            {/* Minimal CTA */}
            <div>
              <a href="#upcoming" className="inline-block text-[13px] font-semibold text-gray-900 uppercase tracking-widest border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors" style={{ letterSpacing: '0.15em' }}>
                Explore Events
              </a>
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
              Be part of something extraordinary. Connect with innovators, learn from experts, and transform your future through our curated events.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/join-us')}
                className="px-12 py-4 bg-white text-gray-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl cursor-pointer"
              >
                Join Us
              </button>
            </div>
            <p className="text-white/80 text-sm mt-6 font-medium">
              Join thousands of students shaping the future of technology
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
