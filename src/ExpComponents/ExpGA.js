import React from 'react';
import './ExpGA.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
import { 
    Link,
    // Redirect,
} from 'react-router-dom'

const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function ExpGA(props) {
    return(
        <BounceInRight className="experience-description-wrapper" delay={2}>
            <div >
                <p className="experience-text">In second inning of my career…
                to fulfil my desire to create and colour,</p> 
                <p className="experience-text">to satisfy my unflinching urge </p><p className="experience-text">to solve problems, and learn new things,</p>
                <p className="experience-text">to comply with my motto ‘I can’t afford to be outdated’,</p> 
                <p className="experience-text">to be a part of a team that celebrates even tiniest success and faces darkest hours of challenges, be it chasing a narrow deadline or implementing ‘first of its kind’ technologies,</p>
                <p className="experience-text">I chose to be a software engineer and joined <em><b>Software Engineering Immersive</b></em> course at <em><b>General Assembly - Melbourne</b></em></p>
                
                <p className='experience-text'>Software Engineering Immersive is an intensive 12-weeks Full-stack Boot camp covering both web development fundamentals and current industry-leading techniques. Learned HTML, CSS, JavaScript, Ruby on Rails, Node.js, PostgreSQL, Sinatra, React.js, jQuery, Bootstrap, underscore.js, postman and many more. Gained more then 700 hours of development experience. Practiced coding for over 600 hours.</p> 

                <p className='experience-text'>I have captured some of my learnings as projects. Visit my <Link className="router-link" to="/portfolio"><div className='experience-internal-link' href=""><em><b>Portfolio <i class="far fa-arrow-alt-circle-right"></i></b></em></div></Link></p>
            </div>     
        </BounceInRight> 
    ) 
}