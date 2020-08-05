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
                <p className='experience-text'>Motivate and led a team of Retail Assistants, including training and on job mentoring.</p>
                <p className='experience-text'>Maintained excellent store standards, cleanliness and functionality of store equipment. 
                <p className='experience-text'>Carried workforce planning and rostering based on store and staff requirements.</p></p>
                <p className='experience-text'>Ensured a safe working environment at all times by following policies and procedures.</p> 
                <p className='experience-text'>Enjoyed merchandising the store, updating and improving store  layout</p>
                <p className='experience-text'>While setting my foot in Australia, I enjoyed meeting new people everyday, learning about culture and customs. I led a team to achieve best practices and learned managing a diverse team. I gained experience in managing business and liaising with head-office and other stake holders.</p>  
            </div>     
        </BounceInRight> 
    ) 
}