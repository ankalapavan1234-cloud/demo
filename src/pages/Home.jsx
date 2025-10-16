import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Projects from '../components/Projects';
import StudentLife from '../components/StudentLife';
import Team from '../components/Team';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Projects />
      <StudentLife />
      <Team />
    </>
  );
};

export default Home;
