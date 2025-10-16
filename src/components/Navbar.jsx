import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo('.nav-item', 
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(navRefs.current[index], {
      y: -8,
      duration: 0.3,
      ease: 'back.out(3)',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(navRefs.current[index], {
      y: 0,
      duration: 0.3,
      ease: 'back.out(3)',
    });
  };

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About', href: '/about', type: 'link' },
    { name: 'Events', href: '/events', type: 'link' },
    { name: 'Projects', href: '/projects', type: 'link' },
    { name: 'Student Life', href: '/student-life', type: 'link' },
    { name: 'Contact', href: '/contact', type: 'link' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar - Below Header */}
      <nav className="fixed top-[93px] left-0 right-0 z-[90] flex justify-center py-2 bg-transparent pointer-events-none">
        <div className="pointer-events-auto hidden md:flex items-center gap-2 glass-effect rounded-full px-6 py-2 shadow-2xl border-2 border-white/40 bg-white/95 backdrop-blur-xl">
          {navItems.map((item, index) => (
            item.type === 'link' ? (
              <Link
                key={item.name}
                ref={(el) => (navRefs.current[index] = el)}
                to={item.href}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className={`nav-item px-4 py-2 text-sm font-bold transition-all duration-300 relative group rounded-full cursor-pointer ${
                  location.pathname === item.href ? 'bg-gradient-to-r from-primary-500 to-accent-500' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className={`relative z-10 transition-all duration-300 ${
                  location.pathname === item.href ? 'text-white' : 'text-gray-800 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
                {location.pathname !== item.href && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                )}
              </Link>
            ) : (
              <a
                key={item.name}
                ref={(el) => (navRefs.current[index] = el)}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="nav-item px-4 py-2 text-sm font-bold transition-all duration-300 relative group rounded-full cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 text-gray-800 group-hover:text-white transition-all duration-300">
                  {item.name}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            )
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="pointer-events-auto md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="glass-effect rounded-full p-4 shadow-xl border-2 border-white/30"
          >
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 glass-effect rounded-3xl shadow-2xl border-2 border-white/30 p-3 min-w-[180px]">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                        : 'bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent hover:text-white hover:bg-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block px-5 py-2.5 text-sm font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent hover:text-white hover:bg-primary-600 rounded-full transition-all duration-300"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
