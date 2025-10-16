import React, { useEffect, useRef } from 'react';import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';import { gsap } from 'gsap'    {

import { ScrollTrigger } from 'gsap/ScrollTrigger';      title: 'Hackathon 48hrs',

      date: 'April 5-7, 2024',

gsap.registerPlugin(ScrollTrigger);      category: 'Hackathon',

      description:

const Events = () => {        '48-hour intensive coding marathon. Build innovative solutions to real-world problems.',

  const sectionRef = useRef(null);      details: 'Code non-stop for 48 hours! Free food, mentorship from industry experts, and amazing prizes. Top 3 teams get internship opportunities.',

  const titleRef = useRef(null);      image: '💻',

  const eventsRef = useRef(null);      color: 'from-orange-500 to-red-500',

      status: 'Registration Open',

  useEffect(() => {      venue: 'Innovation Center',

    const ctx = gsap.context(() => {      participants: '200+ Teams',

      gsap.fromTo(titleRef.current,    },

        {    {

          opacity: 0,      title: 'Tech Talk Series',

          y: 50,      date: 'March 25, 2024',

        },      category: 'Seminar',

        {      description:

          scrollTrigger: {        'Expert sessions on emerging technologies, career guidance, and industry insights from tech leaders.',

            trigger: titleRef.current,      details: 'Guest speakers from Microsoft, Amazon, and startups! Topics: Cloud Computing, Blockchain, Career Tips. Free entry with networking dinner.',

            start: 'top 80%',      image: '🎤',

          },      color: 'from-green-500 to-emerald-500',

          opacity: 1,      status: 'Upcoming',

          y: 0,      venue: 'Conference Hall',

          duration: 0.8,      participants: '300+ Attendees',

        }    },

      );  ];rollTrigger } from 'gsap/ScrollTrigger';



      gsap.fromTo('.event-card',gsap.registerPlugin(ScrollTrigger);

        {

          opacity: 0,const Events = () => {

          y: 100,  const sectionRef = useRef(null);

        },  const titleRef = useRef(null);

        {  const eventsRef = useRef(null);

          scrollTrigger: {

            trigger: eventsRef.current,  useEffect(() => {

            start: 'top 80%',    const ctx = gsap.context(() => {

          },      gsap.fromTo(titleRef.current,

          opacity: 1,        {

          y: 0,          opacity: 0,

          duration: 0.8,          y: 50,

          stagger: 0.15,        },

          ease: 'power3.out',        {

        }          scrollTrigger: {

      );            trigger: titleRef.current,

    }, sectionRef);            start: 'top 80%',

          },

    return () => ctx.revert();          opacity: 1,

  }, []);          y: 0,

          duration: 0.8,

  const events = [        }

    {      );

      title: 'TechFest 2024',

      date: 'March 15-17, 2024',      gsap.fromTo('.event-card',

      category: 'Competition',        {

      description:          opacity: 0,

        'Annual technical festival featuring coding competitions, robotics challenges, and project exhibitions.',          y: 100,

      details: 'Join us for 3 days of innovation! Compete in coding challenges, showcase your robotics projects, and network with industry leaders. Prizes worth $10,000+',        },

      image: '🎪',        {

      color: 'from-violet-500 to-purple-500',          scrollTrigger: {

      status: 'Upcoming',            trigger: eventsRef.current,

      venue: 'Main Campus Auditorium',            start: 'top 80%',

      participants: '500+ Expected',          },

    },          opacity: 1,

    {          y: 0,

      title: 'AI & ML Workshop',          duration: 0.8,

      date: 'February 28, 2024',          stagger: 0.15,

      category: 'Workshop',          ease: 'power3.out',

      description:        }

        'Hands-on workshop on machine learning fundamentals and practical applications with industry experts.',      );

      details: 'Learn from Google AI engineers! Topics include neural networks, deep learning, and real-world ML applications. Certificates provided.',    }, sectionRef);

      image: '🤖',

      color: 'from-blue-500 to-cyan-500',    return () => ctx.revert();

      status: 'Upcoming',  }, []);

      venue: 'Tech Lab Building',

      participants: '100 Seats',  const events = [

    },    {

    {      title: 'TechFest 2024',

      title: 'Hackathon 48hrs',      date: 'March 15-17, 2024',

      date: 'April 5-7, 2024',      category: 'Competition',

      category: 'Hackathon',      description:

      description:        'Annual technical festival featuring coding competitions, robotics challenges, and project exhibitions.',

        '48-hour intensive coding marathon. Build innovative solutions to real-world problems.',      details: 'Join us for 3 days of innovation! Compete in coding challenges, showcase your robotics projects, and network with industry leaders. Prizes worth $10,000+',

      details: 'Code non-stop for 48 hours! Free food, mentorship from industry experts, and amazing prizes. Top 3 teams get internship opportunities.',      image: '🎪',

      image: '💻',      color: 'from-violet-500 to-purple-500',

      color: 'from-orange-500 to-red-500',      status: 'Upcoming',

      status: 'Registration Open',      venue: 'Main Campus Auditorium',

      venue: 'Innovation Center',      participants: '500+ Expected',

      participants: '200+ Teams',    },

    },    {

    {      title: 'AI & ML Workshop',

      title: 'Tech Talk Series',      date: 'February 28, 2024',

      date: 'March 25, 2024',      category: 'Workshop',

      category: 'Seminar',      description:

      description:        'Hands-on workshop on machine learning fundamentals and practical applications with industry experts.',

        'Expert sessions on emerging technologies, career guidance, and industry insights from tech leaders.',      details: 'Learn from Google AI engineers! Topics include neural networks, deep learning, and real-world ML applications. Certificates provided.',

      details: 'Guest speakers from Microsoft, Amazon, and startups! Topics: Cloud Computing, Blockchain, Career Tips. Free entry with networking dinner.',      image: '🤖',

      image: '🎤',      color: 'from-blue-500 to-cyan-500',

      color: 'from-green-500 to-emerald-500',      status: 'Upcoming',

      status: 'Upcoming',      venue: 'Tech Lab Building',

      venue: 'Conference Hall',      participants: '100 Seats',

      participants: '300+ Attendees',    },

    },    {

  ];      title: 'Hackathon 48hrs',

      date: 'April 5-7, 2024',

  return (      category: 'Hackathon',

    <section      description:

      id="events"        '48-hour intensive coding marathon. Build innovative solutions to real-world problems.',

      ref={sectionRef}      details: 'Code non-stop for 48 hours! Free food, mentorship from industry experts, and amazing prizes. Top 3 teams get internship opportunities.',

      className="py-20 lg:py-32 relative overflow-hidden bg-gray-900"      image: '�',

    >      color: 'from-orange-500 to-red-500',

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">      status: 'Registration Open',

        {/* Section Title */}      venue: 'Innovation Center',

        <div ref={titleRef} className="text-center mb-16">      participants: '200+ Teams',

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">    },

            Upcoming <span className="gradient-text">Events</span>  ];

          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">  return (

            Participate in exciting events, workshops, and competitions that help you    <section

            grow professionally and personally.      id="events"

          </p>      ref={sectionRef}

        </div>      className="py-20 lg:py-32 relative overflow-hidden bg-gray-900"

    >

        {/* Events Grid - Now 4 columns */}      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div ref={eventsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">        {/* Section Title */}

          {events.map((event, index) => (        <div ref={titleRef} className="text-center mb-16">

            <div          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">

              key={index}            Upcoming <span className="gradient-text">Events</span>

              className="event-card group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"          </h2>

              style={{ perspective: '1000px' }}          <p className="text-xl text-gray-300 max-w-3xl mx-auto">

            >            Participate in exciting events, workshops, and competitions that help you

              {/* Gradient Header with Animated Icon */}            grow professionally and personally.

              <div          </p>

                className={`h-48 bg-gradient-to-br ${event.color} flex items-center justify-center text-7xl relative overflow-hidden`}        </div>

              >

                {/* Animated Background Overlay */}        {/* Events Grid */}

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>        <div ref={eventsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                          {events.map((event, index) => (

                {/* Animated Circles */}            <div

                <div className="absolute inset-0 opacity-10">              key={index}

                  <div className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>              className="event-card group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>              style={{ perspective: '1000px' }}

                </div>            >

              {/* Gradient Header with Animated Icon */}

                {/* Icon with Scale Animation */}              <div

                <span className="relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">                className={`h-56 bg-gradient-to-br ${event.color} flex items-center justify-center text-9xl relative overflow-hidden`}

                  {event.image}              >

                </span>                {/* Animated Background Overlay */}

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Status Badge on Image */}                

                <div className="absolute top-3 right-3">                {/* Animated Circles */}

                  <span                <div className="absolute inset-0 opacity-10">

                    className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border-2 border-white/50 ${                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                      event.status === 'Upcoming'                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>

                        ? 'bg-blue-500/90 text-white'                </div>

                        : event.status === 'Registration Open'

                        ? 'bg-green-500/90 text-white'                {/* Icon with Scale Animation */}

                        : 'bg-purple-500/90 text-white'                <span className="relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">

                    }`}                  {event.image}

                  >                </span>

                    {event.status}

                  </span>                {/* Status Badge on Image */}

                </div>                <div className="absolute top-4 right-4">

              </div>                  <span

                    className={`px-4 py-2 text-xs font-bold rounded-full backdrop-blur-md border-2 border-white/50 ${

              {/* Content Section */}                      event.status === 'Upcoming'

              <div className="p-5 relative">                        ? 'bg-blue-500/90 text-white'

                {/* Decorative Border */}                        : event.status === 'Registration Open'

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>                        ? 'bg-green-500/90 text-white'

                        : 'bg-purple-500/90 text-white'

                {/* Category Badge */}                    }`}

                <div className="mb-3">                  >

                  <span className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-xs font-bold rounded-full inline-flex items-center shadow-sm">                    {event.status}

                    <span className="w-1.5 h-1.5 bg-gray-800 rounded-full mr-2"></span>                  </span>

                    {event.category}                </div>

                  </span>              </div>

                </div>

              {/* Content Section */}

                {/* Title with Gradient on Hover */}              <div className="p-6 relative">

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">                {/* Decorative Border */}

                  {event.title}                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                </h3>

                {/* Category Badge */}

                {/* Date and Venue Info */}                <div className="mb-4">

                <div className="space-y-2 mb-3">                  <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm font-bold rounded-full inline-flex items-center shadow-sm">

                  <div className="flex items-center text-gray-600">                    <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>

                    <svg                    {event.category}

                      className="w-4 h-4 mr-2 text-primary-500"                  </span>

                      fill="none"                </div>

                      stroke="currentColor"

                      viewBox="0 0 24 24"                {/* Title with Gradient on Hover */}

                    >                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">

                      <path                  {event.title}

                        strokeLinecap="round"                </h3>

                        strokeLinejoin="round"

                        strokeWidth={2}                {/* Date and Venue Info */}

                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"                <div className="space-y-2 mb-4">

                      />                  <div className="flex items-center text-gray-600">

                    </svg>                    <svg

                    <span className="text-xs font-semibold">{event.date}</span>                      className="w-5 h-5 mr-2 text-primary-500"

                  </div>                      fill="none"

                  <div className="flex items-center text-gray-600">                      stroke="currentColor"

                    <svg                      viewBox="0 0 24 24"

                      className="w-4 h-4 mr-2 text-accent-500"                    >

                      fill="none"                      <path

                      stroke="currentColor"                        strokeLinecap="round"

                      viewBox="0 0 24 24"                        strokeLinejoin="round"

                    >                        strokeWidth={2}

                      <path                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"

                        strokeLinecap="round"                      />

                        strokeLinejoin="round"                    </svg>

                        strokeWidth={2}                    <span className="text-sm font-semibold">{event.date}</span>

                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"                  </div>

                      />                  <div className="flex items-center text-gray-600">

                      <path                    <svg

                        strokeLinecap="round"                      className="w-5 h-5 mr-2 text-accent-500"

                        strokeLinejoin="round"                      fill="none"

                        strokeWidth={2}                      stroke="currentColor"

                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"                      viewBox="0 0 24 24"

                      />                    >

                    </svg>                      <path

                    <span className="text-xs font-medium">{event.venue}</span>                        strokeLinecap="round"

                  </div>                        strokeLinejoin="round"

                </div>                        strokeWidth={2}

                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"

                {/* Description */}                      />

                <p className="text-gray-600 leading-relaxed mb-3 text-xs line-clamp-3">                      <path

                  {event.description}                        strokeLinecap="round"

                </p>                        strokeLinejoin="round"

                        strokeWidth={2}

                {/* Participants Info */}                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"

                <div className="flex items-center gap-2 mb-4">                      />

                  <svg                    </svg>

                    className="w-4 h-4 text-gray-500"                    <span className="text-sm font-medium">{event.venue}</span>

                    fill="none"                  </div>

                    stroke="currentColor"                </div>

                    viewBox="0 0 24 24"

                  >                {/* Description */}

                    <path                <p className="text-gray-600 leading-relaxed mb-4 text-sm">

                      strokeLinecap="round"                  {event.description}

                      strokeLinejoin="round"                </p>

                      strokeWidth={2}

                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"                {/* Participants Info */}

                    />                <div className="flex items-center gap-2 mb-5">

                  </svg>                  <svg

                  <span className="text-xs font-semibold text-gray-700">{event.participants}</span>                    className="w-5 h-5 text-gray-500"

                </div>                    fill="none"

                    stroke="currentColor"

                {/* CTA Buttons */}                    viewBox="0 0 24 24"

                <div className="flex gap-2">                  >

                  <button                    <path

                    className={`flex-1 bg-gradient-to-r ${event.color} text-white font-bold py-2.5 px-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn text-sm`}                      strokeLinecap="round"

                  >                      strokeLinejoin="round"

                    <span className="relative z-10">Register</span>                      strokeWidth={2}

                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"

                  </button>                    />

                  <button                  </svg>

                    className="px-3 py-2.5 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 hover:shadow-md"                  <span className="text-sm font-semibold text-gray-700">{event.participants}</span>

                    title="View Details"                </div>

                  >

                    <svg                {/* CTA Buttons */}

                      className="w-4 h-4"                <div className="flex gap-3">

                      fill="none"                  <button

                      stroke="currentColor"                    className={`flex-1 bg-gradient-to-r ${event.color} text-white font-bold py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn`}

                      viewBox="0 0 24 24"                  >

                    >                    <span className="relative z-10">Register Now</span>

                      <path                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>

                        strokeLinecap="round"                  </button>

                        strokeLinejoin="round"                  <button

                        strokeWidth={2}                    className="px-4 py-3 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 hover:shadow-md"

                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"                    title="View Details"

                      />                  >

                    </svg>                    <svg

                  </button>                      className="w-5 h-5"

                </div>                      fill="none"

                      stroke="currentColor"

                {/* Hover Overlay with Details */}                      viewBox="0 0 24 24"

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5 pointer-events-none">                    >

                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">                      <path

                    <p className="text-xs leading-relaxed font-medium">                        strokeLinecap="round"

                      {event.details}                        strokeLinejoin="round"

                    </p>                        strokeWidth={2}

                  </div>                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"

                </div>                      />

              </div>                    </svg>

                  </button>

              {/* Glowing Border on Hover */}                </div>

              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

            </div>                {/* Hover Overlay with Details */}

          ))}                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 pointer-events-none">

        </div>                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                    <p className="text-sm leading-relaxed font-medium">

        {/* View All Button */}                      {event.details}

        <div className="text-center mt-16">                    </p>

          <button className="group px-10 py-5 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold text-lg rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden">                  </div>

            <span className="relative z-10 flex items-center gap-2">                </div>

              View All Events              </div>

              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />              {/* Glowing Border on Hover */}

              </svg>              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

            </span>            </div>

          </button>          ))}

        </div>        </div>

      </div>

    </section>        {/* View All Button */}

  );        <div className="text-center mt-16">

};          <button className="group px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold text-lg rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden">

            <span className="relative z-10 flex items-center gap-2">

export default Events;              View All Events

              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;

