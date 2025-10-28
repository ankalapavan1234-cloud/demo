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
      className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900"
    >
      {/* Ambient stars/particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-block mb-6">
            <svg viewBox="0 0 24 24" className="w-16 h-16 inline-block" fill="currentColor" aria-hidden>
              <path d="M12 2L3 7l9 5 9-5-9-5zm0 7.5L6.2 7 12 4.5 17.8 7 12 9.5zM5 9v6c0 3 3 5 7 5s7-2 7-5V9" />
            </svg>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 text-white">
            Student <span className="gradient-text">Life</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Experience the vibrant energy, unforgettable moments, and continuous flow of creativity that defines our community.
          </p>
        </div>

        {/* Memory River Section */}
        <div className="mb-32">
          <div ref={riverTitleRef} className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Moments That <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Define Us</span>
            </h3>
            <p className="text-lg text-gray-400 italic">
              The Memory River — A continuous flow of our shared experiences
            </p>
          </div>

          {/* River Container */}
          <div
            ref={riverRef}
            className="relative h-[500px] overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.6) 50%, rgba(15,23,42,0.8) 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* River surface gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-blue-500/10 to-indigo-500/5 pointer-events-none"></div>

            {/* Light reflections */}
            {[1, 2, 3].map((ref) => (
              <div
                key={ref}
                className="light-reflection absolute top-0 h-full w-48 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  transform: `translateX(-100%) skewX(-20deg)`,
                  animationDelay: `${ref * 3}s`,
                }}
              ></div>
            ))}

            {/* Horizontal scrollable river */}
            <div className="absolute inset-0 overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar">
              <div className="flex items-center h-full px-12 gap-8" style={{ width: 'max-content' }}>
                {memories.map((memory, index) => (
                  <div
                    key={memory.id}
                    className="memory-photo cursor-pointer group relative flex-shrink-0"
                    onClick={() => openMemory(memory)}
                    style={{
                      marginTop: `${Math.sin(index * 0.5) * 60}px`,
                    }}
                  >
                    {/* Photo card */}
                    <div
                      className={`relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl border-4 border-white/20`}
                    >
                      {/* Background Image */}
                      <img 
                        src={memory.image} 
                        alt={memory.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Gradient Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Ripple effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[1, 2, 3].map((ripple) => (
                          <div
                            key={ripple}
                            className="absolute inset-0 border-4 border-white/30 rounded-3xl animate-ping"
                            style={{
                              animationDuration: `${1.5 + ripple * 0.5}s`,
                              animationDelay: `${ripple * 0.2}s`,
                            }}
                          ></div>
                        ))}
                      </div>

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-white">
                        <h4 className="text-2xl font-bold text-center mb-2">
                          {memory.title}
                        </h4>
                        <p className="text-sm italic text-center opacity-90 mb-4">
                          {memory.caption}
                        </p>
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                          {memory.year}
                        </div>

                        {/* Click indicator */}
                        <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm font-semibold animate-bounce">
                          <span>Expand</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
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
                <button className={`px-8 py-4 bg-gradient-to-r ${selectedMemory.color} text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
                  View Gallery
                </button>
                <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300">
                  Share Memory
                </button>
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
