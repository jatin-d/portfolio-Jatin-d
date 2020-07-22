import React from 'react'
import './About.css'
import AboutAnimate from './AboutAnimate'

function About(){
    return(
        <div className="about-container">
            <main className="about-text">
                <p className='address'>Hello,</p>
                <p className='intro'>I am Jatin</p>
                <p className='details'>A Full-Stack Web Developer based in Melbourne, Australia.</p>
                <p className='details'>Love to draw, create and make things run.</p>
            </main>
            <aside className='about-animation-container'>
                <AboutAnimate />
            </aside>
        </div>
      
    )
}

export default About