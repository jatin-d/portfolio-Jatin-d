import React from 'react';
import './ExpGA.css';
import styled, { keyframes } from 'styled-components'
// import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'

// const BounceInLeft = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function ExpLT(props) {
    return(
        <BounceInRight className="experience-description-wrapper" delay={2}>
            <div >
                <p className="experience-title-text">General Assembly Melbourne</p> 
                <p className='experience-text'>An intensive 12-weeks Full-stack Boot camp covering both web development fundamentals and current industry-leading techniques. Learned HTML, CSS, JavaScript, Ruby on Rails, Node.js, PostgreSQL, Sinatra, React.js, jQuery, Bootstrap, underscore.js, postman and many more. Gained more then 700 hours of development experience. Practiced coding for over 600 hours.</p> 
            </div>     
        </BounceInRight> 
    ) 
}