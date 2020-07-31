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
                <p className='experience-title-text'>Larsen & Toubro Ltd India</p> 
                <p className='experience-text'>Managed packages up to $90 million In EPC projects valued $800 million to $1100 million. Assuming a role of package manager, took responsibility of packages from concept to handover. Managed team of up to 8 junior engineers. Resolved technical challenges by meticulous thinking analytical skills. Added values by optimizing, and standardizing.</p>
            </div>     
        </BounceInRight> 
    ) 
}