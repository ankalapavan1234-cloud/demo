import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StudentLife = () => {
  const heroRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

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

    // Hero text entrance animation - soft and welcoming
    gsap.fromTo('.hero-title',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    );

    gsap.fromTo('.hero-subtitle',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
    );

    // CTA button entrance
    gsap.fromTo('.cta-button',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: 'back.out(1.2)' }
    );

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

  // Scroll to gallery
  const scrollToGallery = () => {
    const gallerySection = document.querySelector('.masonry-grid');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      {/* Hero Section - Gallery Welcome */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf9f7]"
      >
        {/* Content Layer */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center relative py-20">
            {/* Three Faint Photo Frame Outlines - Overlapping & Angled */}
            
            {/* Frame 1 - Left, slightly rotated */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-32 -mt-12 w-64 h-80 border-2 border-gray-300/40 rounded-sm rotate-[-8deg] shadow-sm"></div>
            
            {/* Frame 2 - Center, slight tilt */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-96 border-2 border-gray-400/30 rounded-sm rotate-[3deg] shadow-sm"></div>
            
            {/* Frame 3 - Right, angled opposite */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-28 mt-16 w-60 h-72 border-2 border-gray-300/35 rounded-sm rotate-[12deg] shadow-sm"></div>

            {/* Main Content - Above frames */}
            <div className="relative z-10">
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight font-['Inter']">
                Snapshots of Life at VVISC.
              </h1>
              
              {/* Subtext */}
              <p className="hero-subtitle text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed mt-6 mb-12">
                A living gallery of everyday stories, smiles, and memories.
              </p>

              {/* CTA Button */}
              <button 
                onClick={scrollToGallery}
                className="cta-button inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Open Gallery
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

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
