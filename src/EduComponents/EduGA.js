import React from 'react';
import './EduGA.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function EduGA(props) {
    return(
        <BounceInRight className="education-description-wrapper" delay={2}>
            <div >
                <p className="education-title-text">General Assembly Melbourne</p> 
                <p className='education-text'>Learned writing responsive web pages in HTML5, CSS & JavaScript(ES6). Developed web-applications with React.js. Built back-end applications using MVC frameworks (Ruby on Rails). Employed JS and Ruby libraries such as Underscore, jQuery, and Sinatra. learned complete product life-cycles from user-stories to deployment. Practiced TDD (test driven development).</p> 
            </div>     
        </BounceInRight> 
    ) 
}