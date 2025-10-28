import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const wallRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

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

      // Staggered note animations with subtle floating
      const notes = gsap.utils.toArray('.project-note');
      notes.forEach((note) => {
        gsap.fromTo(
          note,
          { opacity: 0, scale: 0, rotateY: -180 },
          {
            scrollTrigger: {
              trigger: wallRef.current,
              start: 'top 70%',
            },
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
          }
        );

        // Continuous ambient floating animation
        gsap.to(note, {
          y: '+=15',
          rotation: '+=2',
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeProject();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  const openProject = (project) => {
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsFlipping(false);
      document.body.style.overflow = 'hidden';
    }, 400);
  };

  const closeProject = () => {
    setIsFlipping(true);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      setSelectedProject(null);
      setIsFlipping(false);
    }, 400);
  };

  const projects = [
    {
      title: 'Smart Campus IoT',
      domain: 'IoT',
      type: 'sticky',
      tagline: 'Automated campus with sensors & smart devices',
      description:
        'An integrated IoT ecosystem transforming our campus into a smart, responsive environment. Features include automated lighting, real-time attendance tracking, energy monitoring, and intelligent resource allocation.',
      challenge:
        'Traditional campus systems are disconnected, leading to energy waste and manual processes.',
      solution:
        'Built a unified IoT network using Arduino and Raspberry Pi nodes, collecting and analyzing data in real-time through a centralized Node.js server and MongoDB database.',
      impact: '40% reduction in energy costs, 95% attendance accuracy, automated facility management',
      tech: ['Arduino', 'Raspberry Pi', 'Node.js', 'MongoDB', 'MQTT', 'Socket.io'],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
          <path d="M12 2L2 7v2h20V7L12 2zm0 4.5L18 8v2H6V8l6-1.5zM6 12v8h4v-6h4v6h4v-8H6z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-400',
      textColor: 'text-blue-900',
      status: 'In Progress',
      team: 'IoT Innovation Squad',
      duration: '8 months',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=3840&h=2160&fit=crop&q=80',
    },
    {
      title: 'AI Study Companion',
      domain: 'AI',
      type: 'circuit',
      tagline: 'Personalized learning powered by ML',
      description:
        'An intelligent study assistant that adapts to individual learning patterns, recommends optimal study strategies, generates practice problems, and provides real-time doubt resolution.',
      challenge:
        'Students struggle with one-size-fits-all learning approaches and lack personalized guidance.',
      solution:
        'Developed deep learning models analyzing study habits, performance data, and cognitive patterns to create adaptive learning paths. Integrated NLP for conversational tutoring.',
      impact: '70% improvement in exam scores, 50% reduction in study time, 2000+ active users',
      tech: ['Python', 'TensorFlow', 'React', 'Flask', 'NLP', 'OpenAI API'],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
          <path d="M12 2L3 7l9 5 9-5-9-5zm0 7.5L6.2 7 12 4.5 17.8 7 12 9.5zM5 9v6c0 3 3 5 7 5s7-2 7-5V9" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-400',
      textColor: 'text-purple-900',
      status: 'Completed',
      team: 'AI Wizards',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=3840&h=2160&fit=crop&q=80',
    },
    {
      title: 'Autonomous Bot',
      domain: 'Robotics',
      type: 'circuit',
      tagline: 'Self-navigating robot with CV',
      description:
        'An autonomous mobile robot capable of navigating complex indoor environments using computer vision, LiDAR, and sensor fusion algorithms for path planning and obstacle avoidance.',
      challenge:
        'Indoor navigation is challenging due to dynamic obstacles, poor GPS signals, and real-time decision requirements.',
      solution:
        'Implemented ROS-based architecture with OpenCV for object detection, SLAM for mapping, and deep reinforcement learning for optimal path planning.',
      impact: '98% navigation accuracy, 0 collisions in 500+ test runs, autonomous delivery system',
      tech: ['ROS', 'OpenCV', 'C++', 'Python', 'LiDAR', 'Reinforcement Learning'],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
          <path d="M12 2a4 4 0 00-4 4v1H6v6h2v4h8v-4h2V7h-2V6a4 4 0 00-4-4zM8 9h8v6H8V9z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-400',
      textColor: 'text-orange-900',
      status: 'Research Phase',
      team: 'RoboMinds',
      duration: '12 months',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=3840&h=2160&fit=crop&q=80',
    },
    {
      title: 'Blockchain Registry',
      domain: 'Blockchain',
      type: 'screenshot',
      tagline: 'Tamper-proof academic credentials',
      description:
        'A decentralized credential verification system using blockchain technology to ensure authenticity and prevent certificate fraud, with smart contracts for automated verification.',
      challenge:
        'Traditional paper certificates are easy to forge, verification is slow, and there\'s no universal trust system.',
      solution:
        'Built Ethereum-based smart contracts storing encrypted credential hashes, with a React interface for instant verification by employers and institutions worldwide.',
      impact: 'Zero fraud cases, 5-second verification time, adopted by 20+ institutions',
      tech: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'IPFS', 'MetaMask'],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
          <path d="M3.9 12a5 5 0 017.07-7.07l1.41 1.41A5 5 0 116.34 13.4L4.93 12l-.99.99L3 12zM20.1 12a5 5 0 01-7.07 7.07l-1.41-1.41A5 5 0 1117.66 10.6L19.07 12l.99-.99L21 12z" />
        </svg>
      ),
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-400',
      textColor: 'text-indigo-900',
      status: 'Completed',
      team: 'Chain Builders',
      duration: '7 months',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=3840&h=2160&fit=crop&q=80',
    },
  ];


  // Get note style based on type
  const getNoteStyle = (type, index) => {
    const rotations = [-8, -4, -2, 2, 4, 6, -6, -3];
    const rotation = rotations[index % rotations.length];

    if (type === 'sticky') {
      return {
        transform: `rotate(${rotation}deg)`,
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
      };
    } else if (type === 'circuit') {
      return {
        transform: `rotate(${rotation}deg)`,
        background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
      };
    } else {
      return {
        transform: `rotate(${rotation}deg)`,
        background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
        boxShadow: '0 10px 30px rgba(236, 72, 153, 0.3)',
      };
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
      }}
    >
      {/* Ambient floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
            Innovation <span className="gradient-text">Wall</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Welcome to our creative lab — where ideas come alive. Click any note to dive deep into the story behind each project.
          </p>
        </div>

        {/* 3D Innovation Wall */}
        <div
          ref={wallRef}
          className="relative"
          style={{
            perspective: '1500px',
            perspectiveOrigin: 'center center',
          }}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            style={{
              transform: 'rotateX(5deg) rotateY(-2deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-note cursor-pointer transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${30 + (index % 3) * 20}px)`,
                }}
                onClick={() => openProject(project)}
              >
                <div
                  className="relative p-0 rounded-2xl border-4 shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-0 hover:shadow-3xl group overflow-hidden"
                  style={getNoteStyle(project.type, index)}
                >
                  {/* Pin/Tape effect at top */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-400 opacity-60 rounded-sm shadow-md z-20"></div>

                  {/* 4K Image Background */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 bg-white">
                    {/* Domain badge */}
                    <div className={`absolute top-3 right-3 px-3 py-1 ${project.bgColor} ${project.textColor} text-xs font-bold rounded-full border-2 ${project.borderColor}`}>
                      {project.domain}
                    </div>

                    {/* Title with handwritten feel */}
                    <h3 className={`text-xl font-bold mb-2 ${project.textColor} leading-tight pr-16`}>
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-gray-800 italic mb-4 font-medium">
                      "{project.tagline}"
                    </p>

                    {/* Status badge */}
                    <div
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === 'Completed' || project.status === 'Deployed'
                          ? 'bg-green-200 text-green-900 border-2 border-green-400'
                          : project.status === 'In Progress' || project.status === 'Beta Testing'
                          ? 'bg-blue-200 text-blue-900 border-2 border-blue-400'
                          : 'bg-purple-200 text-purple-900 border-2 border-purple-400'
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>

                  {/* Decorative elements based on type */}
                  {project.type === 'circuit' && (
                    <div className="absolute bottom-2 right-2 opacity-20 z-10">
                      <svg width="60" height="60" viewBox="0 0 60 60" className="text-gray-700">
                        <circle cx="10" cy="10" r="3" fill="currentColor" />
                        <circle cx="50" cy="10" r="3" fill="currentColor" />
                        <circle cx="30" cy="50" r="3" fill="currentColor" />
                        <path d="M 10 10 L 50 10 L 30 50 Z" stroke="currentColor" fill="none" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${project.color} blur-xl -z-10`}></div>

                  {/* Click indicator */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="flex items-center gap-1 text-xs font-bold text-white bg-black/50 px-3 py-1 rounded-full animate-bounce">
                      <span>Click to expand</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Idea CTA */}
        <div className="mt-24 text-center">
          <div
            className="backdrop-blur-xl bg-white/40 rounded-3xl p-10 md:p-14 max-w-4xl mx-auto border-4 border-white shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(240,240,255,0.5) 100%)',
            }}
          >
            <div className="text-6xl mb-6">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-yellow-400" fill="currentColor" aria-hidden>
                <path d="M9 21h6v-1.5H9V21zm3-19a7 7 0 00-4.9 11.9L9 16h6l2.9-2.1A7 7 0 0012 2z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold mb-4 gradient-text">
              Got a Brilliant Idea?
            </h3>
            <p className="text-lg text-gray-800 mb-8 font-medium max-w-2xl mx-auto">
              Pin your project idea to our Innovation Wall! Get mentorship, resources, and a passionate team to turn your vision into reality.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1">
              Submit Your Idea →
            </button>
          </div>
        </div>
      </div>

      {/* Full-page Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            animation: isFlipping ? 'fadeOut 0.4s ease-out' : 'fadeIn 0.4s ease-out',
          }}
          onClick={closeProject}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            style={{
              animation: isFlipping ? 'flipOut 0.4s ease-out' : 'flipIn 0.4s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeProject}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-gray-900 text-white rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header with gradient */}
            <div className={`bg-gradient-to-r ${selectedProject.color} p-10 md:p-14 rounded-t-3xl relative overflow-hidden`}>
              <div className="absolute top-0 right-0 text-9xl opacity-10">
                {selectedProject.icon}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-2 bg-white/90 ${selectedProject.textColor} text-sm font-bold rounded-full`}>
                    {selectedProject.domain}
                  </span>
                  <span
                    className={`px-4 py-2 text-sm font-semibold rounded-full ${
                      selectedProject.status === 'Completed' || selectedProject.status === 'Deployed'
                        ? 'bg-green-100 text-green-800'
                        : selectedProject.status === 'In Progress' || selectedProject.status === 'Beta Testing'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {selectedProject.status}
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 italic font-medium">
                  "{selectedProject.tagline}"
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 md:p-14">
              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 gradient-text">Project Overview</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 border-4 border-red-200 rounded-2xl p-8">
                  <div className="text-4xl mb-4">❗</div>
                  <h4 className="text-2xl font-bold text-red-900 mb-4">The Challenge</h4>
                  <p className="text-gray-800 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div className="bg-green-50 border-4 border-green-200 rounded-2xl p-8">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="text-2xl font-bold text-green-900 mb-4">Our Solution</h4>
                  <p className="text-gray-800 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-4 border-yellow-300 rounded-2xl p-8 mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-5xl">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-pink-500" fill="currentColor" aria-hidden>
                      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-bold text-orange-900">Impact & Results</h4>
                </div>
                <p className="text-xl text-gray-800 font-semibold leading-relaxed">
                  {selectedProject.impact}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold mb-6 text-gray-900">Technology Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-5 py-3 bg-gradient-to-r ${selectedProject.color} text-white font-semibold rounded-xl shadow-lg hover:scale-110 transition-transform duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team & Duration */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                  <div className="text-4xl">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor" aria-hidden>
                      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-8 9a8 8 0 0116 0H4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold">Team</div>
                    <div className="text-xl font-bold text-gray-900">{selectedProject.team}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                  <div className="text-4xl">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor" aria-hidden>
                      <path d="M12 8v5l3 3 1-1-2-2V8h-2zM12 2a10 10 0 100 20 10 10 0 000-20z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold">Duration</div>
                    <div className="text-xl font-bold text-gray-900">{selectedProject.duration}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t-2 border-gray-200">
                <button className={`px-8 py-4 bg-gradient-to-r ${selectedProject.color} text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                  View Live Demo →
                </button>
                <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300">
                  GitHub Repository
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes flipIn {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(-90deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) scale(1);
          }
        }

        @keyframes flipOut {
          from {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) scale(1);
          }
          to {
            opacity: 0;
            transform: perspective(1000px) rotateY(90deg) scale(0.8);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
