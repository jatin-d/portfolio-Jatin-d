import React from 'react';
import './ExpGA.css';
import styled, { keyframes } from 'styled-components'
// import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'

// const BounceInLeft = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function ExpSE(props) {
    return(
        <BounceInRight className="experience-description-wrapper" delay={2}>
            <div >
                <p className='experience-title-text'>7-Eleven Australia</p>
                <p className='experience-text'>While setting up my feet in Australia, enjoyed meeting new people everyday. Learned culture and people. Led a team to achieve best practices and learned managing diverse team. Gained experience in managing business and dealing with head-office.</p>  
            </div>     
        </BounceInRight> 
    ) 
}