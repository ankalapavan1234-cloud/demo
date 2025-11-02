import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StudentLife = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const riverRef = useRef(null);
  const riverTitleRef = useRef(null);
  const [selectedMemory, setSelectedMemory] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
        }
      );

      // River title animation
      gsap.fromTo(
        riverTitleRef.current,
        { opacity: 0, scale: 0.8 },
        {
          scrollTrigger: {
            trigger: riverTitleRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
        }
      );

      // Memory River floating animation
      if (riverRef.current) {
        const memories = gsap.utils.toArray('.memory-photo');
        memories.forEach((photo, i) => {
          // Continuous floating animation along curved path
          gsap.to(photo, {
            y: `${Math.sin(i) * 20}`,
            duration: 3 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.4,
          });

          // Slight rotation
          gsap.to(photo, {
            rotation: i % 2 === 0 ? 3 : -3,
            duration: 4 + i * 0.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.3,
          });
        });

        // Light reflections animation
        gsap.to('.light-reflection', {
          x: '120vw',
          duration: 12,
          repeat: -1,
          ease: 'none',
          stagger: {
            each: 4,
            repeat: -1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const memories = [
    {
      id: 1,
      title: 'TechFest 2025',
      caption: '48-Hour Innovation Marathon',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=3840&h=2160&fit=crop&q=80',
      color: 'from-blue-500 to-cyan-500',
      year: '2025',
      description: 'Non-stop coding, innovation, and breakthrough ideas. Teams from across the country competed in our flagship tech event.',
    },
    {
      id: 2,
      title: 'AI Hackathon',
      caption: 'Building the Future with ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=3840&h=2160&fit=crop&q=80',
      color: 'from-purple-500 to-pink-500',
      year: '2024',
      description: 'Cutting-edge artificial intelligence projects tackling real-world problems with machine learning solutions.',
    },
    {
      id: 3,
      title: 'Sports Championship',
      caption: 'Inter-College Victory',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=3840&h=2160&fit=crop&q=80',
      color: 'from-orange-500 to-red-500',
      year: '2024',
      description: 'Our athletes brought home the trophy in an intense inter-college tournament showcasing teamwork and spirit.',
    },
    {
      id: 4,
      title: 'Cultural Night',
      caption: 'Diversity & Unity in Performance',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=3840&h=2160&fit=crop&q=80',
      color: 'from-pink-500 to-rose-500',
      year: '2025',
      description: 'A spectacular evening celebrating diverse cultures through music, dance, and artistic performances.',
    },
    {
      id: 5,
      title: 'Environmental Drive',
      caption: 'Green Campus Initiative',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=3840&h=2160&fit=crop&q=80',
      color: 'from-green-500 to-emerald-500',
      year: '2024',
      description: 'Students united to plant 1000+ trees and launch sustainable campus practices for a greener tomorrow.',
    },
    {
      id: 6,
      title: 'Industry Visit',
      caption: 'Tech Giants Campus Tour',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=3840&h=2160&fit=crop&q=80',
      color: 'from-indigo-500 to-purple-500',
      year: '2025',
      description: 'Exclusive behind-the-scenes tour of leading tech companies, inspiring future innovations.',
    },
    {
      id: 7,
      title: 'Robotics Workshop',
      caption: 'Hands-on with Autonomous Systems',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=3840&h=2160&fit=crop&q=80',
      color: 'from-teal-500 to-cyan-500',
      year: '2024',
      description: 'Building and programming robots from scratch, exploring the future of automation and AI.',
    },
    {
      id: 8,
      title: 'Graduation Day',
      caption: 'Dreams Taking Flight',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=3840&h=2160&fit=crop&q=80',
      color: 'from-amber-500 to-yellow-500',
      year: '2024',
      description: 'Celebrating achievements, bidding farewell to seniors as they embark on their professional journeys.',
    },
    {
      id: 9,
      title: 'Guest Lecture Series',
      caption: 'Industry Leaders Sharing Wisdom',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=3840&h=2160&fit=crop&q=80',
      color: 'from-red-500 to-pink-500',
      year: '2025',
      description: 'Insights from tech pioneers and innovators inspiring the next generation of engineers.',
    },
    {
      id: 10,
      title: 'Photography Exhibition',
      caption: 'Capturing Campus Through Lenses',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=3840&h=2160&fit=crop&q=80',
      color: 'from-violet-500 to-purple-500',
      year: '2024',
      description: 'Student photographers showcased stunning perspectives of campus life and culture.',
    },
  ];

  const closeMemory = () => {
    setSelectedMemory(null);
    document.body.style.overflow = 'unset';
  };

  const openMemory = (memory) => {
    setSelectedMemory(memory);
    document.body.style.overflow = 'hidden';
  };

  return (
    <section
      id="student-life"
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section - Typography Centered with Geometric Line Art */}
        <div ref={titleRef} className="text-center mb-20 relative py-16">
          {/* Geometric Line Art Frames - Photo Frame Outlines */}
          
          {/* Top Left Rectangle Frame */}
          <div className="absolute top-0 left-1/4 w-32 h-24 border border-gray-300 rounded-sm opacity-40 transform -rotate-6"></div>
          
          {/* Top Right Circle Frame */}
          <div className="absolute top-8 right-1/4 w-20 h-20 border border-gray-400 rounded-full opacity-30"></div>
          
          {/* Left Side Rectangle Frame */}
          <div className="absolute top-1/3 left-12 w-24 h-32 border border-gray-300 rounded-sm opacity-35 transform rotate-12 hidden lg:block"></div>
          
          {/* Right Side Rectangle Frame */}
          <div className="absolute top-1/4 right-16 w-28 h-36 border border-gray-300 rounded-sm opacity-40 transform -rotate-6 hidden lg:block"></div>
          
          {/* Bottom Left Circle Frame */}
          <div className="absolute bottom-12 left-1/3 w-24 h-24 border border-gray-400 rounded-full opacity-25 hidden md:block"></div>
          
          {/* Bottom Right Rectangle Frame */}
          <div className="absolute bottom-8 right-1/3 w-28 h-20 border border-gray-300 rounded-sm opacity-35 transform rotate-3 hidden md:block"></div>
          
          {/* Center Small Circle */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 border border-gray-400 rounded-full opacity-20"></div>
          
          {/* Additional Decorative Lines */}
          <div className="absolute top-1/2 left-20 w-16 h-0.5 bg-gray-300 opacity-30 transform -rotate-45 hidden lg:block"></div>
          <div className="absolute top-1/2 right-24 w-20 h-0.5 bg-gray-300 opacity-30 transform rotate-45 hidden lg:block"></div>

          {/* Main Headline - Typography Centered */}
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              Everyday Moments.<br />
              <span className="font-normal text-gray-800">Endless Memories.</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed mt-8">
              Discover the spirit of students in motion, learning, and celebration.
            </p>
          </div>
        </div>

        {/* Memory River Section */}
        <div className="mb-16">
          {/* River Container */}
          <div
            ref={riverRef}
            className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl"
            style={{
              background: 'linear-gradient(180deg, rgba(249,250,251,0.9) 0%, rgba(243,244,246,0.8) 50%, rgba(249,250,251,0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(209,213,219,0.3)',
            }}
          >
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100/10 via-transparent to-gray-100/10 pointer-events-none"></div>

            {/* Light reflections - subtle gray */}
            {[1, 2, 3].map((ref) => (
              <div
                key={ref}
                className="light-reflection absolute top-0 h-full w-48 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(156,163,175,0.08) 50%, transparent 100%)',
                  transform: `translateX(-100%) skewX(-20deg)`,
                  animationDelay: `${ref * 3}s`,
                }}
              ></div>
            ))}

            {/* Horizontal scrollable river */}
            <div className="absolute inset-0 overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar">
              <div className="flex items-center h-full px-8 gap-6" style={{ width: 'max-content' }}>
                {memories.map((memory, index) => (
                  <div
                    key={memory.id}
                    className="memory-photo cursor-pointer group relative flex-shrink-0"
                    onClick={() => openMemory(memory)}
                    style={{
                      marginTop: `${Math.sin(index * 0.5) * 40}px`,
                    }}
                  >
                    {/* Photo card */}
                    <div
                      className={`relative w-56 h-64 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl border border-gray-200 bg-white`}
                    >
                      {/* Background Image */}
                      <img 
                        src={memory.image} 
                        alt={memory.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-end p-5 text-white">
                        <h4 className="text-xl font-semibold text-center mb-1.5 tracking-tight">
                          {memory.title}
                        </h4>
                        <p className="text-xs text-center opacity-90 mb-2 font-light">
                          {memory.caption}
                        </p>
                        <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                          {memory.year}
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${memory.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10`}></div>
                    </div>

                    {/* Water reflection effect */}
                    <div className="absolute -bottom-2 left-0 right-0 h-20 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <div
                        className={`w-full h-full bg-gradient-to-b ${memory.color} rounded-b-3xl blur-xl transform scale-y-[-1]`}
                        style={{ filter: 'blur(20px)' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-white/60 animate-pulse">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="text-sm font-semibold">Scroll to explore memories</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Memory Modal */}
      {selectedMemory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={closeMemory}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeMemory}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-gray-900 text-white rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className={`relative p-12 overflow-hidden`}>
              {/* Background Image */}
              <img 
                src={selectedMemory.image} 
                alt={selectedMemory.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedMemory.color} opacity-80`}></div>
              
              <div className="relative z-10">
                <h2 className="text-5xl font-bold text-white mb-3">
                  {selectedMemory.title}
                </h2>
                <p className="text-2xl italic text-white/90 mb-4">
                  {selectedMemory.caption}
                </p>
                <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold">
                  {selectedMemory.year}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {selectedMemory.description}
              </p>

              <div className="flex gap-4 justify-center">
                <a href="/student-life" className={`px-8 py-4 bg-gradient-to-r ${selectedMemory.color} text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center`}>
                  View Gallery
                </a>
                <a href="/contact" className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300 text-center">
                  Share Memory
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Hide */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default StudentLife;
