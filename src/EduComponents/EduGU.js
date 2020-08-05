import React from 'react';
import './EduGU.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function EduGU(props) {
    return(
        <BounceInRight className="education-description-wrapper" delay={2}>
            <div >
                <p className='education-text'>While learning fundamentals of mechanical engineering, I enjoyed university days making friends. I played cricket for my collage team.</p> 
                <p className='education-text'>As final year project I developed a system for salt farm workers to purify water residual heat energy from IC engines running on salt farms round the clock.</p> 
                <p className='education-text'>With exceptional scores in my favorite design subjects, I completed my graduation in 2009 with straight distinction class throughout all semesters.</p>
                <p className='education-text'>Being enthusiastic about technology,  learned computer aided design and resulting in securing a graduate trainee position in India's most reputed plant designing company.</p>
                <p className='education-text'>Staying away from home and my parents for first time taught me to become independent, manage my finances and make relationships I could rely upon.</p>
            </div>     
        </BounceInRight> 
    ) 
}