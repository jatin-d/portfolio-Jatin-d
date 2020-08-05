import React from 'react';
import './EduGA.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function EduGA(props) {
    return(
        <BounceInRight className="education-description-wrapper" delay={2}>
            <div > 
                <p className='education-text'>A typical day at General assembly (GA) would start and end with a coding challenge, in which I solved different coding problems.</p> 
                <p className='education-text'>As the course progressed, I learned to create responsive web pages using <em><b>HTML5, CSS, media queries, and JavaScript(ES6)</b></em> . I also learned to build back-end applications using MVC frameworks like <em><b>Ruby and Sinatra</b></em>.</p>
                <p className='education-text'>I was trained on <em><b>NodeJS with expressJS</b></em> web framework, setting up NodeJS projects and use <em><b>Node Package Management (NPM)</b></em> for dependency management.</p>
                <p className='education-text'>I managed data with <em><b>PostgreSQL</b></em> using concepts of SQL and wrote <em><b>CRUD DB queries</b></em>. I encrypted sensitive data using <em><b>Bcrypt</b></em> and avoided security threats like <em><b>SQL injection</b></em> using <em><b>parameterized queries</b></em>.</p>
                <p className='education-text'>I implemented <em><b>RESTful APIs and RESTful routes</b></em> as per latest industry practices.</p> 
                <p className='education-text'>I developed advanced UI with <em><b>ReactJS</b></em> and learned creating React app</p> 
                <p className='education-text'>I practiced complete product life-cycle from user-stories creation to development and testing using <em><b>TDD (test driven development)</b></em> to building deliverables and code deployment.</p>
                <p className='education-text'>I enjoyed learning tools like <em><b>Github, Postman, and Heroku</b></em> for code deployment.</p>
                <p className='education-text'>It was exciting to learn deployment on <em><b>AWS using AWS S3 bucket, AWS Cloudfront</b></em> and setting up continuous integration and <em><b>continuous development (CI/CD)</b></em></p>
            </div>     
        </BounceInRight> 
    ) 
}