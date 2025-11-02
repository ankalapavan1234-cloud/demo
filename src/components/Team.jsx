import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

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

      gsap.from(bookRef.current, {
        scrollTrigger: {
          trigger: bookRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, isFlipping]);

  // Book pages data - Leaders organized in pages
  const bookPages = [
    {
      left: {
        title: 'VVIT Chairman',
        name: 'Dr. Chairman Name',
        position: 'Chairman',
        organization: 'VVIT',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&q=80',
        description: 'Guiding VVIT towards excellence in engineering education with visionary leadership and innovative approaches to transform the future of technology.',
        color: 'from-blue-500 to-cyan-500',
      },
      right: {
        title: 'IUCEE Chairman',
        name: 'Dr. Chairman Name',
        position: 'Chairman',
        organization: 'IUCEE',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&q=80',
        description: 'Leading the global transformation of engineering education through collaborative IUCEE initiatives and fostering innovation worldwide.',
        color: 'from-purple-500 to-pink-500',
      },
    },
    {
      left: {
        title: 'President',
        name: 'President Name',
        position: 'President',
        organization: 'VVIT Student Chapter',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
        description: 'Leading the chapter with vision and dedication to foster innovation, excellence, and collaborative growth among students and faculty.',
        color: 'from-orange-500 to-red-500',
      },
      right: {
        title: 'Vice President',
        name: 'Vice President Name',
        position: 'Vice President',
        organization: 'VVIT Student Chapter',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
        description: 'Supporting leadership with strategic planning, coordination excellence, and commitment to empowering student initiatives and programs.',
        color: 'from-green-500 to-emerald-500',
      },
    },
    {
      left: {
        title: 'Technical Head',
        name: 'Technical Head Name',
        position: 'Head',
        organization: 'Technical Council',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
        description: 'Spearheading technical initiatives, innovation projects, and cutting-edge technology solutions to advance engineering excellence.',
        color: 'from-cyan-500 to-blue-500',
      },
      right: {
        title: 'Events Head',
        name: 'Events Head Name',
        position: 'Head',
        organization: 'Events Council',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
        description: 'Orchestrating engaging events, workshops, and conferences that connect minds, inspire action, and build lasting communities.',
        color: 'from-pink-500 to-rose-500',
      },
    },
  ];

  const totalPages = bookPages.length;

  const flipToPage = (pageIndex) => {
    if (pageIndex < 0 || pageIndex >= totalPages || isFlipping || pageIndex === currentPage) {
      return;
    }
    
    setIsFlipping(true);
    setCurrentPage(pageIndex);
    
    setTimeout(() => {
      setIsFlipping(false);
    }, 800);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      flipToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      flipToPage(currentPage - 1);
    }
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flip through the pages to meet the inspiring minds guiding our chapter
          </p>
        </div>

        {/* Book Container */}
        <div ref={bookRef} className="max-w-6xl mx-auto">
          {/* Book Wrapper with 3D perspective */}
          <div className="relative" style={{ perspective: '2500px' }}>
            {/* Book Shadow */}
            <div className="absolute inset-0 bg-black/20 blur-3xl transform translate-y-8 scale-95 rounded-3xl"></div>
            
            {/* The Book - Spiral Bound Notebook Style */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8"
                 style={{
                   transformStyle: 'preserve-3d',
                   boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.5)',
                 }}>
              
              {/* Book Binding (Center) - Spiral Bound Style with Wire-thin Rings */}
              <div className="absolute left-1/2 top-0 bottom-0 w-4 transform -translate-x-1/2 z-20 flex flex-col justify-between py-6">
                {/* Spiral Rings - Wire-thin - More rings for full coverage */}
                {[...Array(16)].map((_, index) => (
                  <div key={index} className="relative mx-auto">
                    {/* Ring outer circle - metallic silver with animation - wire-thin size */}
                    <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-md relative transition-all duration-500 ${
                      isFlipping ? 'scale-110 rotate-180' : 'scale-100 rotate-0'
                    }`}
                         style={{
                           boxShadow: 'inset 0 0.5px 1px rgba(255,255,255,0.6), inset 0 -0.5px 1px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
                         }}>
                      {/* Ring inner hole - wire-thin */}
                      <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200"
                           style={{
                             boxShadow: 'inset 0 0.5px 0.5px rgba(0,0,0,0.3), 0 0.5px 0.5px rgba(255,255,255,0.4)',
                           }}></div>
                      
                      {/* Ring highlight for 3D effect - tiny */}
                      <div className="absolute top-0 left-0 w-1 h-1 bg-white/60 rounded-full blur-[0.3px]"></div>
                      
                      {/* Ring shadow on left page - subtle */}
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-1.5 h-2 bg-gradient-to-r from-black/10 to-transparent mr-0.5"></div>
                      
                      {/* Ring shadow on right page - subtle */}
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-1.5 h-2 bg-gradient-to-l from-black/10 to-transparent ml-0.5"></div>
                    </div>
                  </div>
                ))}
                
                {/* Center spine bar behind rings - wire-thin */}
                <div className="absolute inset-0 w-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 -z-10 rounded-sm"
                     style={{
                       boxShadow: 'inset 0 0 3px rgba(0,0,0,0.5), 0 0 5px rgba(0,0,0,0.2)',
                     }}></div>
              </div>
              
              {/* Book Pages Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden"
                   style={{
                     minHeight: '600px',
                     boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1)',
                   }}>
                
                {/* Pages */}
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Left Page - Click to go to previous page */}
                  <div 
                    onClick={prevPage}
                    className={`relative p-6 lg:p-10 ${currentPage > 0 ? 'cursor-pointer hover:bg-amber-50/30' : 'cursor-not-allowed'} transition-colors duration-200`}
                    style={{
                      background: 'linear-gradient(to right, #fffff8 0%, #fffef5 100%)',
                      borderRight: '2px dashed rgba(180, 83, 9, 0.2)',
                    }}
                  >
                    {/* Punch holes on left page - tiny to match wire-thin rings */}
                    <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-6">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mr-0.5"
                             style={{
                               boxShadow: 'inset 0 0.3px 0.5px rgba(0,0,0,0.3)',
                             }}></div>
                      ))}
                    </div>
                    
                    {/* Page number - top left */}
                    <div className="absolute top-4 left-4 text-amber-600/50 font-serif text-sm">
                      {currentPage * 2 + 1}
                    </div>
                    
                    {/* Left page content */}
                    <div className={`transition-all duration-700 ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                      <div className="h-full flex flex-col">
                        {/* Title Badge */}
                        <div className="mb-6">
                          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${bookPages[currentPage].left.color} text-white font-semibold text-sm shadow-lg`}>
                            {bookPages[currentPage].left.title}
                          </div>
                        </div>

                        {/* Image */}
                        <div className="mb-6 relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                          <img
                            src={bookPages[currentPage].left.image}
                            alt={bookPages[currentPage].left.name}
                            className="relative w-full h-64 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300"
                          />
                          {/* Page curl effect */}
                          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent via-white/50 to-white/80 rounded-tl-3xl pointer-events-none"></div>
                        </div>

                        {/* Details */}
                        <div className="flex-grow">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 font-serif">
                            {bookPages[currentPage].left.name}
                          </h3>
                          <p className={`text-lg font-semibold mb-1 bg-gradient-to-r ${bookPages[currentPage].left.color} bg-clip-text text-transparent`}>
                            {bookPages[currentPage].left.position}
                          </p>
                          <p className="text-sm text-gray-600 mb-4">
                            {bookPages[currentPage].left.organization}
                          </p>
                          <p className="text-gray-700 leading-relaxed font-serif text-sm lg:text-base">
                            {bookPages[currentPage].left.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Page - Click to go to next page */}
                  <div 
                    onClick={nextPage}
                    className={`relative p-6 lg:p-10 ${currentPage < totalPages - 1 ? 'cursor-pointer hover:bg-amber-50/30' : 'cursor-not-allowed'} transition-colors duration-200`}
                    style={{
                      background: 'linear-gradient(to left, #fffff8 0%, #fffef5 100%)',
                      borderLeft: '2px dashed rgba(180, 83, 9, 0.2)',
                    }}
                  >
                    {/* Punch holes on right page - tiny to match wire-thin rings */}
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-6">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 ml-0.5"
                             style={{
                               boxShadow: 'inset 0 0.3px 0.5px rgba(0,0,0,0.3)',
                             }}></div>
                      ))}
                    </div>
                    
                    {/* Page number - top right */}
                    <div className="absolute top-4 right-4 text-amber-600/50 font-serif text-sm">
                      {currentPage * 2 + 2}
                    </div>
                    
                    {/* Right page content */}
                    <div className={`transition-all duration-700 ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                      <div className="h-full flex flex-col">
                        {/* Title Badge */}
                        <div className="mb-6">
                          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${bookPages[currentPage].right.color} text-white font-semibold text-sm shadow-lg`}>
                            {bookPages[currentPage].right.title}
                          </div>
                        </div>

                        {/* Image */}
                        <div className="mb-6 relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                          <img
                            src={bookPages[currentPage].right.image}
                            alt={bookPages[currentPage].right.name}
                            className="relative w-full h-64 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300"
                          />
                          {/* Page curl effect */}
                          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-bl from-transparent via-white/50 to-white/80 rounded-tr-3xl pointer-events-none"></div>
                        </div>

                        {/* Details */}
                        <div className="flex-grow">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 font-serif">
                            {bookPages[currentPage].right.name}
                          </h3>
                          <p className={`text-lg font-semibold mb-1 bg-gradient-to-r ${bookPages[currentPage].right.color} bg-clip-text text-transparent`}>
                            {bookPages[currentPage].right.position}
                          </p>
                          <p className="text-sm text-gray-600 mb-4">
                            {bookPages[currentPage].right.organization}
                          </p>
                          <p className="text-gray-700 leading-relaxed font-serif text-sm lg:text-base">
                            {bookPages[currentPage].right.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 px-4">
                {/* Previous Button */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0 || isFlipping}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    currentPage === 0 || isFlipping
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                  }`}
                >
                  <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Page Counter - Simple text display */}
                <div className="text-gray-600 font-serif">
                  <span className="font-semibold text-gray-800">{currentPage + 1}</span> / {totalPages}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1 || isFlipping}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    currentPage === totalPages - 1 || isFlipping
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                  }`}
                >
                  <span className="hidden sm:inline">Next</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Interaction Instructions */}
          <div className="text-center mt-8 text-gray-600 text-sm">
            <p>💡 Tap on pages to flip • Use arrow keys (← →) • Or click Previous/Next buttons</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
