import React from 'react'
import './About.css'
import AboutAnimate from './AboutAnimate'

function About(){
    return(
        <div className="about-container">
            <main className="about-text">
                <div className="about-intro">
                    <div className="about-intro-text-wrapper">
                        <p className='address'>Hello,</p>
                        <p className='intro'>I am Jatin</p>
                        <p className='details'>A Full-Stack Web Developer based in Melbourne, Australia.</p>
                        <p className='details'>Love to draw, create and make things run.</p>
                    </div>
                    <div className="about-intro-navigation">
                        <div className='about-intro-navigation-link' href="">Profile and prowesses</div>
                        <div className='about-intro-navigation-link' href="">A kaleidoscopic journey</div>
                        <div className='about-intro-navigation-link' href="">Education</div>
                        <div className='about-intro-navigation-link' href="">Coding endeavors</div>
                        <div className='about-intro-navigation-link' href="">Get in touch</div>
                    </div>
                </div>
            </main>
            <aside className='about-animation-container'>
                <AboutAnimate />
            </aside>
        </div>
      
    )
}

export default About