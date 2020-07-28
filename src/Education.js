import React from 'react';
import './Education.css';
import styled, { keyframes } from 'styled-components'
import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'

const BounceInLeft = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function Education(props) {
    return(
        <div className="education-container">
            <div className="education-text-left-container">
                <BounceInLeft delay={2}>
                    <h6 className="education-heading">Education</h6>
                    <div className="education-title-wrapper">
                        <div className="education-title-container">
                            <h6 className='education-sub-heading'>Software Engineering Immersive</h6>
                            <p className='education-title-text'>General Assembly Melbourne</p> 
                            <p className='education-title-text'>2020</p> 
                        </div>
                        <div className="education-title-container">
                            <h6 className='education-sub-heading'>Learn figma | UI/UX design essential training</h6>
                            <p className='education-title-text'>Udemy</p> 
                            <p className='education-title-text'>2018</p> 
                        </div>
                        <div className="education-title-container">
                            <h6 className='education-sub-heading'>Bachelor Of Mechanical Engineering</h6>
                            <p className='education-title-text'>Gujarat University</p> 
                            <p className='education-title-text'>2006 - 2009</p> 
                        </div>
                    </div>
                </BounceInLeft>
            </div>
            <BounceInRight delay={2}>
                <div className="education-description-right-wrapper"> 
                    <div className="res-exp-ga-text">
                        <p className="education-title-text">General Assembly Melbourne</p> 
                        <p className='education-text'>Learned writing responsive web pages in HTML5, CSS & JavaScript(ES6). Developed web-applications with React.js. Built back-end applications using MVC frameworks (Ruby on Rails). Employed JS and Ruby libraries such as Underscore, jQuery, and Sinatra. learned complete product life-cycles from user-stories to deployment. Practiced TDD (test driven development).</p> 
                    </div> 
                    <div className="res-exp-se-text">
                        <p className='education-title-text'>7-Eleven Australia</p>
                        <p className='education-text'>Completed a 40+ hour course on Figma. Learned basics of designing UI using Figma.</p>  
                    </div>
                    <div className="res-exp-lt-text">
                        <p className='education-title-text'>Larsen & Toubro Ltd India</p> 
                        <p className='education-text'>While learning fundamentals of mechanical engineering, enjoyed university days making friends. Played cricket for collage team. Being enthusiastic about technology, learned computer aided design and secured a job in a power plant designing company.</p> 
                    </div>
                </div>  
            </BounceInRight>           
        </div>
    ) 
}