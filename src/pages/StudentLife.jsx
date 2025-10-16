import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StudentLife = () => {
  const heroRef = useRef(null);
  const tunnelRef = useRef(null);
  const orbsRef = useRef([]);
  const timelineRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredOrb, setHoveredOrb] = useState(null);

  // Time capsule orbs representing different years and moments
  const timeOrbs = [
    {
      id: 1,
      year: '2021',
      title: 'The Beginning',
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop&q=80',
      count: '50+ Events',
      color: 'from-cyan-400 to-blue-500',
      position: { x: -30, y: -20, z: 200 }
    },
    {
      id: 2,
      year: '2022',
      title: 'Innovation Surge',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop&q=80',
      count: '100+ Projects',
      color: 'from-purple-400 to-pink-500',
      position: { x: 40, y: 15, z: 350 }
    },
    {
      id: 3,
      year: '2023',
      title: 'Cultural Fusion',
      thumbnail: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&h=400&fit=crop&q=80',
      count: '200+ Participants',
      color: 'from-emerald-400 to-teal-500',
      position: { x: -50, y: -30, z: 500 }
    },
    {
      id: 4,
      year: '2024',
      title: 'Tech Revolution',
      thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop&q=80',
      count: '300+ Achievements',
      color: 'from-orange-400 to-red-500',
      position: { x: 60, y: 25, z: 650 }
    },
    {
      id: 5,
      year: '2025',
      title: 'Future Forward',
      thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop&q=80',
      count: '500+ Memories',
      color: 'from-yellow-400 to-amber-500',
      position: { x: -20, y: -10, z: 800 }
    },
    {
      id: 6,
      year: '2023',
      title: 'Sports Glory',
      thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop&q=80',
      count: '25+ Trophies',
      color: 'from-rose-400 to-pink-600',
      position: { x: 35, y: -35, z: 450 }
    },
    {
      id: 7,
      year: '2024',
      title: 'Hackathon Heroes',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&q=80',
      count: '40+ Hacks',
      color: 'from-indigo-400 to-purple-600',
      position: { x: -45, y: 20, z: 700 }
    },
    {
      id: 8,
      year: '2022',
      title: 'Workshop Wonders',
      thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop&q=80',
      count: '80+ Sessions',
      color: 'from-lime-400 to-green-500',
      position: { x: 25, y: -15, z: 300 }
    }
  ];

  // Gallery categories
  const categories = [
    'all',
    'Events',
    'Workshops',
    'Sports',
    'Cultural',
    'Hackathons',
    'Campus Life'
  ];

  // Gallery images with different heights for masonry effect
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop&q=80',
      category: 'Events',
      title: 'TechFest 2024',
      description: 'Annual technical festival with 500+ participants',
      height: 'tall'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop&q=80',
      category: 'Workshops',
      title: 'AI Workshop',
      description: 'Hands-on machine learning session',
      height: 'medium'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=1000&fit=crop&q=80',
      category: 'Sports',
      title: 'Inter-College Sports',
      description: 'Annual sports championship',
      height: 'tall'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=600&fit=crop&q=80',
      category: 'Cultural',
      title: 'Cultural Night',
      description: 'Celebrating diversity and talent',
      height: 'medium'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1200&fit=crop&q=80',
      category: 'Hackathons',
      title: 'Code Marathon',
      description: '48-hour coding challenge',
      height: 'tall'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
      category: 'Campus Life',
      title: 'Study Sessions',
      description: 'Collaborative learning spaces',
      height: 'medium'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=800&fit=crop&q=80',
      category: 'Events',
      title: 'Tech Talks',
      description: 'Industry expert sessions',
      height: 'medium'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=1000&fit=crop&q=80',
      category: 'Workshops',
      title: 'Web Development Bootcamp',
      description: 'Full-stack development training',
      height: 'tall'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&q=80',
      category: 'Sports',
      title: 'Basketball Tournament',
      description: 'Annual inter-department championship',
      height: 'medium'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=1200&fit=crop&q=80',
      category: 'Cultural',
      title: 'Music Festival',
      description: 'Live performances and band competitions',
      height: 'tall'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&q=80',
      category: 'Campus Life',
      title: 'Campus Tour',
      description: 'Welcoming new students',
      height: 'medium'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop&q=80',
      category: 'Hackathons',
      title: 'Innovation Challenge',
      description: 'Building solutions for real problems',
      height: 'tall'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=800&fit=crop&q=80',
      category: 'Events',
      title: 'Project Exhibition',
      description: 'Showcasing student innovations',
      height: 'medium'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&h=600&fit=crop&q=80',
      category: 'Workshops',
      title: 'Design Thinking',
      description: 'Creative problem-solving workshop',
      height: 'medium'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=1200&fit=crop&q=80',
      category: 'Campus Life',
      title: 'Library Hours',
      description: 'Late night study sessions',
      height: 'tall'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80',
      category: 'Cultural',
      title: 'Dance Competition',
      description: 'Annual dance face-off',
      height: 'medium'
    },
    {
      id: 17,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop&q=80',
      category: 'Events',
      title: 'Team Building',
      description: 'Leadership and collaboration activities',
      height: 'tall'
    },
    {
      id: 18,
      src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=800&fit=crop&q=80',
      category: 'Campus Life',
      title: 'Cafeteria Vibes',
      description: 'Friends, food, and fun',
      height: 'medium'
    },
    {
      id: 19,
      src: 'https://images.unsplash.com/photo-1559223607-a43c990c7c5c?w=800&h=1200&fit=crop&q=80',
      category: 'Hackathons',
      title: 'AI Hackathon',
      description: 'Building intelligent solutions',
      height: 'tall'
    },
    {
      id: 20,
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80',
      category: 'Sports',
      title: 'Cricket Match',
      description: 'Inter-college cricket tournament',
      height: 'medium'
    },
    {
      id: 21,
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=1000&fit=crop&q=80',
      category: 'Workshops',
      title: 'Cybersecurity Training',
      description: 'Ethical hacking workshop',
      height: 'tall'
    },
    {
      id: 22,
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80',
      category: 'Events',
      title: 'Startup Summit',
      description: 'Entrepreneurship talks and pitching',
      height: 'medium'
    },
    {
      id: 23,
      src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=1200&fit=crop&q=80',
      category: 'Cultural',
      title: 'Drama Performance',
      description: 'Theatre club annual show',
      height: 'tall'
    },
    {
      id: 24,
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=800&fit=crop&q=80',
      category: 'Campus Life',
      title: 'Morning Yoga',
      description: 'Wellness and fitness activities',
      height: 'medium'
    },
    {
      id: 25,
      src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop&q=80',
      category: 'Hackathons',
      title: 'Game Development Jam',
      description: '24-hour game creation challenge',
      height: 'medium'
    },
    {
      id: 26,
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=1000&fit=crop&q=80',
      category: 'Sports',
      title: 'Football Championship',
      description: 'Annual football league finals',
      height: 'tall'
    },
    {
      id: 27,
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&q=80',
      category: 'Workshops',
      title: 'Mobile App Development',
      description: 'React Native workshop series',
      height: 'medium'
    },
    {
      id: 28,
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1200&fit=crop&q=80',
      category: 'Events',
      title: 'Alumni Meetup',
      description: 'Networking with successful alumni',
      height: 'tall'
    },
    {
      id: 29,
      src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=800&fit=crop&q=80',
      category: 'Cultural',
      title: 'Art Exhibition',
      description: 'Student artwork showcase',
      height: 'medium'
    },
    {
      id: 30,
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&q=80',
      category: 'Campus Life',
      title: 'Graduation Day',
      description: 'Celebrating achievements together',
      height: 'medium'
    },
    {
      id: 31,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=1000&fit=crop&q=80',
      category: 'Hackathons',
      title: 'Blockchain Hackathon',
      description: 'Decentralized app development',
      height: 'tall'
    },
    {
      id: 32,
      src: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=800&h=600&fit=crop&q=80',
      category: 'Sports',
      title: 'Table Tennis Tournament',
      description: 'Indoor sports championship',
      height: 'medium'
    },
    {
      id: 33,
      src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=1200&fit=crop&q=80',
      category: 'Workshops',
      title: 'Cloud Computing Workshop',
      description: 'AWS and Azure training',
      height: 'tall'
    },
    {
      id: 34,
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=800&fit=crop&q=80',
      category: 'Events',
      title: 'Freshers Welcome',
      description: 'Orientation and icebreakers',
      height: 'medium'
    },
    {
      id: 35,
      src: 'https://images.unsplash.com/photo-1558403194-611308249627?w=800&h=600&fit=crop&q=80',
      category: 'Cultural',
      title: 'Fashion Show',
      description: 'Annual style and design event',
      height: 'medium'
    }
  ];

  // Filter images by category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Space-time tunnel entrance animation
    gsap.fromTo('.hero-title',
      { opacity: 0, z: -200, scale: 0.5 },
      { opacity: 1, z: 0, scale: 1, duration: 1.5, ease: 'power3.out' }
    );

    gsap.fromTo('.hero-subtitle',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    // Animate timeline appearance
    gsap.fromTo('.timeline-marker',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.5, stagger: 0.1, ease: 'power2.out' }
    );

    // Floating orbs entrance with stagger
    timeOrbs.forEach((orb, index) => {
      gsap.fromTo(`.orb-${orb.id}`,
        { 
          opacity: 0, 
          scale: 0,
          rotationY: -180,
        },
        { 
          opacity: 1, 
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          delay: 0.6 + index * 0.15,
          ease: 'elastic.out(1, 0.5)'
        }
      );
    });

    // Continuous floating animation for orbs
    orbsRef.current.forEach((orb, index) => {
      if (orb) {
        gsap.to(orb, {
          y: `+=${Math.random() * 20 - 10}`,
          x: `+=${Math.random() * 15 - 7.5}`,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2
        });

        // Subtle rotation
        gsap.to(orb, {
          rotationY: 360,
          duration: 20 + Math.random() * 10,
          repeat: -1,
          ease: 'none'
        });
      }
    });

    // Parallax scroll effect - tunnel movement
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Move tunnel backwards as user scrolls
        if (tunnelRef.current) {
          gsap.to(tunnelRef.current, {
            z: -500 * progress,
            opacity: 1 - progress * 0.5,
            duration: 0.3
          });
        }

        // Move orbs with different speeds for depth
        orbsRef.current.forEach((orb, index) => {
          if (orb) {
            const speed = 1 + (index * 0.3);
            gsap.to(orb, {
              z: -300 * progress * speed,
              opacity: 1 - progress * 0.8,
              scale: 1 - progress * 0.5,
              duration: 0.3
            });
          }
        });

        // Move timeline
        if (timelineRef.current) {
          gsap.to(timelineRef.current, {
            y: 100 * progress,
            opacity: 1 - progress,
            duration: 0.3
          });
        }
      }
    });

    // Gallery items animation
    gsap.fromTo('.gallery-item',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.masonry-grid',
          start: 'top 80%',
        }
      }
    );
  }, [activeCategory]);

  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Get height class for masonry effect
  const getHeightClass = (height) => {
    switch(height) {
      case 'tall':
        return 'row-span-2';
      case 'medium':
        return 'row-span-1';
      default:
        return 'row-span-1';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Time Capsule Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen pt-48 md:pt-56 pb-20 overflow-hidden bg-gradient-to-b from-indigo-950 via-indigo-900 to-purple-900"
        style={{ perspective: '1000px' }}
      >
        {/* Space-time tunnel background */}
        <div 
          ref={tunnelRef}
          className="absolute inset-0"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Animated grid tunnel */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/30 rounded-full"
                style={{
                  width: `${100 + i * 80}px`,
                  height: `${100 + i * 80}px`,
                  animation: `tunnel-pulse ${3 + i * 0.2}s linear infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>

          {/* Motion blur streaks */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${50 + Math.random() * 150}px`,
                  opacity: Math.random() * 0.5,
                  animation: `streak ${2 + Math.random() * 3}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Nebula clouds */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Starfield */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8,
                  animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Layer */}
        <div className="container mx-auto px-4 relative z-20" style={{ transformStyle: 'preserve-3d' }}>
          {/* Main Title */}
          <div className="text-center mb-20">
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 leading-tight">
              A Timeline of Innovation
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-cyan-100 font-bold leading-relaxed max-w-4xl mx-auto mb-8">
              Travel through the years of projects that shaped our legacy of creativity and impact
            </p>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-3 mt-12 animate-bounce">
              <div className="text-cyan-300 text-sm font-bold uppercase tracking-wider">Scroll to Travel Through Time</div>
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Floating Time Orbs */}
          <div className="relative min-h-[600px]" style={{ transformStyle: 'preserve-3d' }}>
            {timeOrbs.map((orb, index) => (
              <div
                key={orb.id}
                ref={(el) => (orbsRef.current[index] = el)}
                className={`orb-${orb.id} absolute cursor-pointer group`}
                style={{
                  left: `calc(50% + ${orb.position.x}%)`,
                  top: `calc(50% + ${orb.position.y}%)`,
                  transform: `translateZ(${orb.position.z}px) translate(-50%, -50%)`,
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={() => setHoveredOrb(orb.id)}
                onMouseLeave={() => setHoveredOrb(null)}
              >
                {/* Orb glow halo */}
                <div className={`absolute inset-0 -m-4 bg-gradient-to-r ${orb.color} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Orb container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-125 transition-all duration-500">
                  {/* Outer ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${orb.color} p-1 animate-spin-slow`}>
                    {/* Glass orb */}
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-xl border border-white/30 overflow-hidden shadow-2xl">
                      {/* Thumbnail */}
                      <img 
                        src={orb.thumbnail} 
                        alt={orb.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      />
                      
                      {/* Inner gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${orb.color} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      
                      {/* Year badge */}
                      <div className="absolute top-2 left-2">
                        <div className={`px-3 py-1 bg-gradient-to-r ${orb.color} text-white text-xs font-black rounded-lg shadow-lg`}>
                          {orb.year}
                        </div>
                      </div>

                      {/* Hover info panel */}
                      {hoveredOrb === orb.id && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col justify-end p-4 animate-fadeIn">
                          <h3 className="text-white text-lg font-black mb-1">{orb.title}</h3>
                          <p className="text-cyan-300 text-sm font-bold">{orb.count}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Particle effects */}
                  <div className="absolute inset-0 -m-8">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${orb.color} rounded-full`}
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `particle-float ${3 + Math.random() * 2}s ease-in-out infinite`,
                          animationDelay: `${Math.random() * 2}s`,
                          opacity: 0.6
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline Marker */}
        <div 
          ref={timelineRef}
          className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-30"
        >
          <div className="flex flex-col gap-8">
            {['2021', '2022', '2023', '2024', '2025'].map((year, index) => (
              <div 
                key={year}
                className="timeline-marker flex items-center gap-4"
              >
                <div className="text-right">
                  <div className="text-cyan-300 text-2xl font-black">{year}</div>
                  <div className="text-cyan-500 text-xs font-bold uppercase tracking-wider">Chapter {index + 1}</div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/50"></div>
                  {index < 4 && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes tunnel-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @keyframes streak {
          0% {
            transform: translateX(-100%) translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(200vw) translateY(-50px);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.8;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      {/* Masonry Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Masonry Grid */}
          <div className="masonry-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`gallery-item ${getHeightClass(image.height)} group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-bold rounded-lg uppercase">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-white text-lg font-black mb-1">{image.title}</h3>
                    <p className="text-white/90 text-sm font-medium">{image.description}</p>
                  </div>
                  
                  {/* View icon */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 p-2 rounded-full">
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Images Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">No Photos Found</h3>
              <p className="text-gray-600 font-medium">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
            onClick={closeLightbox}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-xl">
              <div className="mb-3">
                <span className="px-4 py-2 bg-white text-gray-900 text-sm font-bold rounded-lg uppercase">
                  {selectedImage.category}
                </span>
              </div>
              <h2 className="text-white text-3xl font-black mb-2">{selectedImage.title}</h2>
              <p className="text-white/90 text-lg font-medium">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Share Your Moments</h2>
          <p className="text-xl text-white/90 font-medium max-w-3xl mx-auto">
            Have amazing photos from campus events? Share them with the community and be featured in our gallery!
          </p>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
