import React, { useState, useRef, useEffect } from 'react';

const JoinUs = () => {
  const [selectedRole, setSelectedRole] = useState('volunteer');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const roleKeys = ['researcher', 'leader', 'volunteer'];

  const roles = {
    researcher: {
      title: 'Researcher',
      description: 'As a Researcher, you\'ll dive deep into cutting-edge technologies, contribute to academic papers, collaborate on groundbreaking projects, and mentor aspiring researchers in the community.',
      journey: ['Research Papers', 'Tech Conferences', 'Innovation Labs', 'Knowledge Sharing', 'Mentor Students'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80',
      icons: ['📄', '🎤', '🔬', '📚', '👨‍🏫'],
      icon: '🔬'
    },
    leader: {
      title: 'Leader',
      description: 'As a Leader, you\'ll coordinate teams, organize impactful events, guide project development, build community connections, and inspire the next generation of tech leaders.',
      journey: ['Team Building', 'Event Planning', 'Strategic Vision', 'Community Growth', 'Leadership Development'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
      icons: ['👥', '📅', '🎯', '🌱', '⭐'],
      icon: '👑'
    },
    volunteer: {
      title: 'Volunteer',
      description: 'As a Volunteer, you\'ll support community initiatives, help organize events, contribute to impactful projects, engage with fellow members, and make a meaningful difference in the tech community.',
      journey: ['Event Support', 'Community Service', 'Project Assistance', 'Member Engagement', 'Impact Making'],
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&q=80',
      icons: ['🎪', '🤝', '�', '💬', '❤️'],
      icon: '🤝'
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    const currentIndex = roleKeys.indexOf(selectedRole);
    
    if (isLeftSwipe && currentIndex < roleKeys.length - 1) {
      // Swipe left - go to next role
      setSelectedRole(roleKeys[currentIndex + 1]);
    }
    
    if (isRightSwipe && currentIndex > 0) {
      // Swipe right - go to previous role
      setSelectedRole(roleKeys[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Join Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Become part of a community where innovation meets collaboration. Choose your path and start your journey today.
            </p>
          </div>

          {/* Role Selection Section */}
          <div 
            ref={containerRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 select-none"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center md:text-left">
              Choose your role:
              <span className="block md:hidden text-sm font-normal text-gray-500 mt-2">
                👈 Swipe to explore roles 👉
              </span>
            </h2>

            {/* Role Options */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              {Object.entries(roles).map(([key, role]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className={`flex-1 p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedRole === key
                      ? 'border-gray-900 bg-gray-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedRole === key
                          ? 'border-gray-900 bg-gray-900'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedRole === key && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span
                      className={`text-xl font-semibold transition-colors ${
                        selectedRole === key ? 'text-gray-900' : 'text-gray-600'
                      }`}
                    >
                      {role.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Swipe Indicators (Mobile Only) */}
            <div className="md:hidden flex justify-center gap-2 mb-8">
              {roleKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedRole === key ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Select ${roles[key].title}`}
                />
              ))}
            </div>

            {/* Journey Timeline */}
            <div className="mb-12">
              <h3 className="text-lg font-medium text-gray-700 mb-6 text-center">
                Your Journey Path
              </h3>
              <div className="relative">
                {/* Desktop Timeline - Horizontal */}
                <div className="hidden md:flex items-center justify-between px-8">
                  {roles[selectedRole].journey.map((step, index) => (
                    <div key={index} className="flex flex-col items-center relative group">
                      {/* Connector Line */}
                      {index < roles[selectedRole].journey.length - 1 && (
                        <div className="absolute left-full w-full h-0.5 top-8 border-t-2 border-dashed border-gray-300 group-hover:border-gray-400 transition-colors"></div>
                      )}
                      
                      {/* Icon Container with Hover Effects */}
                      <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center mb-3 relative z-10 transition-all duration-300 hover:border-gray-900 hover:scale-125 hover:shadow-lg hover:bg-white cursor-pointer group-hover:rotate-12">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{roles[selectedRole].icons[index]}</span>
                      </div>
                      
                      {/* Step Label */}
                      <span className="text-sm font-medium text-gray-700 text-center max-w-[120px] transition-colors duration-300 group-hover:text-gray-900 group-hover:font-semibold">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mobile Timeline - Vertical */}
                <div className="md:hidden space-y-6">
                  {roles[selectedRole].journey.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative group">
                      {/* Connector Line */}
                      {index < roles[selectedRole].journey.length - 1 && (
                        <div className="absolute left-8 top-16 w-0.5 h-full border-l-2 border-dashed border-gray-300 group-hover:border-gray-400 transition-colors"></div>
                      )}
                      
                      {/* Icon Container with Hover Effects */}
                      <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center relative z-10 flex-shrink-0 transition-all duration-300 hover:border-gray-900 hover:scale-110 hover:shadow-lg hover:bg-white cursor-pointer">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{roles[selectedRole].icons[index]}</span>
                      </div>
                      
                      {/* Step Label */}
                      <div className="pt-4">
                        <span className="text-base font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900 group-hover:font-semibold">
                          {step}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Role Description */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Role Image */}
                <div className="order-2 md:order-1 overflow-hidden rounded-lg group">
                  <img 
                    src={roles[selectedRole].image} 
                    alt={`${roles[selectedRole].title} role`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Role Description Text */}
                <div className="order-1 md:order-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-2xl">
                        {roles[selectedRole].icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Role: {roles[selectedRole].title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {roles[selectedRole].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <button className="px-10 py-4 bg-gray-900 text-white font-semibold text-lg rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Apply as {roles[selectedRole].title}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Join Our Community?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Accelerate Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access exclusive resources, mentorship, and opportunities to fast-track your career in technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Build Connections
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Network with like-minded innovators, industry leaders, and passionate learners from around the world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Make Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Turn your ideas into reality and contribute to projects that make a real difference in the tech community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Active Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Launched</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Events Hosted</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
