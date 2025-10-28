import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const layerBg = useRef(null);
  const layerMid = useRef(null);
  const layerFront = useRef(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Smart Campus Navigation System',
      category: 'IoT',
      description: 'IoT-based indoor navigation system using BLE beacons for seamless campus navigation.',
      longDescription: 'An innovative IoT solution that helps students and visitors navigate the campus using Bluetooth Low Energy (BLE) beacons. The system provides real-time location tracking, shortest path calculation, and accessibility features for differently-abled users.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=3840&h=2160&fit=crop&q=80',
      technologies: ['React Native', 'Node.js', 'BLE Beacons', 'MongoDB'],
      teamSize: 5,
      duration: '4 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        'Winner - National IoT Hackathon 2024',
        'Reduced navigation time by 60%',
        'Implemented in 3 educational institutions'
      ]
    },
    {
      id: 2,
      title: 'AI-Powered Exam Proctoring',
      category: 'AI/ML',
      description: 'Machine learning system for automated exam proctoring with facial recognition and behavior analysis.',
      longDescription: 'Advanced AI system that monitors students during online exams using computer vision and machine learning. Detects suspicious behavior, multiple faces, and unusual activities while maintaining student privacy.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
      teamSize: 4,
      duration: '6 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '95% accuracy in behavior detection',
        'Published research paper in IEEE',
        'Adopted by 5 universities'
      ]
    },
    {
      id: 3,
      title: 'Student Collaboration Platform',
      category: 'Web Development',
      description: 'Full-stack web platform for students to collaborate on projects, share resources, and network.',
      longDescription: 'Comprehensive collaboration platform that enables students to form teams, manage projects, share academic resources, and connect with peers across different departments and universities.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=3840&h=2160&fit=crop&q=80',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
      teamSize: 6,
      duration: '5 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '2000+ active users',
        'Best Web App Award 2024',
        'Featured in tech magazine'
      ]
    },
    {
      id: 4,
      title: 'Blockchain Certificate Verification',
      category: 'Blockchain',
      description: 'Decentralized system for issuing and verifying academic certificates using blockchain technology.',
      longDescription: 'Revolutionary blockchain-based solution for issuing tamper-proof digital certificates. Employers and institutions can instantly verify credentials without contacting the issuing organization.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'IPFS'],
      teamSize: 4,
      duration: '5 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        'Winner - Blockchain Hackathon',
        'Zero certificate fraud',
        'Partnership with 3 colleges'
      ]
    },
    {
      id: 5,
      title: 'Mental Health Chatbot',
      category: 'AI/ML',
      description: 'AI chatbot providing mental health support and resources for students facing stress and anxiety.',
      longDescription: 'Empathetic AI chatbot trained on psychological counseling data to provide immediate support to students. Features mood tracking, stress management techniques, and emergency contact routing.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'NLP', 'DialogFlow', 'Flutter', 'Firebase'],
      teamSize: 3,
      duration: '4 months',
      status: 'In Progress',
      github: '#',
      demo: '#',
      achievements: [
        '500+ students helped',
        'Social Impact Award',
        'Collaboration with counseling center'
      ]
    },
    {
      id: 6,
      title: 'Campus Event Management App',
      category: 'Mobile Apps',
      description: 'Mobile application for discovering, managing, and attending campus events with QR-based check-ins.',
      longDescription: 'All-in-one mobile solution for campus event management. Students can discover events, register, receive notifications, and check-in using QR codes. Organizers get real-time attendance analytics.',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=3840&h=2160&fit=crop&q=80',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      teamSize: 4,
      duration: '3 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '5000+ downloads',
        'Used in 50+ events',
        'Best Mobile App Award'
      ]
    },
    {
      id: 7,
      title: 'Library Resource Predictor',
      category: 'Data Science',
      description: 'Predictive analytics system to forecast library resource demand and optimize book procurement.',
      longDescription: 'Data science project that analyzes historical borrowing patterns, course schedules, and trending topics to predict which books and resources will be in high demand, helping libraries optimize their inventory.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Tableau', 'SQL'],
      teamSize: 3,
      duration: '3 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '85% prediction accuracy',
        'Reduced resource wastage by 40%',
        'Published in data science journal'
      ]
    },
    {
      id: 8,
      title: 'Smart Attendance System',
      category: 'IoT',
      description: 'Automated attendance tracking using facial recognition and geo-fencing technology.',
      longDescription: 'Smart attendance system combining facial recognition with geo-fencing to automatically mark attendance when students enter the classroom. Reduces time wastage and prevents proxy attendance.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'MySQL', 'Flask'],
      teamSize: 4,
      duration: '4 months',
      status: 'In Progress',
      github: '#',
      demo: '#',
      achievements: [
        'Pilot program in 10 classrooms',
        '99% accuracy rate',
        'Innovation Award Winner'
      ]
    },
    {
      id: 9,
      title: 'E-Learning Content Recommender',
      category: 'AI/ML',
      description: 'Machine learning system that recommends personalized learning content based on student performance.',
      longDescription: 'Intelligent recommendation engine that analyzes student learning patterns, quiz performance, and interests to suggest personalized study materials, videos, and practice problems for better outcomes.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'TensorFlow', 'Django', 'React', 'PostgreSQL'],
      teamSize: 5,
      duration: '5 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '30% improvement in test scores',
        'Used by 1000+ students',
        'EdTech Innovation Prize'
      ]
    }
  ];

  const activeProject = projects[activeProjectIndex];

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Hero scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    });

    // Parallax layers with different speeds
    tl.to(layerBg.current, { y: 150, opacity: 0.3 }, 0)
      .to(layerMid.current, { y: 100, opacity: 0.5 }, 0)
      .to(layerFront.current, { y: 50 }, 0)
      .to('.hero-content', { y: -80, opacity: 0.8 }, 0);

    // Initial entrance animations
    gsap.fromTo('.hero-title',
      { opacity: 0, y: 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
    );

    gsap.fromTo('.hero-subtitle',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo('.glass-panel',
      { opacity: 0, y: 80, rotateX: -30 },
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 1.2, 
        stagger: 0.15, 
        delay: 0.5,
        ease: 'power3.out' 
      }
    );

    gsap.fromTo('.icon-float',
      { opacity: 0, scale: 0, rotation: -180 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0,
        duration: 1.5, 
        stagger: 0.1, 
        delay: 0.8,
        ease: 'elastic.out(1, 0.5)' 
      }
    );

  }, []);

  useEffect(() => {
    // Animate project display when switching
    gsap.fromTo('.project-display',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, [activeProjectIndex]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - 3D Immersive Experience */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 pt-40 pb-20"
        style={{ perspective: '1000px' }}
      >
        {/* Background Layer - Slowest parallax */}
        <div 
          ref={layerBg}
          className="absolute inset-0 z-0"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        >
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Middle Layer - Floating Glass Panels */}
        <div 
          ref={layerMid}
          className="absolute inset-0 z-10"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
          }}
        >
          {/* Glassmorphism panels */}
          <div className="glass-panel absolute top-32 left-16 w-64 h-64 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
            style={{
              transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
            }}
          ></div>
          
          <div className="glass-panel absolute top-48 right-24 w-80 h-48 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
            style={{
              transform: `rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`
            }}
          ></div>
          
          <div className="glass-panel absolute bottom-32 left-1/4 w-56 h-56 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
            style={{
              transform: `rotateY(${mousePosition.x * 0.4}deg) rotateX(${-mousePosition.y * 0.4}deg)`
            }}
          ></div>

          <div className="glass-panel absolute top-1/2 right-1/3 w-72 h-72 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
            style={{
              transform: `rotateY(${mousePosition.x * 0.6}deg) rotateX(${-mousePosition.y * 0.6}deg)`
            }}
          ></div>
        </div>

        {/* Foreground Layer - 3D Icons */}
        <div 
          ref={layerFront}
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        >
          {/* AI Brain Icon */}
          <div className="icon-float absolute top-24 left-32">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform"
              style={{
                transform: `rotateY(${mousePosition.x * 0.8}deg) rotateX(${-mousePosition.y * 0.8}deg)`,
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.5)'
              }}
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
          </div>

          {/* Circuit Icon */}
          <div className="icon-float absolute top-40 right-40">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform"
              style={{
                transform: `rotateY(${mousePosition.x * 0.7}deg) rotateX(${-mousePosition.y * 0.7}deg)`,
                boxShadow: '0 20px 60px rgba(168, 85, 247, 0.5)'
              }}
            >
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Gear Icon */}
          <div className="icon-float absolute bottom-40 right-32">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform"
              style={{
                transform: `rotateY(${mousePosition.x * 0.9}deg) rotateX(${-mousePosition.y * 0.9}deg)`,
                boxShadow: '0 20px 60px rgba(16, 185, 129, 0.5)'
              }}
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Code Icon */}
          <div className="icon-float absolute bottom-32 left-40">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform"
              style={{
                transform: `rotateY(${mousePosition.x * 0.6}deg) rotateX(${-mousePosition.y * 0.6}deg)`,
                boxShadow: '0 20px 60px rgba(249, 115, 22, 0.5)'
              }}
            >
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Cube Icon */}
          <div className="icon-float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform"
              style={{
                transform: `rotateY(${mousePosition.x * 1}deg) rotateX(${-mousePosition.y * 1}deg)`,
                boxShadow: '0 20px 60px rgba(251, 191, 36, 0.5)'
              }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-content relative z-30 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center max-w-5xl">
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight"
              style={{
                textShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 80px rgba(255,255,255,0.1)'
              }}
            >
              A Journey Through Innovation
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold mb-6 leading-relaxed"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              Dive into our projects — each one a step forward in engineering excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="glass-panel px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl">
                <div className="text-4xl font-black text-white">50+</div>
                <div className="text-sm text-white/90 font-bold uppercase tracking-wider">Projects</div>
              </div>
              <div className="glass-panel px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl">
                <div className="text-4xl font-black text-white">200+</div>
                <div className="text-sm text-white/90 font-bold uppercase tracking-wider">Students</div>
              </div>
              <div className="glass-panel px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl">
                <div className="text-4xl font-black text-white">15+</div>
                <div className="text-sm text-white/90 font-bold uppercase tracking-wider">Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Projects Tab Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Project Tabs */}
            <div className="mb-8">
              <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProjectIndex(index)}
                    className={`px-6 py-3 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${
                      activeProjectIndex === index
                        ? 'bg-green-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-600'
                    }`}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Display */}
            <div className="project-display bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Image */}
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Badges on Image */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white text-gray-900 text-xs font-bold rounded-lg uppercase tracking-wider shadow-lg">
                      {activeProject.category}
                    </span>
                    <span className={`px-3 py-1.5 text-xs font-bold rounded-lg uppercase shadow-lg ${
                      activeProject.status === 'Completed' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {activeProject.status}
                    </span>
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="p-6 md:p-8 flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                    {activeProject.title}
                  </h2>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {activeProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-600 uppercase mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-green-100 text-green-800 text-xs font-bold rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-xs font-bold text-gray-600 uppercase mb-1">Team Size</p>
                      <p className="text-xl font-black text-gray-900">{activeProject.teamSize} Members</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-600 uppercase mb-1">Duration</p>
                      <p className="text-xl font-black text-gray-900">{activeProject.duration}</p>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => navigate(`/projects/${activeProject.id}`)}
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      View Full Details
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Our Achievements & Recognition
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Celebrating milestones, awards, and the impact our projects have made in the community
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Achievement 1 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop&q=80" 
                    alt="National Hackathon Winner"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-2">National IoT Hackathon</h3>
                    <p className="text-yellow-400 font-bold text-sm">First Place Winner 2024</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Our Smart Campus Navigation System won first place at the National IoT Hackathon, competing against 150+ teams from across the country.
                  </p>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80" 
                    alt="Research Publication"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-2">IEEE Research Paper</h3>
                    <p className="text-blue-400 font-bold text-sm">Published in IEEE Conference</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Published groundbreaking research on AI-powered exam proctoring with 95% accuracy, featured in IEEE International Conference on Machine Learning.
                  </p>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80" 
                    alt="Best Web App Award"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-2">Best Web Application</h3>
                    <p className="text-purple-400 font-bold text-sm">State Level Competition 2024</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Student Collaboration Platform recognized as the best web application with 2000+ active users and innovative features for academic networking.
                  </p>
                </div>
              </div>

              {/* Achievement 4 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559223607-a43c990e498c?w=800&h=600&fit=crop&q=80" 
                    alt="Blockchain Innovation"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-2">Blockchain Hackathon</h3>
                    <p className="text-green-400 font-bold text-sm">Winner - Innovation Track</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Certificate Verification System secured first place for innovative use of blockchain technology, now partnered with 3 educational institutions.
                  </p>
                </div>
              </div>

              {/* Achievement 5 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80" 
                    alt="Social Impact Award"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-pink-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-2">Social Impact Award</h3>
                    <p className="text-pink-400 font-bold text-sm">Mental Health Initiative 2024</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Mental Health Chatbot recognized for its positive impact, helping over 500+ students with stress management and emotional support.
                  </p>
                </div>
              </div>

              {/* Achievement 6 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&q=80" 
                    alt="Mobile App Excellence"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-2">Best Mobile App</h3>
                    <p className="text-red-400 font-bold text-sm">Campus Innovation Awards</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Campus Event Management App awarded for exceptional UX design and functionality, with 5000+ downloads and usage in 50+ campus events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Have a Project Idea?</h2>
          <p className="text-xl text-white/90 font-medium mb-8 max-w-3xl mx-auto">
            Join our innovation community and bring your ideas to life. Get mentorship, resources, and support to build amazing projects.
          </p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-black text-lg hover:bg-gray-100 transition-colors">
            Submit Your Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
