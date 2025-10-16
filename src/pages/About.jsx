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
      icon: '🚀',
      title: 'Innovation',
      description: 'Pushing boundaries and embracing cutting-edge technologies to solve real-world problems.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working together across disciplines to achieve extraordinary results.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '💡',
      title: 'Excellence',
      description: 'Striving for the highest standards in every project and initiative we undertake.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'Continuous learning and development for personal and professional advancement.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { number: 500, label: 'Active Members', icon: '👥' },
    { number: 150, label: 'Projects Completed', icon: '🎯' },
    { number: 50, label: 'Events Organized', icon: '📅' },
    { number: 25, label: 'Industry Partners', icon: '🤝' },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Chapter Founded',
      description: 'Started with 20 passionate students and a vision to transform engineering education.',
      icon: '🎉',
    },
    {
      year: '2021',
      title: 'First Hackathon',
      description: 'Organized our first 48-hour hackathon with 100+ participants from across the region.',
      icon: '💻',
    },
    {
      year: '2022',
      title: 'Industry Partnerships',
      description: 'Established collaborations with leading tech companies for mentorship and internships.',
      icon: '🤝',
    },
    {
      year: '2023',
      title: 'Innovation Lab',
      description: 'Launched our state-of-the-art innovation lab equipped with latest technologies.',
      icon: '🔬',
    },
    {
      year: '2024',
      title: 'National Recognition',
      description: 'Won Best Student Chapter Award at the National Engineering Conference.',
      icon: '🏆',
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding our reach with international collaborations and exchange programs.',
      icon: '🌍',
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
                  🌟 Transforming Engineering Education
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
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Explore Programs</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Join the Network
                </a>
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
                    <div className="text-2xl">🏆</div>
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
                  <span className="text-2xl">💡</span>
                </div>
              </div>
              <div className="absolute bottom-32 -right-6 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
                <div className="bg-white p-3 rounded-xl shadow-lg">
                  <span className="text-2xl">🚀</span>
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
              <div className="flip-card h-[500px] cursor-pointer">
                <div className="flip-card-inner relative w-full h-full transition-transform duration-700 preserve-3d">
                  {/* Front Side - Image with Brief Description */}
                  <div className="flip-card-front absolute w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative w-full h-full">
                      {/* 4K Mission Image */}
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=3840&h=2160&fit=crop&q=80"
                        alt="Our Mission - Team Collaboration"
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/70 to-transparent"></div>
                      
                      {/* Content on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="text-6xl mb-4">🎯</div>
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
                  <div className="flip-card-back absolute w-full h-full backface-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-8 text-white shadow-2xl rotate-y-180">
                    <div className="flex flex-col h-full justify-center">
                      <div className="text-6xl mb-6">🎯</div>
                      <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                      <div className="space-y-4 text-lg leading-relaxed text-blue-50">
                        <p>
                          To foster a <strong className="text-white">vibrant community</strong> of engineering students and faculty dedicated to advancing technology, promoting innovation, and creating positive impact through collaborative learning and hands-on projects.
                        </p>
                        <p>
                          We empower students with <strong className="text-white">practical skills</strong>, industry exposure, and mentorship opportunities that bridge the gap between academic knowledge and real-world applications.
                        </p>
                        <p>
                          Through our initiatives, we aim to cultivate <strong className="text-white">future leaders</strong> who will drive technological advancement and contribute meaningfully to society.
                        </p>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-white/80 text-sm">
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
              <div className="flip-card h-[500px] cursor-pointer">
                <div className="flip-card-inner relative w-full h-full transition-transform duration-700 preserve-3d">
                  {/* Front Side - Image with Brief Description */}
                  <div className="flip-card-front absolute w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative w-full h-full">
                      {/* 4K Vision Image */}
                      <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=3840&h=2160&fit=crop&q=80"
                        alt="Our Vision - Future Technology"
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-800/70 to-transparent"></div>
                      
                      {/* Content on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="text-6xl mb-4">👁️</div>
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
                  <div className="flip-card-back absolute w-full h-full backface-hidden rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-white shadow-2xl rotate-y-180">
                    <div className="flex flex-col h-full justify-center">
                      <div className="text-6xl mb-6">👁️</div>
                      <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                      <div className="space-y-4 text-lg leading-relaxed text-purple-50">
                        <p>
                          To be the <strong className="text-white">leading student chapter</strong> recognized globally for excellence in technical education, innovation, and developing future-ready engineers who drive technological advancement and societal progress.
                        </p>
                        <p>
                          We envision a world where our members become <strong className="text-white">pioneering innovators</strong>, creating solutions that transform industries and improve lives across the globe.
                        </p>
                        <p>
                          Our goal is to establish a <strong className="text-white">legacy of excellence</strong> that inspires generations of engineers to push boundaries and achieve the extraordinary.
                        </p>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-white/80 text-sm">
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
                        <span className="text-4xl animate-bounce" style={{ animationDuration: '2s' }}>🚀</span>
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
                            🌟 <strong>Pushing boundaries</strong> and embracing cutting-edge technologies to solve real-world problems with creative solutions.
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
                        <span className="text-4xl animate-pulse" style={{ animationDuration: '2s' }}>🤝</span>
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
                            💪 <strong>Working together</strong> across disciplines to achieve extraordinary results and foster a culture of teamwork.
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
                        <span className="text-4xl" style={{ animation: 'bounce 2s infinite' }}>📚</span>
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
                            🎓 <strong>Committed to continuous learning</strong>, knowledge sharing, and empowering students with practical skills for the future.
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
                        <span className="text-4xl animate-pulse" style={{ animationDuration: '1.5s' }}>⚡</span>
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
                            🌟 <strong>Building strong relationships</strong> and leveraging diverse talents to accomplish shared goals and drive success.
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
                  <div className="text-3xl">🎯</div>
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
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Making a difference one project at a time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div
                  className="stat-number text-5xl font-bold text-white mb-2"
                  data-target={stat.number}
                >
                  0+
                </div>
                <p className="text-lg text-blue-100">{stat.label}</p>
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

      {/* Leadership Section - Chairmen */}
      <section ref={teamRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold">
                👥 Leadership
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Visionary Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guiding excellence and innovation with dedication and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* VVIT Chairman */}
            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&q=80"
                    alt="VVIT Chairman"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-gray-800">VVIT</span>
                    </div>
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="mb-3">
                      <span className="inline-block px-4 py-2 bg-blue-500/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                        Chairman
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Dr. [Name]</h3>
                    <p className="text-blue-100 text-sm">Vasireddy Venkatadri Institute of Technology</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🎓</div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          <strong className="text-blue-700">Visionary Leader</strong> with extensive experience in engineering education and institutional excellence.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🌟</div>
                      <div>
                        <p className="text-gray-600 text-sm">
                          Driving innovation and academic excellence at VVIT, fostering world-class engineering talent.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">Leadership Excellence</span>
                      <div className="flex gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-yellow-500">⭐</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IUCEE Chairman */}
            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&q=80"
                    alt="IUCEE Chairman"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-gray-800">IUCEE</span>
                    </div>
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="mb-3">
                      <span className="inline-block px-4 py-2 bg-purple-500/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                        Chairman
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Dr. [Name]</h3>
                    <p className="text-purple-100 text-sm">Indo-Universal Collaboration for Engineering Education</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-gradient-to-br from-purple-50 to-white">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🌍</div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          <strong className="text-purple-700">Global Pioneer</strong> in engineering education transformation and international collaboration.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🚀</div>
                      <div>
                        <p className="text-gray-600 text-sm">
                          Leading IUCEE's mission to revolutionize engineering education across 500+ institutions globally.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">Global Impact</span>
                      <div className="flex gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-yellow-500">⭐</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl px-8 py-6 max-w-2xl">
              <p className="text-gray-700 leading-relaxed">
                <span className="text-2xl mr-2">🤝</span>
                <strong className="text-gray-900">United in Vision:</strong> Our leaders bring decades of combined experience in shaping the future of engineering education and empowering the next generation of innovators.
              </p>
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
