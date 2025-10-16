import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
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

      gsap.fromTo('.event-card',
        {
          opacity: 0,
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: eventsRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const events = [
    {
      title: 'TechFest 2024',
      date: 'March 15-17, 2024',
      category: 'Competition',
      description: 'Annual technical festival featuring coding competitions, robotics challenges, and project exhibitions.',
      details: 'Join us for 3 days of innovation! Compete in coding challenges, showcase your robotics projects, and network with industry leaders. Prizes worth $10,000+',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=3840&h=2160&fit=crop&q=80',
      color: 'from-violet-500 to-purple-500',
      status: 'Upcoming',
      venue: 'Main Campus Auditorium',
      participants: '500+ Expected',
    },
    {
      title: 'AI & ML Workshop',
      date: 'February 28, 2024',
      category: 'Workshop',
      description: 'Hands-on workshop on machine learning fundamentals and practical applications with industry experts.',
      details: 'Learn from Google AI engineers! Topics include neural networks, deep learning, and real-world ML applications. Certificates provided.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=3840&h=2160&fit=crop&q=80',
      color: 'from-blue-500 to-cyan-500',
      status: 'Upcoming',
      venue: 'Tech Lab Building',
      participants: '100 Seats',
    },
    {
      title: 'Hackathon 48hrs',
      date: 'April 5-7, 2024',
      category: 'Hackathon',
      description: '48-hour intensive coding marathon. Build innovative solutions to real-world problems.',
      details: 'Code non-stop for 48 hours! Free food, mentorship from industry experts, and amazing prizes. Top 3 teams get internship opportunities.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=3840&h=2160&fit=crop&q=80',
      color: 'from-orange-500 to-red-500',
      status: 'Registration Open',
      venue: 'Innovation Center',
      participants: '200+ Teams',
    },
    {
      title: 'Tech Talk Series',
      date: 'March 25, 2024',
      category: 'Seminar',
      description: 'Expert sessions on emerging technologies, career guidance, and industry insights from tech leaders.',
      details: 'Guest speakers from Microsoft, Amazon, and startups! Topics: Cloud Computing, Blockchain, Career Tips. Free entry with networking dinner.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=3840&h=2160&fit=crop&q=80',
      color: 'from-green-500 to-emerald-500',
      status: 'Upcoming',
      venue: 'Conference Hall',
      participants: '300+ Attendees',
    },
  ];

  return (
    <section id="events" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Participate in exciting events, workshops, and competitions that help you grow professionally and personally.
          </p>
        </div>
        <div ref={eventsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="event-card group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className={`h-48 relative overflow-hidden`}>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border-2 border-white/50 ${event.status === 'Upcoming' ? 'bg-blue-500/90 text-white' : event.status === 'Registration Open' ? 'bg-green-500/90 text-white' : 'bg-purple-500/90 text-white'}`}>{event.status}</span>
                </div>
              </div>
              <div className="p-5 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div className="mb-3">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-xs font-bold rounded-full inline-flex items-center shadow-sm">
                    <span className="w-1.5 h-1.5 bg-gray-800 rounded-full mr-2"></span>{event.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{event.title}</h3>
                <div className="space-y-2 mb-3">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="text-xs font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-xs font-medium">{event.venue}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3 text-xs line-clamp-3">{event.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="text-xs font-semibold text-gray-700">{event.participants}</span>
                </div>
                <div className="flex gap-2">
                  <button className={`flex-1 bg-gradient-to-r ${event.color} text-white font-bold py-2.5 px-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn text-sm`}>
                    <span className="relative z-10">Register</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <button className="px-3 py-2.5 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 hover:shadow-md" title="View Details">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5 pointer-events-none">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs leading-relaxed font-medium">{event.details}</p>
                  </div>
                </div>
              </div>
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="group px-10 py-5 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold text-lg rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">View All Events<svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
