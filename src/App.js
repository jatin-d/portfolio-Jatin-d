import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Profile from './Profile';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header className='main-header' />
      <About />
      <Profile />
      <Experience id="resume" />
      <Education />
      <Portfolio id="projects"/>
      <Contact id="contact"/>
      <Footer />
    </div>
  );
}

export default App;
