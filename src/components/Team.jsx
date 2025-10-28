import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
      });

      gsap.from('.team-card', {
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Faculty Advisor',
      department: 'Computer Science',
      image: '👩‍🏫',
      color: 'from-blue-500 to-cyan-500',
      social: {
        linkedin: '#',
        email: '#',
        website: '#',
      },
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Technical Mentor',
      department: 'Electronics',
      image: '👨‍🏫',
      color: 'from-purple-500 to-pink-500',
      social: {
        linkedin: '#',
        email: '#',
        website: '#',
      },
    },
    {
      name: 'Alex Rivera',
      role: 'President',
      department: 'Computer Engineering',
      image: '👨‍💼',
      color: 'from-orange-500 to-red-500',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: 'Emma Williams',
      role: 'Vice President',
      department: 'Software Engineering',
      image: '👩‍💼',
      color: 'from-green-500 to-emerald-500',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: 'David Park',
      role: 'Technical Lead',
      department: 'AI & ML',
      image: '👨‍💻',
      color: 'from-indigo-500 to-purple-500',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: 'Sophie Anderson',
      role: 'Events Coordinator',
      department: 'Information Technology',
      image: '👩‍💻',
      color: 'from-pink-500 to-rose-500',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: 'James Wilson',
      role: 'Projects Manager',
      department: 'Robotics',
      image: '👨‍🔧',
      color: 'from-cyan-500 to-blue-500',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: 'Lisa Kumar',
      role: 'Outreach Head',
      department: 'Data Science',
      image: '👩‍🔬',
      color: 'from-violet-500 to-purple-500',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate individuals working together to create an incredible learning
            environment and drive innovation.
          </p>
        </div>

        {/* Leadership Cards - President & Vice President */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* President Card */}
          <div className="team-card group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
            {/* Background Gradient */}
            <div className="h-48 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              {/* President Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  👑 President
                </span>
              </div>
            </div>

            {/* Image Container - Placeholder for actual photo */}
            <div className="relative px-8 -mt-20">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center border-4 border-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden">
                {/* Example Image - Replace with your actual image */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" 
                  alt="President" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                President Name
              </h3>
              <p className="text-orange-600 font-semibold text-base mb-2">
                President - VVIT Student Chapter
              </p>
              <p className="text-gray-500 text-sm mb-6">Department</p>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Leading the chapter with vision and dedication to foster innovation and excellence.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover/icon:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover/icon:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover/icon:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Vice President Card */}
          <div className="team-card group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
            {/* Background Gradient */}
            <div className="h-48 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              {/* Vice President Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ⭐ Vice President
                </span>
              </div>
            </div>

            {/* Image Container - Placeholder for actual photo */}
            <div className="relative px-8 -mt-20">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center border-4 border-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden">
                {/* Example Image - Replace with your actual image */}
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80" 
                  alt="Vice President" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                Vice President Name
              </h3>
              <p className="text-green-600 font-semibold text-base mb-2">
                Vice President - VVIT Student Chapter
              </p>
              <p className="text-gray-500 text-sm mb-6">Department</p>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Supporting leadership with strategic planning and coordination excellence.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover/icon:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover/icon:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover/icon:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div
          ref={teamRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div
                className={`h-32 bg-gradient-to-br ${member.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                {/* Decorative Circles */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/20 rounded-full"></div>
              </div>

              {/* Avatar */}
              <div className="relative px-6 -mt-12">
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-5xl border-4 border-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  {member.image}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm mb-4">{member.department}</p>

                {/* Social Links */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Object.entries(member.social).map(([platform, link], i) => (
                    <a
                      key={i}
                      href={link}
                      className="w-8 h-8 bg-gray-100 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                    >
                      {platform === 'linkedin' && (
                        <svg
                          className="w-4 h-4 text-gray-600 group-hover/icon:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )}
                      {platform === 'github' && (
                        <svg
                          className="w-4 h-4 text-gray-600 group-hover/icon:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      {platform === 'twitter' && (
                        <svg
                          className="w-4 h-4 text-gray-600 group-hover/icon:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      )}
                      {platform === 'email' && (
                        <svg
                          className="w-4 h-4 text-gray-600 group-hover/icon:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {platform === 'website' && (
                        <svg
                          className="w-4 h-4 text-gray-600 group-hover/icon:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="text-6xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-14 h-14 text-indigo-500" fill="currentColor" aria-hidden>
                <path d="M12 2c.6 0 1.2.2 1.7.6l3.6 3.6c.4.4.6 1 .6 1.7 0 .6-.2 1.2-.6 1.7L13 15l-1.4 4.3c-.1.3-.4.5-.7.5-.1 0-.2 0-.3-.1L6.6 19c-.8-.4-1.5-1.1-1.9-1.9L4.1 14c0-.1 0-.2-.1-.3 0-.4.2-.7.5-.8L9 11l5-4.9c.3-.3.6-.5 1-.6.1 0 .1-.1.2-.1z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Join Our Team
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We're always looking for passionate students and faculty members to join
              our growing community. Be part of something amazing!
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
