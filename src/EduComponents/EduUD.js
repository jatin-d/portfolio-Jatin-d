import React from 'react';
import './EduUD.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function EduUD(props) {
    return(
        <BounceInRight className="education-description-wrapper" delay={2}>
            <div >
                <p className="education-title-text">Udemy</p> 
                <p className='education-text'>Completed a 40+ hour course on Figma. Learned basics of designing UI using Figma.</p> 
            </div>     
        </BounceInRight> 
    ) 
}