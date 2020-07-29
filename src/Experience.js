import React from 'react';
import './Experience.css';
import styled, { keyframes } from 'styled-components'
import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'

const BounceInLeft = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function Experience(props) {
    return(
        <div className="experience-container">
            <div className="experience-text-left-container">
                <BounceInLeft delay={2}>
                    <h6 className="experience-heading">Experience</h6>
                    <div className="experience-title-wrapper">
                        {/* <Link to="/experience/ga"> */}
                            <div className="experience-title-container">
                                <h6 className='experience-sub-heading'>Software Engineering Immersive <i class="far fa-arrow-alt-circle-right"></i></h6>
                                <p className="experience-title-text">General Assembly Melbourne</p> 
                                <p className='experience-title-text'>Mar-2020 to June-2020</p> 
                            </div>
                        {/* </Link> */}
                        <div className="experience-title-container">
                            <h6 className='experience-sub-heading'>Manager | Retail team leader  <i class="far fa-arrow-alt-circle-right"></i></h6>
                            <p className='experience-title-text'>7-Eleven Australia</p> 
                            <p className='experience-title-text'>2017 to 2020</p> 
                        </div>
                        <div className="experience-title-container">
                            <h6 className='experience-sub-heading'>Project Engineer | Mechanical  <i class="far fa-arrow-alt-circle-right"></i></h6>
                            <p className='experience-title-text'>Larsen & Toubro Ltd</p> 
                            <p className='experience-title-text'>2010 - 2017</p> 
                        </div>
                    </div>
                </BounceInLeft>
            </div>
            <BounceInRight delay={2}>
                <div className="experience-description-right-wrapper"> 
                    <div className="res-exp-ga-text">
                        <p className="experience-title-text">General Assembly Melbourne</p> 
                        <p className='experience-text'>An intensive 12-weeks Full-stack Boot camp covering both web development fundamentals and current industry-leading techniques. Learned HTML, CSS, JavaScript, Ruby on Rails, Node.js, PostgreSQL, Sinatra, React.js, jQuery, Bootstrap, underscore.js, postman and many more. Gained more then 700 hours of development experience. Practiced coding for over 600 hours.</p> 
                    </div> 
                    <div className="res-exp-se-text">
                        <p className='experience-title-text'>7-Eleven Australia</p>
                        <p className='experience-text'>While setting up my feet in Australia, enjoyed meeting new people everyday. Learned culture and people. Led a team to achieve best practices and learned managing diverse team. Gained experience in managing business and dealing with head-office.</p> 
                    </div>
                    <div className="res-exp-lt-text">
                        <p className='experience-title-text'>Larsen & Toubro Ltd India</p> 
                        <p className='experience-text'>Managed packages up to $90 million In EPC projects valued $800 million to $1100 million. Assuming a role of package manager, took responsibility of packages from concept to handover. Managed team of up to 8 junior engineers. Resolved technical challenges by meticulous thinking analytical skills. Added values by optimizing, and standardizing.</p> 
                    </div>
                </div>             
            </BounceInRight> 
        </div>
    ) 
}