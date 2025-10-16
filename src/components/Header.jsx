import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);
  const mergedLogoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create infinite repeating timeline
      const tl = gsap.timeline({
        repeat: -1, // Infinite repeat
        repeatDelay: 2, // 2 second pause before repeating
      });

      // Initial state - balls off screen
      gsap.set(ball1Ref.current, {
        x: -200,
        scale: 1,
        opacity: 1,
        rotation: 0,
      });
      gsap.set(ball2Ref.current, {
        x: 200,
        scale: 1,
        opacity: 1,
        rotation: 0,
      });
      gsap.set(mergedLogoRef.current, {
        scale: 0,
        opacity: 0,
        rotation: 0,
      });

      // Animation sequence
      tl
        // Balls spin and rush toward center
        .to([ball1Ref.current, ball2Ref.current], {
          x: 0,
          rotation: 360,
          duration: 1.2,
          ease: 'power2.inOut',
        })
        // Collision impact - scale up and shake
        .to([ball1Ref.current, ball2Ref.current], {
          scale: 1.4,
          duration: 0.2,
          ease: 'power2.out',
        })
        // Merge effect - balls implode
        .to([ball1Ref.current, ball2Ref.current], {
          scale: 0,
          opacity: 0,
          rotation: 720,
          duration: 0.4,
          ease: 'power3.in',
        })
        // Merged VVISC logo bursts out with elastic bounce
        .to(
          mergedLogoRef.current,
          {
            scale: 1,
            opacity: 1,
            rotation: 360,
            duration: 0.8,
            ease: 'elastic.out(1, 0.4)',
          },
          '-=0.2'
        )
        // Hold the merged logo
        .to(mergedLogoRef.current, {
          duration: 2,
        })
        // Logo shrinks and spins out
        .to(mergedLogoRef.current, {
          scale: 0,
          opacity: 0,
          rotation: -360,
          duration: 0.6,
          ease: 'power2.in',
        })
        // Reset balls for next iteration
        .set([ball1Ref.current, ball2Ref.current], {
          x: -200,
          scale: 1,
          opacity: 1,
          rotation: 0,
        })
        .set(ball2Ref.current, {
          x: 200,
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Collision Animation */}
          <a
            href="#home"
            className="flex items-center space-x-3 group relative"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Container for collision animation */}
            <div ref={containerRef} className="relative w-16 h-16 flex items-center justify-center">
              {/* Ball 1 - IUCEE Logo (Orange/Red) */}
              <div
                ref={ball1Ref}
                className="absolute w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                style={{
                  boxShadow: '0 0 40px rgba(249, 115, 22, 0.8), inset 0 2px 8px rgba(255,255,255,0.3)',
                }}
              >
                <div className="text-center">
                  <div className="text-white font-black text-xs leading-none">IUCEE</div>
                </div>
              </div>

              {/* Ball 2 - VVIT Logo (Blue/Purple) */}
              <div
                ref={ball2Ref}
                className="absolute w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                style={{
                  boxShadow: '0 0 40px rgba(79, 70, 229, 0.8), inset 0 2px 8px rgba(255,255,255,0.3)',
                }}
              >
                <div className="text-center">
                  <div className="text-white font-black text-xs leading-none">VVIT</div>
                </div>
              </div>

              {/* Merged Final Logo - VVISC */}
              <div
                ref={mergedLogoRef}
                className="absolute w-16 h-16 bg-gradient-to-br from-primary-500 via-accent-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white transform group-hover:scale-110 transition-all duration-300"
                style={{
                  boxShadow: '0 0 50px rgba(99, 102, 241, 0.9), inset 0 2px 10px rgba(255,255,255,0.4)',
                }}
              >
                <div className="text-center">
                  <div className="text-white font-black text-[10px] leading-tight">
                    <div>VVIT</div>
                    <div className="text-[8px] font-bold opacity-90">SC</div>
                  </div>
                </div>
              </div>

              {/* Collision Energy Rings */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-ping opacity-0"
                  style={{
                    animationDuration: '1s',
                  }}
                ></div>
                <div
                  className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-ping opacity-0"
                  style={{
                    animationDuration: '1s',
                    animationDelay: '0.1s',
                  }}
                ></div>
              </div>
            </div>

            {/* Text - Always visible */}
            <div className="ml-3">
              <h1 className="font-display font-bold text-2xl text-gray-900">
                VVIT Student Chapter
              </h1>
              <p className="text-xs text-gray-600 font-semibold">Innovation Hub</p>
            </div>
          </a>

          {/* Right side - Join Us Button */}
          <button className="hidden md:block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Join Us
          </button>
        </div>
      </div>

      {/* Collision Animation Styles */}
      <style jsx>{`
        @keyframes collision-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0;
          }
          50% {
            transform: scale(2);
            opacity: 0.5;
          }
        }

        @keyframes energy-burst {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(3) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
