import React from 'react';
import './EduGU.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function EduGU(props) {
    return(
        <BounceInRight className="education-description-wrapper" delay={2}>
            <div >
                <p className='education-text'>While learning fundamentals of mechanical engineering, I enjoyed university days making friends. I played cricket for my college team.</p> 
                <p className='education-text'>As my final year project I developed a system for salt farm workers to purify water residual heat energy from IC engines running on salt farms round the clock.</p> 
                <p className='education-text'>With exceptional scores in my favorite design subjects, I completed my graduation in 2009 with distinction.</p>
                <p className='education-text'>Being enthusiastic about technology,  learned computer aided design, resulting in me securing a graduate trainee position in India's most reputed power plant designing company.</p>
                <p className='education-text'>Staying away from home for the first time taught me to grow independent, manage my finances and build relationships I could rely upon.</p>
            </div>     
        </BounceInRight> 
    ) 
}