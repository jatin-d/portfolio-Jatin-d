import React from 'react'
import './About.css'
import AboutAnimate from './AboutAnimate'
import styled, { keyframes } from 'styled-components'
import {fadeInLeft} from 'react-animations'
import {bounceInLeft} from 'react-animations'
import Typical from 'react-typical'




const FadeIn = styled.div`animation: 2s ${keyframes`${fadeInLeft}`}`
const BounceInLeft = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInLeft}`}`

function getLinkElement(text, delay){
    return <BounceInLeft delay={delay}>
    <div className='about-intro-navigation-link' href="">{text}</div>
    </BounceInLeft>
}

function About(){
    return(
        <div className="about-container">
            <main className="about-text">
                <div className="about-intro">
                        <div className="about-intro-text-wrapper">
                            <FadeIn className='intro-address'>
                                <p className='address'>Hello, I am Jatin</p>
                            </FadeIn>
                            <Typical
                                className ='typical'
                                loop={Infinity}
                                wrapper='b'
                                steps ={[
                                    'A Full-Stack Web Developer', 1000,
                                    'A technology enthusiast', 1000,
                                    'Who loves the game of Cricket', 1000,
                                    'A husband and a father', 1000,
                                    'Who loves to travel', 1000,
                                ]}>    
                            </Typical>
                        </div>
                    <div className="about-intro-navigation">
                        {getLinkElement('Profile and prowesses', 1.25)}
                        {getLinkElement('A kaleidoscopic journey @ work', 1.5)}
                        {getLinkElement('Education and Life lessons', 1.75)}
                        {getLinkElement('Coding endeavors', 2)}
                        {getLinkElement('Play while I play', 2.25)}
                        {getLinkElement('Get in touch', 2.50)}
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