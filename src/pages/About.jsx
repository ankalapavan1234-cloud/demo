import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const teamRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isMissionFlipped, setIsMissionFlipped] = useState(false);
  const [isVisionFlipped, setIsVisionFlipped] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      setActiveTab((prev) => (prev === 6 ? 0 : prev + 1));
    }

    if (touchStart - touchEnd < -50) {
      // Swiped right
      setActiveTab((prev) => (prev === 0 ? 6 : prev - 1));
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
        }
      );

      // Mission & Vision Animation
      gsap.fromTo(
        '.mission-card',
        { opacity: 0, x: -100 },
        {
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        '.vision-card',
        { opacity: 0, x: 100 },
        {
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      // Values Animation
      const valueCards = gsap.utils.toArray('.value-card');
      valueCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 70%',
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'back.out(1.7)',
          }
        );
      });

      // Stats Counter Animation
      const statNumbers = gsap.utils.toArray('.stat-number');
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target'));
        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
            },
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out',
            onUpdate: function () {
              stat.innerText = Math.ceil(stat.innerText) + '+';
            },
          }
        );
      });

      // Timeline Animation
      const timelineItems = gsap.utils.toArray('.timeline-item');
      timelineItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      });

      // Team Cards Animation
      const teamCards = gsap.utils.toArray('.team-card');
      teamCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            scrollTrigger: {
              trigger: teamRef.current,
              start: 'top 70%',
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'power3.out',
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-500" fill="currentColor" aria-hidden>
          <path d="M12 2c.6 0 1.2.2 1.7.6l3.6 3.6c.4.4.6 1 .6 1.7 0 .6-.2 1.2-.6 1.7L13 15l-1.4 4.3c-.1.3-.4.5-.7.5-.1 0-.2 0-.3-.1L6.6 19c-.8-.4-1.5-1.1-1.9-1.9L4.1 14c0-.1 0-.2-.1-.3 0-.4.2-.7.5-.8L9 11l5-4.9c.3-.3.6-.5 1-.6.1 0 .1-.1.2-.1z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Pushing boundaries and embracing cutting-edge technologies to solve real-world problems.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-pink-500" fill="currentColor" aria-hidden>
          <path d="M20 8.5c0-.8-.7-1.5-1.5-1.5-.4 0-.8.1-1.1.4L12 13.3 7.6 8.9C7.3 8.6 6.9 8.5 6.5 8.5 5.7 8.5 5 9.2 5 10c0 .3.1.6.3.9l4.6 4.6c.4.4 1 .4 1.4 0l8.7-8.7c.2-.2.3-.5.3-.8z" />
        </svg>
      ),
      title: 'Collaboration',
      description: 'Working together across disciplines to achieve extraordinary results.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500" fill="currentColor" aria-hidden>
          <path d="M12 2a8 8 0 100 16 8 8 0 000-16zm1 11h-2V7h2v6z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'Striving for the highest standards in every project and initiative we undertake.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-green-500" fill="currentColor" aria-hidden>
          <path d="M12 2C9.2 5 6 6 4 9c3 0 4 3 8 3s5-3 8-3c-2-3-5.2-4-8-7zM6 18c1.8-2 4.2-3 6-3s4.2 1 6 3v4H6v-4z" />
        </svg>
      ),
      title: 'Growth',
      description: 'Continuous learning and development for personal and professional advancement.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { 
      number: 500, 
      label: 'Active Members', 
      icon: <svg viewBox="0 0 64 64" className="w-14 h-14 mx-auto">
        <defs>
          <linearGradient id="peopleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="20" r="8" fill="url(#peopleGrad)" />
        <path d="M 22 28 Q 14 28 14 36 L 14 42 L 30 42 L 30 36 Q 30 28 22 28 Z" fill="url(#peopleGrad)" />
        <circle cx="42" cy="22" r="7" fill="#c084fc" opacity="0.8" />
        <path d="M 42 29 Q 35 29 35 36 L 35 42 L 49 42 L 49 36 Q 49 29 42 29 Z" fill="#c084fc" opacity="0.8" />
        <circle cx="32" cy="34" r="6" fill="#e0e7ff" opacity="0.6" />
        <path d="M 32 40 Q 26 40 26 46 L 26 50 L 38 50 L 38 46 Q 38 40 32 40 Z" fill="#e0e7ff" opacity="0.6" />
      </svg>
    },
    { 
      number: 150, 
      label: 'Projects Completed', 
      icon: <svg viewBox="0 0 64 64" className="w-14 h-14 mx-auto">
        <defs>
          <linearGradient id="targetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="28" fill="none" stroke="#fca5a5" strokeWidth="3" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="#fb923c" strokeWidth="3" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="#f87171" strokeWidth="3" />
        <circle cx="32" cy="32" r="6" fill="url(#targetGrad)" />
        <path d="M 32 4 L 36 28 L 32 32 L 28 28 Z" fill="#fbbf24" />
        <circle cx="32" cy="32" r="2" fill="#fef3c7" />
      </svg>
    },
    { 
      number: 50, 
      label: 'Events Organized', 
      icon: <svg viewBox="0 0 64 64" className="w-14 h-14 mx-auto">
        <defs>
          <linearGradient id="calGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect x="12" y="16" width="40" height="38" rx="4" fill="url(#calGrad)" />
        <rect x="12" y="16" width="40" height="10" rx="4" fill="#1e3a8a" />
        <rect x="18" y="10" width="4" height="10" rx="2" fill="#94a3b8" />
        <rect x="42" y="10" width="4" height="10" rx="2" fill="#94a3b8" />
        <circle cx="22" cy="34" r="2" fill="#fff" opacity="0.9" />
        <circle cx="32" cy="34" r="2" fill="#fff" opacity="0.9" />
        <circle cx="42" cy="34" r="2" fill="#fff" opacity="0.9" />
        <circle cx="22" cy="44" r="2" fill="#fff" opacity="0.9" />
        <circle cx="32" cy="44" r="2" fill="#fbbf24" />
        <circle cx="42" cy="44" r="2" fill="#fff" opacity="0.9" />
      </svg>
    },
    { 
      number: 25, 
      label: 'Industry Partners', 
      icon: <svg viewBox="0 0 64 64" className="w-14 h-14 mx-auto">
        <defs>
          <linearGradient id="handshakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path d="M 18 35 Q 15 32 18 28 L 22 24 L 28 30 L 24 34 Z" fill="url(#handshakeGrad)" />
        <circle cx="19" cy="30" r="3" fill="#fcd34d" />
        <path d="M 46 35 Q 49 32 46 28 L 42 24 L 36 30 L 40 34 Z" fill="url(#handshakeGrad)" />
        <circle cx="45" cy="30" r="3" fill="#fcd34d" />
        <path d="M 24 34 L 28 30 L 36 30 L 40 34 L 36 38 L 28 38 Z" fill="#d946ef" opacity="0.8" />
        <rect x="16" y="33" width="10" height="18" rx="2" fill="#c084fc" opacity="0.7" />
        <rect x="38" y="33" width="10" height="18" rx="2" fill="#c084fc" opacity="0.7" />
        <circle cx="32" cy="32" r="2" fill="#fbbf24" />
      </svg>
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Chapter Founded',
      description: 'Started with 20 passionate students and a vision to transform engineering education.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-pink-500" fill="currentColor" aria-hidden>
          <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
        </svg>
      ),
    },
    {
      year: '2021',
      title: 'First Hackathon',
      description: 'Organized our first 48-hour hackathon with 100+ participants from across the region.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-700" fill="currentColor" aria-hidden>
          <path d="M3 5h18v12H3zM5 7v8h14V7H5zM7 17h10v2H7z" />
        </svg>
      ),
    },
    {
      year: '2022',
      title: 'Industry Partnerships',
      description: 'Established collaborations with leading tech companies for mentorship and internships.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-500" fill="currentColor" aria-hidden>
          <path d="M20 8.5c0-.8-.7-1.5-1.5-1.5-.4 0-.8.1-1.1.4L12 13.3 7.6 8.9C7.3 8.6 6.9 8.5 6.5 8.5 5.7 8.5 5 9.2 5 10c0 .3.1.6.3.9l4.6 4.6c.4.4 1 .4 1.4 0l8.7-8.7c.2-.2.3-.5.3-.8z" />
        </svg>
      ),
    },
    {
      year: '2023',
      title: 'Innovation Lab',
      description: 'Launched our state-of-the-art innovation lab equipped with latest technologies.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="currentColor" aria-hidden>
          <path d="M6 20h12v2H6zM19 3a2 2 0 00-2 2v6a4 4 0 11-8 0V5a2 2 0 00-4 0v6a8 8 0 0016 0V5a2 2 0 00-2-2z" />
        </svg>
      ),
    },
    {
      year: '2024',
      title: 'National Recognition',
      description: 'Won Best Student Chapter Award at the National Engineering Conference.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-yellow-400" fill="currentColor" aria-hidden>
          <path d="M12 2l2.4 4.9L20 8.2l-4 3.9.9 5.1L12 15.8 7.1 17.9 8 12.8 4 9l5.6-1.3L12 2z" />
        </svg>
      ),
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding our reach with international collaborations and exchange programs.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-cyan-500" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.9V18h-2v-1.1a6 6 0 010-9.8V6h2v.1a6 6 0 010 10.8z" />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Faculty Advisor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
      bio: 'Professor of Computer Science with 15 years of experience in AI and Machine Learning.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Rajesh Kumar',
      role: 'Chapter President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
      bio: 'Final year CS student passionate about robotics and automation.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Priya Sharma',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
      bio: 'AI enthusiast leading innovation initiatives and tech workshops.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Arjun Patel',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
      bio: 'Full-stack developer with expertise in cloud computing and DevOps.',
      social: { linkedin: '#', twitter: '#' },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="hero-content space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold">
                  Transforming Engineering Education
                </span>
              </div>
              
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Introducing IUCEE
                </span>
                <br />
                <span className="text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 block">
                  A Vision for Transformative Engineering Education
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                  The <span className="font-bold text-blue-600">Indo Universal Collaboration for Engineering Education (IUCEE)</span> is a 
                  groundbreaking global initiative revolutionizing the landscape of engineering education in India.
                </p>
                
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Through cutting-edge <span className="font-semibold text-purple-600">mentorship programs</span>, 
                  innovative <span className="font-semibold text-blue-600">research initiatives</span>, and 
                  strategic <span className="font-semibold text-pink-600">global partnerships</span>, IUCEE empowers 
                  premier institutions like <span className="font-bold text-gray-800">VVIT</span> to nurture the next generation 
                  of world-class engineers and visionary leaders.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  We bridge the gap between <span className="font-semibold">academic excellence</span> and 
                  <span className="font-semibold"> industry demands</span>, preparing students to tackle real-world challenges 
                  with innovation, creativity, and technical prowess.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Partner Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Students Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                    Global
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Network Reach</div>
                </div>
              </div>
            </div>

            {/* Right Side - IUCEE Image with Animations */}
            <div className="hero-image relative lg:pl-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                {/* Animated Image with Zoom Effect */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=3840&h=2160&fit=crop&q=80"
                    alt="IUCEE - Engineering Education Excellence"
                    className="w-full h-full object-cover transition-transform duration-[3000ms] ease-in-out group-hover:scale-110 animate-slow-zoom"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10"></div>
                </div>
                
                {/* Floating IUCEE Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl transform hover:scale-110 transition-transform duration-300 border border-blue-100">
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      IUCEE
                    </div>
                    <div className="text-xs text-gray-600 mt-1 font-semibold">Engineering Excellence</div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500">Active Network</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Badges */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl transform hover:scale-105 transition-transform duration-300 border border-purple-100">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">500+</div>
                      <div className="text-xs text-gray-600 font-medium">Institutions</div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl transform hover:scale-105 transition-transform duration-300 border border-pink-100">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">25+</div>
                      <div className="text-xs text-gray-600 font-medium">Countries</div>
                    </div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="absolute top-1/2 -left-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl px-4 py-3 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <defs>
                          <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#f59e0b" />
                          </linearGradient>
                        </defs>
                        <path d="M 32 12 Q 28 12 28 16 L 28 24 Q 20 24 20 32 Q 20 36 24 38 Q 24 42 28 44 L 28 48 L 22 48 L 22 52 L 42 52 L 42 48 L 36 48 L 36 44 Q 40 42 40 38 Q 44 36 44 32 Q 44 24 36 24 L 36 16 Q 36 12 32 12 Z" fill="url(#trophyGrad)" />
                        <rect x="26" y="50" width="12" height="6" rx="2" fill="#92400e" />
                        <circle cx="32" cy="18" r="2" fill="#fef3c7" />
                      </svg>
                    </div>
                    <div className="text-xs font-bold mt-1">Award Winning</div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Floating Icons */}
              <div className="absolute top-20 -left-6 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                <div className="bg-white p-3 rounded-xl shadow-lg">
                  <svg viewBox="0 0 64 64" className="w-8 h-8">
                    <defs>
                      <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                    <path d="M 32 10 Q 24 10 20 18 Q 20 26 26 32 L 26 38 L 38 38 L 38 32 Q 44 26 44 18 Q 40 10 32 10 Z" fill="url(#bulbGrad)" />
                    <rect x="28" y="38" width="8" height="3" fill="#78350f" />
                    <rect x="28" y="41" width="8" height="3" rx="1" fill="#78350f" />
                    <path d="M 28 20 Q 32 24 36 20" stroke="#fff" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-32 -right-6 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
                <div className="bg-white p-3 rounded-xl shadow-lg">
                  <svg viewBox="0 0 64 64" className="w-8 h-8">
                    <defs>
                      <linearGradient id="floatRocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <path d="M 32 8 L 38 28 L 38 45 L 26 45 L 26 28 Z" fill="url(#floatRocketGrad)" />
                    <path d="M 32 8 L 38 18 L 26 18 Z" fill="#60a5fa" />
                    <circle cx="32" cy="26" r="4" fill="#dbeafe" opacity="0.8" />
                    <path d="M 26 35 L 20 45 L 26 45 Z" fill="#ef4444" />
                    <path d="M 38 35 L 44 45 L 38 45 Z" fill="#ef4444" />
                    <path d="M 28 45 L 26 52 L 28 48 L 30 54 L 32 48 L 34 54 L 36 48 L 38 52 L 38 45 Z" fill="#f97316" opacity="0.9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Flip Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Flip Card */}
            <div ref={missionRef} className="mission-card">
              <div className="flip-card h-[550px] cursor-pointer" onClick={() => setIsMissionFlipped(!isMissionFlipped)}>
                <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 ${isMissionFlipped ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                  {/* Front Side - Image with Brief Description */}
                  <div className="flip-card-front absolute w-full h-full rounded-3xl overflow-hidden shadow-2xl" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="relative w-full h-full">
                      {/* 4K Mission Image */}
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=3840&h=2160&fit=crop&q=80"
                        alt="Our Mission - Team Collaboration"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Content on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="text-6xl mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 text-yellow-400" fill="currentColor" aria-hidden>
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-2v4h2v-4zm0-8h-2v6h2V5z" />
                          </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-lg text-blue-100 leading-relaxed mb-4">
                          Fostering innovation and excellence through collaborative learning...
                        </p>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <span>Click to read more</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Full Description */}
                  <div className="flip-card-back absolute w-full h-full rounded-3xl bg-white p-8 shadow-2xl overflow-y-auto" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="flex flex-col h-full justify-center">
                      <div className="text-6xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-yellow-400" fill="currentColor" aria-hidden>
                          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-2v4h2v-4zm0-8h-2v6h2V5z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
                      <div className="space-y-3 text-base leading-relaxed text-gray-700 flex-1 overflow-y-auto">
                        <p>
                          To foster a <strong className="text-gray-900">vibrant community</strong> of engineering students and faculty dedicated to advancing technology, promoting innovation, and creating positive impact through collaborative learning and hands-on projects.
                        </p>
                        <p>
                          We empower students with <strong className="text-gray-900">practical skills</strong>, industry exposure, and mentorship opportunities that bridge the gap between academic knowledge and real-world applications.
                        </p>
                        <p>
                          Through our initiatives, we aim to cultivate <strong className="text-gray-900">future leaders</strong> who will drive technological advancement and contribute meaningfully to society.
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-gray-600 text-sm">
                        <span>Click to flip back</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Flip Card */}
            <div ref={visionRef} className="vision-card">
              <div className="flip-card h-[550px] cursor-pointer" onClick={() => setIsVisionFlipped(!isVisionFlipped)}>
                <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 ${isVisionFlipped ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                  {/* Front Side - Image with Brief Description */}
                  <div className="flip-card-front absolute w-full h-full rounded-3xl overflow-hidden shadow-2xl" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="relative w-full h-full">
                      {/* 4K Vision Image */}
                      <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=3840&h=2160&fit=crop&q=80"
                        alt="Our Vision - Future Technology"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Content on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="w-16 h-16 mb-4">
                          <svg viewBox="0 0 64 64" className="w-full h-full">
                            <defs>
                              <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#a78bfa" />
                                <stop offset="100%" stopColor="#ec4899" />
                              </linearGradient>
                            </defs>
                            <ellipse cx="32" cy="32" rx="28" ry="18" fill="none" stroke="url(#eyeGrad)" strokeWidth="3" />
                            <circle cx="32" cy="32" r="12" fill="url(#eyeGrad)" />
                            <circle cx="32" cy="32" r="7" fill="#1e293b" />
                            <circle cx="35" cy="29" r="3" fill="#fff" opacity="0.9" />
                          </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Our Vision</h2>
                        <p className="text-lg text-purple-100 leading-relaxed mb-4">
                          Leading globally in technical excellence and innovation...
                        </p>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <span>Click to read more</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Full Description */}
                  <div className="flip-card-back absolute w-full h-full rounded-3xl bg-white p-8 shadow-2xl overflow-y-auto" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="flex flex-col h-full justify-center">
                      <div className="w-12 h-12 mb-4">
                        <svg viewBox="0 0 64 64" className="w-full h-full">
                          <defs>
                            <linearGradient id="eyeBackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#a78bfa" />
                              <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                          </defs>
                          <ellipse cx="32" cy="32" rx="28" ry="18" fill="none" stroke="url(#eyeBackGrad)" strokeWidth="3" />
                          <circle cx="32" cy="32" r="12" fill="url(#eyeBackGrad)" />
                          <circle cx="32" cy="32" r="7" fill="#1e293b" />
                          <circle cx="35" cy="29" r="3" fill="#fff" opacity="0.9" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
                      <div className="space-y-3 text-base leading-relaxed text-gray-700 flex-1 overflow-y-auto">
                        <p>
                          To be the <strong className="text-gray-900">leading student chapter</strong> recognized globally for excellence in technical education, innovation, and developing future-ready engineers who drive technological advancement and societal progress.
                        </p>
                        <p>
                          We envision a world where our members become <strong className="text-gray-900">pioneering innovators</strong>, creating solutions that transform industries and improve lives across the globe.
                        </p>
                        <p>
                          Our goal is to establish a <strong className="text-gray-900">legacy of excellence</strong> that inspires generations of engineers to push boundaries and achieve the extraordinary.
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-gray-600 text-sm">
                        <span>Click to flip back</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Redesigned */}
      <section ref={valuesRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - 4K Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=3840&h=2160&fit=crop&q=80"
                  alt="VVISC Core Values - Team Collaboration"
                  className="w-full h-[500px] lg:h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-purple-900/40"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    VVISC
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Excellence in Action</div>
                </div>
              </div>
            </div>

            {/* Right Side - Core Values List */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="mb-8">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold animate-pulse">
                    ✨ What Drives Us Forward
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                  VVISC Core Values
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong className="text-gray-900">Building tomorrow's leaders</strong> through unwavering commitment to excellence, innovation, and collaboration.
                </p>
                <p className="text-base text-gray-600 italic">
                  💡 Hover over each value to discover how we transform potential into impact
                </p>
              </div>

              {/* Interactive Values List */}
              <div className="space-y-4">
                {/* Innovation */}
                <div className="group">
                  <div className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-1.5 h-16 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full group-hover:h-20 group-hover:w-2 transition-all duration-300 shadow-lg"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 animate-bounce" style={{ animationDuration: '2s' }}>
                          <svg viewBox="0 0 64 64" className="w-full h-full">
                            <defs>
                              <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                              </linearGradient>
                            </defs>
                            {/* Rocket body */}
                            <path d="M 32 8 L 38 28 L 38 45 L 26 45 L 26 28 Z" fill="url(#rocketGrad)" />
                            {/* Rocket nose */}
                            <path d="M 32 8 L 38 18 L 26 18 Z" fill="#60a5fa" />
                            {/* Window */}
                            <circle cx="32" cy="26" r="4" fill="#dbeafe" opacity="0.8" />
                            {/* Fins */}
                            <path d="M 26 35 L 20 45 L 26 45 Z" fill="#ef4444" />
                            <path d="M 38 35 L 44 45 L 38 45 Z" fill="#ef4444" />
                            {/* Flames */}
                            <path d="M 28 45 L 26 52 L 28 48 L 30 54 L 32 48 L 34 54 L 36 48 L 38 52 L 38 45 Z" fill="#f97316" opacity="0.9" />
                            <path d="M 30 48 L 32 56 L 34 48 Z" fill="#fbbf24" opacity="0.8" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          Innovation
                        </h3>
                        <span className="ml-auto text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                      <p className="text-sm text-blue-600 font-semibold mb-2">Breaking Barriers, Creating Futures</p>
                      <div className="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out">
                        <div className="mt-4 pl-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
                          <p className="text-gray-700 leading-relaxed font-medium mb-2">
                            <strong>Pushing boundaries</strong> and embracing cutting-edge technologies to solve real-world problems with creative solutions.
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            We foster a culture where <strong className="text-blue-700">bold ideas thrive</strong>, experimentation is encouraged, and failure is just another step toward breakthrough innovation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collaboration */}
                <div className="group">
                  <div className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-1.5 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full group-hover:h-20 group-hover:w-2 transition-all duration-300 shadow-lg"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 animate-pulse" style={{ animationDuration: '2s' }}>
                          <svg viewBox="0 0 64 64" className="w-full h-full">
                            <defs>
                              <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#ec4899" />
                              </linearGradient>
                            </defs>
                            {/* Left hand */}
                            <path d="M 18 35 Q 15 32 18 28 L 22 24 L 28 30 L 24 34 Z" fill="url(#handGrad)" />
                            <circle cx="19" cy="30" r="3" fill="#fcd34d" />
                            {/* Right hand */}
                            <path d="M 46 35 Q 49 32 46 28 L 42 24 L 36 30 L 40 34 Z" fill="url(#handGrad)" />
                            <circle cx="45" cy="30" r="3" fill="#fcd34d" />
                            {/* Handshake middle */}
                            <path d="M 24 34 L 28 30 L 36 30 L 40 34 L 36 38 L 28 38 Z" fill="#d946ef" opacity="0.8" />
                            {/* Arms */}
                            <rect x="16" y="33" width="10" height="18" rx="2" fill="#c084fc" opacity="0.7" />
                            <rect x="38" y="33" width="10" height="18" rx="2" fill="#c084fc" opacity="0.7" />
                            {/* Sparkles for unity */}
                            <circle cx="32" cy="32" r="2" fill="#fbbf24" />
                            <path d="M 12 22 L 14 24 L 12 26 L 10 24 Z" fill="#fbbf24" opacity="0.8" />
                            <path d="M 52 22 L 54 24 L 52 26 L 50 24 Z" fill="#fbbf24" opacity="0.8" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                          Collaboration
                        </h3>
                        <span className="ml-auto text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                      <p className="text-sm text-purple-600 font-semibold mb-2">Together We Achieve More</p>
                      <div className="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out">
                        <div className="mt-4 pl-6 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4">
                          <p className="text-gray-700 leading-relaxed font-medium mb-2">
                            <strong>Working together</strong> across disciplines to achieve extraordinary results and foster a culture of teamwork.
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Our strength lies in <strong className="text-purple-700">unity and diversity</strong> - bringing together different perspectives, skills, and experiences to create something greater than the sum of its parts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="group">
                  <div className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-1.5 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full group-hover:h-20 group-hover:w-2 transition-all duration-300 shadow-lg"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10" style={{ animation: 'bounce 2s infinite' }}>
                          <svg viewBox="0 0 64 64" className="w-full h-full">
                            <defs>
                              <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f97316" />
                                <stop offset="100%" stopColor="#ef4444" />
                              </linearGradient>
                            </defs>
                            {/* Bottom book */}
                            <rect x="18" y="42" width="28" height="8" rx="1" fill="#dc2626" />
                            <line x1="32" y1="42" x2="32" y2="50" stroke="#7f1d1d" strokeWidth="1" />
                            {/* Middle book */}
                            <rect x="16" y="32" width="32" height="8" rx="1" fill="#f97316" />
                            <line x1="32" y1="32" x2="32" y2="40" stroke="#9a3412" strokeWidth="1" />
                            {/* Top book (open) */}
                            <path d="M 20 22 L 20 32 L 32 28 L 44 32 L 44 22 L 32 18 Z" fill="url(#bookGrad)" />
                            <path d="M 32 18 L 32 28" stroke="#7c2d12" strokeWidth="1.5" />
                            {/* Pages */}
                            <path d="M 24 24 L 30 22.5 M 24 26 L 30 24.5 M 24 28 L 30 26.5" stroke="#fff" strokeWidth="0.8" opacity="0.6" />
                            <path d="M 40 24 L 34 22.5 M 40 26 L 34 24.5 M 40 28 L 34 26.5" stroke="#fff" strokeWidth="0.8" opacity="0.6" />
                            {/* Graduation cap on top */}
                            <path d="M 32 10 L 42 14 L 32 18 L 22 14 Z" fill="#1e293b" />
                            <path d="M 42 14 L 44 14 L 44 20 L 43 21" stroke="#1e293b" strokeWidth="1.5" fill="none" />
                            <circle cx="43" cy="21" r="1" fill="#fbbf24" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                          Education
                        </h3>
                        <span className="ml-auto text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                      <p className="text-sm text-orange-600 font-semibold mb-2">Knowledge is Power, Learning is Growth</p>
                      <div className="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out">
                        <div className="mt-4 pl-6 border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4">
                          <p className="text-gray-700 leading-relaxed font-medium mb-2">
                            <strong>Committed to continuous learning</strong>, knowledge sharing, and empowering students with practical skills for the future.
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            We believe education transforms lives. Through <strong className="text-orange-700">hands-on workshops, mentorship programs, and industry exposure</strong>, we prepare students to excel in the real world.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teamwork */}
                <div className="group">
                  <div className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-1.5 h-16 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full group-hover:h-20 group-hover:w-2 transition-all duration-300 shadow-lg"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 animate-pulse" style={{ animationDuration: '1.5s' }}>
                          <svg viewBox="0 0 64 64" className="w-full h-full">
                            <defs>
                              <linearGradient id="teamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#14b8a6" />
                              </linearGradient>
                              <radialGradient id="energyGlow">
                                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                              </radialGradient>
                            </defs>
                            {/* Energy glow */}
                            <circle cx="32" cy="32" r="20" fill="url(#energyGlow)" />
                            {/* Lightning bolt */}
                            <path d="M 32 12 L 26 32 L 34 32 L 28 52 L 42 28 L 32 28 Z" fill="url(#teamGrad)" stroke="#065f46" strokeWidth="1.5" />
                            {/* Inner highlights */}
                            <path d="M 30 18 L 28 28 L 32 28 Z" fill="#fbbf24" opacity="0.6" />
                            {/* Energy sparks */}
                            <circle cx="22" cy="24" r="2" fill="#fbbf24" opacity="0.8" />
                            <circle cx="42" cy="24" r="2" fill="#fbbf24" opacity="0.8" />
                            <circle cx="38" cy="40" r="2" fill="#fbbf24" opacity="0.8" />
                            <circle cx="26" cy="40" r="2" fill="#fbbf24" opacity="0.8" />
                            {/* Small stars */}
                            <path d="M 18 16 L 19 18 L 18 20 L 16 18 Z" fill="#34d399" opacity="0.9" />
                            <path d="M 46 16 L 47 18 L 46 20 L 44 18 Z" fill="#34d399" opacity="0.9" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                          Teamwork
                        </h3>
                        <span className="ml-auto text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                      <p className="text-sm text-green-600 font-semibold mb-2">Empowering Teams, Achieving Dreams</p>
                      <div className="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out">
                        <div className="mt-4 pl-6 border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4">
                          <p className="text-gray-700 leading-relaxed font-medium mb-2">
                            <strong>Building strong relationships</strong> and leveraging diverse talents to accomplish shared goals and drive success.
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Success is a team sport. We cultivate an environment where <strong className="text-green-700">every voice matters, every contribution counts</strong>, and collective achievement outshines individual glory.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-10 pt-6 border-t-2 border-gray-200">
                <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <defs>
                        <linearGradient id="goalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f87171" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                      <circle cx="32" cy="32" r="28" fill="none" stroke="#fca5a5" strokeWidth="3" />
                      <circle cx="32" cy="32" r="20" fill="none" stroke="#fb923c" strokeWidth="3" />
                      <circle cx="32" cy="32" r="12" fill="none" stroke="#f87171" strokeWidth="3" />
                      <circle cx="32" cy="32" r="6" fill="url(#goalGrad)" />
                      <path d="M 32 4 L 36 28 L 32 32 L 28 28 Z" fill="#fbbf24" />
                      <circle cx="32" cy="32" r="2" fill="#fef3c7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">
                      Ready to Experience Excellence?
                    </p>
                    <p className="text-xs text-gray-600">
                      These values aren't just words - they're our commitment to transforming education and empowering every student to achieve greatness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Making a difference one project at a time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-gray-200"
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 mb-4">
                  <div
                    className="stat-number text-5xl font-bold text-white mb-0 font-mono tracking-tight"
                    data-target={stat.number}
                  >
                    0+
                  </div>
                </div>
                <p className="text-lg text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Tab Layout */}
      <section ref={timelineRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 border border-blue-600 text-blue-600 rounded text-xs font-semibold uppercase tracking-wider">
                Our Evolution
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Milestones of Excellence
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              A chronicle of transformative achievements that have shaped our organization into a leading center for engineering education and innovation
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="max-w-6xl mx-auto">
            <div className="flex border-b border-gray-300 overflow-x-auto">
              {timeline.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-[150px] px-6 py-4 text-center font-bold transition-all duration-200 border-b-2 whitespace-nowrap
                    ${activeTab === index 
                      ? index === 0 ? 'border-blue-600 text-blue-700' :
                        index === 1 ? 'border-purple-600 text-purple-700' :
                        index === 2 ? 'border-pink-600 text-pink-700' :
                        index === 3 ? 'border-orange-600 text-orange-700' :
                        index === 4 ? 'border-green-600 text-green-700' :
                        'border-cyan-600 text-cyan-700'
                      : 'border-transparent text-gray-600 hover:text-gray-900 font-semibold'
                    }`}
                >
                  <div className="text-base font-extrabold mb-1">{item.year}</div>
                  <div className="text-xs uppercase tracking-wide font-bold">
                    {index === 0 ? 'Foundation' :
                     index === 1 ? 'Growth' :
                     index === 2 ? 'Expansion' :
                     index === 3 ? 'Innovation' :
                     index === 4 ? 'Achievement' :
                     'Global'}
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`${activeTab === index ? 'block' : 'hidden'}`}
                >
                  <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                    {/* Title */}
                    <h3 className={`text-4xl md:text-5xl font-black mb-6
                      ${index === 0 ? 'text-blue-700' :
                        index === 1 ? 'text-purple-700' :
                        index === 2 ? 'text-pink-700' :
                        index === 3 ? 'text-orange-700' :
                        index === 4 ? 'text-green-700' :
                        'text-cyan-700'}`}>
                      {item.title}
                    </h3>

                    {/* Phase Label */}
                    <div className="mb-6">
                      <span className={`text-sm font-extrabold uppercase tracking-wider
                        ${index === 0 ? 'text-blue-700' :
                          index === 1 ? 'text-purple-700' :
                          index === 2 ? 'text-pink-700' :
                          index === 3 ? 'text-orange-700' :
                          index === 4 ? 'text-green-700' :
                          'text-cyan-700'}`}>
                        {index === 0 ? 'Foundation Phase' :
                         index === 1 ? 'Growth Phase' :
                         index === 2 ? 'Expansion Phase' :
                         index === 3 ? 'Innovation Phase' :
                         index === 4 ? 'Achievement Phase' :
                         'Global Phase'}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-900 text-lg leading-relaxed mb-8 font-medium">
                      {index === 0 && "The VVIT Student Chapter was established with a mission to foster innovation and excellence in engineering education. Our founding members, comprising visionary students and faculty, laid the groundwork for what would become a thriving hub of academic and professional development."}
                      {index === 1 && "Marking a significant milestone in student engagement, we successfully organized our inaugural 48-hour hackathon. This intensive event attracted over 100 participants from institutions across the region, establishing our reputation as a catalyst for innovation and collaborative problem-solving."}
                      {index === 2 && "Strategic partnerships were forged with leading technology companies and industry leaders, creating valuable pathways for mentorship, internships, and real-world project experience. These collaborations have been instrumental in bridging the gap between academic learning and industry requirements."}
                      {index === 3 && "The launch of our state-of-the-art innovation laboratory marked a new era in hands-on learning. Equipped with cutting-edge technology and tools, the lab provides students with access to resources that enable them to transform theoretical knowledge into practical innovation."}
                      {index === 4 && "Our commitment to excellence was recognized at the National Engineering Conference, where we received the prestigious Best Student Chapter Award. This accolade acknowledges our comprehensive approach to student development and our impact on engineering education."}
                      {index === 5 && "Building on our strong foundation, we are expanding our reach through international collaborations and exchange programs. These global partnerships provide our members with exposure to diverse perspectives and cutting-edge practices from around the world."}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {index === 0 && (
                        <>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-blue-300">
                            <div className="text-5xl font-black text-blue-700 mb-2">20+</div>
                            <div className="text-sm text-gray-900 font-bold">Founding Members</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-blue-300">
                            <div className="text-5xl font-black text-blue-700 mb-2">3</div>
                            <div className="text-sm text-gray-900 font-bold">Initial Programs</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-blue-300">
                            <div className="text-5xl font-black text-blue-700 mb-2">100%</div>
                            <div className="text-sm text-gray-900 font-bold">Student Driven</div>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-purple-300">
                            <div className="text-5xl font-black text-purple-700 mb-2">100+</div>
                            <div className="text-sm text-gray-900 font-bold">Participants</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-purple-300">
                            <div className="text-5xl font-black text-purple-700 mb-2">48</div>
                            <div className="text-sm text-gray-900 font-bold">Hours Duration</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-purple-300">
                            <div className="text-5xl font-black text-purple-700 mb-2">15</div>
                            <div className="text-sm text-gray-900 font-bold">Winning Projects</div>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-pink-300">
                            <div className="text-5xl font-black text-pink-700 mb-2">10+</div>
                            <div className="text-sm text-gray-900 font-bold">Industry Partners</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-pink-300">
                            <div className="text-5xl font-black text-pink-700 mb-2">50+</div>
                            <div className="text-sm text-gray-900 font-bold">Internship Opportunities</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-pink-300">
                            <div className="text-5xl font-black text-pink-700 mb-2">25+</div>
                            <div className="text-sm text-gray-900 font-bold">Mentorship Sessions</div>
                          </div>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-orange-300">
                            <div className="text-5xl font-black text-orange-700 mb-2">5000+</div>
                            <div className="text-sm text-gray-900 font-bold">Sq. Ft. Lab Space</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-orange-300">
                            <div className="text-5xl font-black text-orange-700 mb-2">30+</div>
                            <div className="text-sm text-gray-900 font-bold">Equipment Units</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-orange-300">
                            <div className="text-5xl font-black text-orange-700 mb-2">200+</div>
                            <div className="text-sm text-gray-900 font-bold">Student Beneficiaries</div>
                          </div>
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-green-300">
                            <div className="text-5xl font-black text-green-700 mb-2">1st</div>
                            <div className="text-sm text-gray-900 font-bold">National Rank</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-green-300">
                            <div className="text-5xl font-black text-green-700 mb-2">500+</div>
                            <div className="text-sm text-gray-900 font-bold">Active Members</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-green-300">
                            <div className="text-5xl font-black text-green-700 mb-2">20+</div>
                            <div className="text-sm text-gray-900 font-bold">Awards Received</div>
                          </div>
                        </>
                      )}
                      {index === 5 && (
                        <>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-cyan-300">
                            <div className="text-5xl font-black text-cyan-700 mb-2">5</div>
                            <div className="text-sm text-gray-900 font-bold">Countries</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-cyan-300">
                            <div className="text-5xl font-black text-cyan-700 mb-2">12</div>
                            <div className="text-sm text-gray-900 font-bold">International Partners</div>
                          </div>
                          <div className="text-center p-6 bg-white rounded-lg border-2 border-cyan-300">
                            <div className="text-5xl font-black text-cyan-700 mb-2">30+</div>
                            <div className="text-sm text-gray-900 font-bold">Exchange Programs</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gray-50 border border-gray-300 rounded-lg px-12 py-8 max-w-4xl">
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Continuing Our Legacy of Excellence
              </h3>
              <p className="text-gray-900 leading-relaxed text-lg font-medium">
                From our establishment in 2020 with 20 dedicated founding members to our current status as a nationally recognized center of excellence, our journey exemplifies the power of collaborative learning and innovation. As we look to the future, we remain committed to pushing the boundaries of engineering education and creating opportunities for the next generation of leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Community - 7 Councils */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Community
            </h2>
          </div>

          {/* Councils Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Projects Council */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Projects Council</h3>
              <p className="text-sm text-gray-600 text-center">Where ideas turn into impact.</p>
            </div>

            {/* Events Council */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Events Council</h3>
              <p className="text-sm text-gray-600 text-center">Connecting minds through action.</p>
            </div>

            {/* Technical Council */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Technical Council</h3>
              <p className="text-sm text-gray-600 text-center">Building tomorrow's tech today.</p>
            </div>

            {/* Social Media Council */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-pink-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Social Media Council</h3>
              <p className="text-sm text-gray-600 text-center">Amplifying our voice to the world.</p>
            </div>

            {/* Promotion Council */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 text-cyan-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Promotion Council</h3>
              <p className="text-sm text-gray-600 text-center">Spreading innovation across boundaries.</p>
            </div>

            {/* Crafting Council */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Crafting Council</h3>
              <p className="text-sm text-gray-600 text-center">Turning creativity into reality.</p>
            </div>

            {/* Designing Council */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-teal-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 text-teal-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Designing Council</h3>
              <p className="text-sm text-gray-600 text-center">Visualizing ideas that inspire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be part of a community that's shaping the future of technology. Join our chapter
              and start your journey of innovation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Become a Member
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
