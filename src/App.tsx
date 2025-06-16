import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ContentCreator from './components/ContentCreator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ContentCreator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;