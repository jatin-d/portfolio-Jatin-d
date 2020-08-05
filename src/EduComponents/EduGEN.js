import React from 'react';
import './EduGEN.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
import {flash} from 'react-animations'


const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`
const Flash = styled.div`animation: 4s ${keyframes`${flash}`} infinite`



export default function EduGEN(props) {
    return(
        <BounceInRight className="education-description-wrapper" delay={2}>
            <div >
                <p className="education-text">I took my primary education in a small village in India.</p>
                <p className="education-text">I went to high school in a relatively big town.</p> 
                <p className="education-text">For graduating in Engineering, I went to one of the  biggest cities in my province.</p> 
                <p className="education-text">My most recent class room was in one of the most liveable cities in the world - Melbourne</p> 
                <p className="education-text"><em><b>Which means…</b></em></p> 
                <p className="education-text">Along with academic excellence, education meant so many life lessons for me.</p>
                <p className="education-text"><em><b>I enjoyed being…</b></em></p>
                <p className="education-text">A competitor and participant in painting competitions, public speaking and science fairs in high school.</p> 
                <p className="education-text">Best wicket keeper batsman in my secondary school cricket team</p> 
                <p className="education-text">Always available event manager in my university class and</p> 
                <p className="education-text">A silent but fast learner in General Assembly class</p>
                <Flash className='education-instruction experience-text'>
                    <p className='education-instruction-text'><i class="far fa-arrow-alt-circle-left"></i> Click tabs to know more about my education </p>
                </Flash>   
            </div>     
        </BounceInRight> 
    ) 
}