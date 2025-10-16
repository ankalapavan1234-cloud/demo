import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Projects data (same as in Projects.jsx)
  const projects = [
    {
      id: 1,
      title: 'Smart Campus Navigation System',
      category: 'IoT',
      description: 'IoT-based indoor navigation system using BLE beacons for seamless campus navigation.',
      longDescription: 'An innovative IoT solution that helps students and visitors navigate the campus using Bluetooth Low Energy (BLE) beacons. The system provides real-time location tracking, shortest path calculation, and accessibility features for differently-abled users.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=3840&h=2160&fit=crop&q=80',
      technologies: ['React Native', 'Node.js', 'BLE Beacons', 'MongoDB'],
      teamSize: 5,
      duration: '4 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        'Winner - National IoT Hackathon 2024',
        'Reduced navigation time by 60%',
        'Implemented in 3 educational institutions'
      ]
    },
    {
      id: 2,
      title: 'AI-Powered Exam Proctoring',
      category: 'AI/ML',
      description: 'Machine learning system for automated exam proctoring with facial recognition and behavior analysis.',
      longDescription: 'Advanced AI system that monitors students during online exams using computer vision and machine learning. Detects suspicious behavior, multiple faces, and unusual activities while maintaining student privacy.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
      teamSize: 4,
      duration: '6 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '95% accuracy in behavior detection',
        'Published research paper in IEEE',
        'Adopted by 5 universities'
      ]
    },
    {
      id: 3,
      title: 'Student Collaboration Platform',
      category: 'Web Development',
      description: 'Full-stack web platform for students to collaborate on projects, share resources, and network.',
      longDescription: 'Comprehensive collaboration platform that enables students to form teams, manage projects, share academic resources, and connect with peers across different departments and universities.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=3840&h=2160&fit=crop&q=80',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
      teamSize: 6,
      duration: '5 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '2000+ active users',
        'Best Web App Award 2024',
        'Featured in tech magazine'
      ]
    },
    {
      id: 4,
      title: 'Blockchain Certificate Verification',
      category: 'Blockchain',
      description: 'Decentralized system for issuing and verifying academic certificates using blockchain technology.',
      longDescription: 'Revolutionary blockchain-based solution for issuing tamper-proof digital certificates. Employers and institutions can instantly verify credentials without contacting the issuing organization.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'IPFS'],
      teamSize: 4,
      duration: '5 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        'Winner - Blockchain Hackathon',
        'Zero certificate fraud',
        'Partnership with 3 colleges'
      ]
    },
    {
      id: 5,
      title: 'Mental Health Chatbot',
      category: 'AI/ML',
      description: 'AI chatbot providing mental health support and resources for students facing stress and anxiety.',
      longDescription: 'Empathetic AI chatbot trained on psychological counseling data to provide immediate support to students. Features mood tracking, stress management techniques, and emergency contact routing.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'NLP', 'DialogFlow', 'Flutter', 'Firebase'],
      teamSize: 3,
      duration: '4 months',
      status: 'In Progress',
      github: '#',
      demo: '#',
      achievements: [
        '500+ students helped',
        'Social Impact Award',
        'Collaboration with counseling center'
      ]
    },
    {
      id: 6,
      title: 'Campus Event Management App',
      category: 'Mobile Apps',
      description: 'Mobile application for discovering, managing, and attending campus events with QR-based check-ins.',
      longDescription: 'All-in-one mobile solution for campus event management. Students can discover events, register, receive notifications, and check-in using QR codes. Organizers get real-time attendance analytics.',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=3840&h=2160&fit=crop&q=80',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      teamSize: 4,
      duration: '3 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '5000+ downloads',
        'Used in 50+ events',
        'Best Mobile App Award'
      ]
    },
    {
      id: 7,
      title: 'Library Resource Predictor',
      category: 'Data Science',
      description: 'Predictive analytics system to forecast library resource demand and optimize book procurement.',
      longDescription: 'Data science project that analyzes historical borrowing patterns, course schedules, and trending topics to predict which books and resources will be in high demand, helping libraries optimize their inventory.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Tableau', 'SQL'],
      teamSize: 3,
      duration: '3 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '85% prediction accuracy',
        'Reduced resource wastage by 40%',
        'Published in data science journal'
      ]
    },
    {
      id: 8,
      title: 'Smart Attendance System',
      category: 'IoT',
      description: 'Automated attendance tracking using facial recognition and geo-fencing technology.',
      longDescription: 'Smart attendance system combining facial recognition with geo-fencing to automatically mark attendance when students enter the classroom. Reduces time wastage and prevents proxy attendance.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'MySQL', 'Flask'],
      teamSize: 4,
      duration: '4 months',
      status: 'In Progress',
      github: '#',
      demo: '#',
      achievements: [
        'Pilot program in 10 classrooms',
        '99% accuracy rate',
        'Innovation Award Winner'
      ]
    },
    {
      id: 9,
      title: 'E-Learning Content Recommender',
      category: 'AI/ML',
      description: 'Machine learning system that recommends personalized learning content based on student performance.',
      longDescription: 'Intelligent recommendation engine that analyzes student learning patterns, quiz performance, and interests to suggest personalized study materials, videos, and practice problems for better outcomes.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=3840&h=2160&fit=crop&q=80',
      technologies: ['Python', 'TensorFlow', 'Django', 'React', 'PostgreSQL'],
      teamSize: 5,
      duration: '5 months',
      status: 'Completed',
      github: '#',
      demo: '#',
      achievements: [
        '30% improvement in test scores',
        'Used by 1000+ students',
        'EdTech Innovation Prize'
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(projectId));

  useEffect(() => {
    window.scrollTo(0, 0);

    if (project) {
      gsap.fromTo('.project-hero',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate('/projects')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => navigate('/projects')}
            className="project-hero mb-6 flex items-center gap-2 text-white font-bold hover:gap-3 transition-all"
          >
            <span>←</span> Back to Projects
          </button>

          <div className="project-hero max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-white text-gray-900 text-sm font-bold rounded-lg uppercase">
                {project.category}
              </span>
              <span className={`px-3 py-1.5 text-sm font-bold rounded-lg uppercase ${
                project.status === 'Completed' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-yellow-500 text-white'
              }`}>
                {project.status}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 font-medium leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - 2/3 */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Image */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* About Project */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-3xl font-black text-gray-900 mb-4">About the Project</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-3xl font-black text-gray-900 mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-green-100 text-green-800 font-bold rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-3xl font-black text-gray-900 mb-4">Key Achievements</h2>
                <ul className="space-y-3">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar - 1/3 */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Project Stats */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-black text-gray-900 mb-4">Project Stats</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-bold text-gray-600 uppercase mb-1">Team Size</p>
                      <p className="text-3xl font-black text-gray-900">{project.teamSize} Members</p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-bold text-gray-600 uppercase mb-1">Duration</p>
                      <p className="text-3xl font-black text-gray-900">{project.duration}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-bold text-gray-600 uppercase mb-1">Category</p>
                      <p className="text-xl font-black text-gray-900">{project.category}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-bold text-gray-600 uppercase mb-1">Status</p>
                      <p className={`text-xl font-black ${
                        project.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Team */}
                <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-6 shadow-lg text-white">
                  <h3 className="text-xl font-black mb-3">Interested in This Project?</h3>
                  <p className="text-white/90 mb-4 font-medium">
                    Connect with the team to learn more or collaborate.
                  </p>
                  <button className="w-full bg-white text-green-700 px-4 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                    Contact Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
