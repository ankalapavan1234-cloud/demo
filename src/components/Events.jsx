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

      // Animate event cards scoped to this section to avoid global selector issues
      if (eventsRef.current) {
        const cards = eventsRef.current.querySelectorAll('.event-card');
        gsap.fromTo(cards,
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const events = [
    {
      title: 'TechFest 2024',
      date: 'March 15-17, 2024',
      time: '9:00 AM - 6:00 PM',
      category: 'Competition',
      description: 'Annual technical festival featuring coding competitions, robotics challenges, and project exhibitions. Join us for 3 days of innovation with amazing prizes worth $10,000+',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=3840&h=2160&fit=crop&q=80',
      color: 'from-violet-500 to-purple-500',
      status: 'Upcoming',
      venue: 'Main Campus Auditorium',
      participants: '500+ Expected',
    },
    {
      title: 'AI & ML Workshop',
      date: 'February 28, 2024',
      time: '10:00 AM - 4:00 PM',
      category: 'Workshop',
      description: 'Hands-on workshop on machine learning fundamentals and practical applications with industry experts. Learn from Google AI engineers about neural networks and deep learning.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=3840&h=2160&fit=crop&q=80',
      color: 'from-blue-500 to-cyan-500',
      status: 'Upcoming',
      venue: 'Tech Lab Building',
      participants: '100 Seats',
    },
    {
      title: 'Hackathon 48hrs',
      date: 'April 5-7, 2024',
      time: '6:00 PM - 6:00 PM',
      category: 'Hackathon',
      description: '48-hour intensive coding marathon. Build innovative solutions to real-world problems. Free food, mentorship from industry experts, and amazing prizes for top 3 teams.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=3840&h=2160&fit=crop&q=80',
      color: 'from-orange-500 to-red-500',
      status: 'Registration Open',
      venue: 'Innovation Center',
      participants: '200+ Teams',
    },
    {
      title: 'Tech Talk Series',
      date: 'March 25, 2024',
      time: '2:00 PM - 5:00 PM',
      category: 'Seminar',
      description: 'Expert sessions on emerging technologies, career guidance, and industry insights from tech leaders. Guest speakers from Microsoft, Amazon, and leading startups with networking dinner.',
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
        <div ref={eventsRef} className="space-y-10 md:space-y-14 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`event-card flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-5 md:gap-8 items-center group`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl shadow-xl">
                <div className="aspect-[16/10] relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1.5 text-xs font-bold rounded-full backdrop-blur-md border-2 border-white/50 ${event.status === 'Upcoming' ? 'bg-blue-500/90 text-white' : event.status === 'Registration Open' ? 'bg-green-500/90 text-white' : 'bg-purple-500/90 text-white'}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30">
                      {event.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {event.description}
                  </p>
                </div>

                {/* Event Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Date */}
                  <div className="flex items-start gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${event.color}`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[10px] font-semibold mb-0.5">Date</p>
                      <p className="text-white font-bold text-xs">{event.date}</p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-accent-500/50 transition-all duration-300">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${event.color}`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[10px] font-semibold mb-0.5">Time</p>
                      <p className="text-white font-bold text-xs">{event.time}</p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${event.color}`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[10px] font-semibold mb-0.5">Venue</p>
                      <p className="text-white font-bold text-xs">{event.venue}</p>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="flex items-start gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-accent-500/50 transition-all duration-300">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${event.color}`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[10px] font-semibold mb-0.5">Participants</p>
                      <p className="text-white font-bold text-xs">{event.participants}</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-1">
                  <button className={`w-full bg-gradient-to-r ${event.color} text-white font-bold py-3 px-5 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn`}>
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                      Register Now
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
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
