import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageFrameRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image frame animation - fade in from left
      gsap.fromTo(imageFrameRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          scrollTrigger: {
            trigger: imageFrameRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
        }
      );

      // Heading animation - slide from left
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      // Description animation - slide from left with delay
      gsap.fromTo(descriptionRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Frame - Images */}
          <div ref={imageFrameRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Image 1</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 mt-8">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Image 2</p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Image 3</p>
                </div>
              </div>

              {/* Image 4 */}
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square flex items-center justify-center bg-gradient-to-br from-green-100 to-teal-100 mt-8">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Image 4</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Frame - Content */}
          <div ref={contentRef} className="space-y-8">
            {/* Heading with Gradient */}
            <h2 
              ref={headingRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              About <span className="gradient-text">Our Chapter</span>
            </h2>

            {/* Description */}
            <div ref={descriptionRef} className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-900 leading-relaxed font-medium">
                We are a dynamic community of engineering students and faculty members dedicated to pushing the boundaries of technology and innovation.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to bridge the gap between academic learning and practical application, fostering an environment where ideas meet implementation and dreams become reality.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Innovation First</h3>
                    <p className="text-gray-600">Foster creative ideas and transform them into groundbreaking projects</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Collaborative Learning</h3>
                    <p className="text-gray-600">Join workshops and hackathons led by industry experts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Research & Development</h3>
                    <p className="text-gray-600">Access cutting-edge labs and collaborate on real-world projects</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Industry Connect</h3>
                    <p className="text-gray-600">Network with leading tech companies and secure internships</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50">
                  <span className="relative z-10">Enter our Chapter</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
