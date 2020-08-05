import React from 'react';
import './ExpGEN.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
import {flash} from 'react-animations'

const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`
const Flash = styled.div`animation: 4s ${keyframes`${flash}`} infinite`

export default function ExpGEN(props) {
    return(
        <BounceInRight className="experience-description-wrapper" delay={2}>
            <div >
                <p className='experience-text'>7 years as a mechanical engineer with a global engineering consulting company,</p>
                <p className='experience-text'>3 years as a retail store manager with Australia’s leading convenience store brand,</p> 
                <p className='experience-text'>20 years as a student in classrooms across the globe,</p> 
                <p className='experience-text'>25 years as a friend in different countries, cities and cultures,</p>  
                <p className='experience-text'>Cultivated in me...</p> 
                <p className='experience-text'><b><em>Adaptability – </em></b> By travelling across the world, living in diverse locations, and forming new friendships, I learned to adapt with culture, language, values, business conduct laws, and traditions.</p> 
                <p className='experience-text'><b><em>Communication skills – </em></b> By dealing with clients, vendors and teammates, I nurtured not only good spoken and written communications skills but also familiarized myself with non-verbal behaviour.</p>
                <p className='experience-text'><b><em>Critical thinking & problem solving skills – </em></b> At times, I encountered situations without clear resolutions, where I called upon my critical thinking, problem solving, logical skills and creativity in order to find solutions.</p>
                <Flash className='experience-instruction experience-text'>
                    <p className='experience-instruction-text'><i className="far fa-arrow-alt-circle-left"></i> Click tabs to know more about my professional experience </p>
                </Flash> 
            </div>     
        </BounceInRight> 
    ) 
}