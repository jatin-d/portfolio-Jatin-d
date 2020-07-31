import React from 'react';
import './EduGU.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function EduGU(props) {
    return(
        <BounceInRight className="education-description-wrapper" delay={2}>
            <div >
                <p className="education-title-text">Gujarat University</p> 
                <p className='education-text'>While learning fundamentals of mechanical engineering, enjoyed university days making friends. Played cricket for collage team. Being enthusiastic about technology,  learned computer aided design and secured a job in a power plant designing company.</p> 
            </div>     
        </BounceInRight> 
    ) 
}