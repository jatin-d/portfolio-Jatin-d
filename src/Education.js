import React from 'react';
import './Education.css';
import styled, { keyframes } from 'styled-components'
import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'
import {flash} from 'react-animations'
import EduGA from './EduComponents/EduGA'
import EduGU from './EduComponents/EduGU'
import EduUD from './EduComponents/EduUD'
import EduGEN from './EduComponents/EduGEN';

const BounceInLeft = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`
const Flash = styled.div`animation: 4s ${keyframes`${flash}`} infinite`

class Education extends React.Component {
    state = {
        section: ["general"]
    }
    renderSelection = exp =>{
        this.setState({
            section: [exp]
        })
    }
    render = () => {
        return(
            <div className="education-container">
                <div className="education-mobile-view-wrapper">
                    <div className="education-text-left-container">
                        <BounceInRight delay={2}>
                            <h6 className="education-heading">Education</h6>
                        </BounceInRight>
                        <BounceInRight delay={2}>
                        {this.state.section[0] === "ga"? (
                            <div className="education-description-right-wrapper"> 
                                <EduGA />
                            </div>  
                            ):this.state.section[0] === "ud"? (
                            <div className="education-description-right-wrapper"> 
                                <EduUD />
                            </div> 
                            ):this.state.section[0] === "gu"?(
                            <div className="education-description-right-wrapper"> 
                                <EduGU />
                            </div> 
                            ):(
                            <div className="education-description-right-wrapper"> 
                                <EduGEN />
                            </div> 
                            )
                        }  
                        </BounceInRight>
                        <BounceInLeft delay={2}>
                            <Flash className='education-instruction-mobile-view'>
                                <p className='education-instruction-text'><i class="far fa-arrow-alt-circle-down"></i> Click tabs to know more about my education </p>
                            </Flash>
                            <div className="education-title-wrapper">
                                <button onClick={()=>this.renderSelection("ga")} className="education-select-button">
                                    <div className="education-title-container">
                                        <h6 className='education-sub-heading'>Software Engineering Immersive <i className="far fa-arrow-alt-circle-right"></i></h6>
                                        <p className='education-title-text'>General Assembly Melbourne</p> 
                                        <p className='education-title-text'>2020</p> 
                                    </div>
                                </button>
                                <button onClick={()=>this.renderSelection("ud")} className="education-select-button">
                                    <div className="education-title-container">
                                        <h6 className='education-sub-heading'>Self Learning <i className="far fa-arrow-alt-circle-right"></i></h6>
                                        <p className='education-title-text'>Udemy | SoloLearn | O'reilly Media</p> 
                                        <p className='education-title-text'>2017 - 2019</p> 
                                    </div>
                                </button>
                                <button onClick={()=>this.renderSelection("gu")} className="education-select-button">
                                    <div className="education-title-container">
                                        <h6 className='education-sub-heading'>Bachelor Of Mechanical Engineering <i className="far fa-arrow-alt-circle-right"></i></h6>
                                        <p className='education-title-text'>Gujarat University</p> 
                                        <p className='education-title-text'>2006 - 2009</p> 
                                    </div>
                                </button>
                            </div>
                        </BounceInLeft>
                    </div>
                     

                </div>
                <div className="education-web-view-wrapper">
                    <div className="education-text-left-container">
                        <BounceInLeft delay={2}>
                            <h6 className="education-heading">Education</h6>
                            <Flash className='education-instruction-mobile-view experience-text'>
                                <p className='education-instruction-text'><i class="far fa-arrow-alt-circle-down"></i> Click tabs to know more about my education </p>
                            </Flash>
                            <div className="education-title-wrapper">
                                <button onClick={()=>this.renderSelection("ga")} className="education-select-button">
                                <div className="education-title-container">
                                    <h6 className='education-sub-heading'>Software Engineering Immersive <i className="far fa-arrow-alt-circle-right"></i></h6>
                                    <p className='education-title-text'>General Assembly Melbourne</p> 
                                    <p className='education-title-text'>2020</p> 
                                </div>
                                </button>
                                <button onClick={()=>this.renderSelection("ud")} className="education-select-button">
                                <div className="education-title-container">
                                    <h6 className='education-sub-heading'>Self Learning <i className="far fa-arrow-alt-circle-right"></i></h6>
                                    <p className='education-title-text'>Udemy | SoloLearn | O'reilly Media</p> 
                                    <p className='education-title-text'>2017 - 2019</p> 
                                </div>
                                </button>
                                <button onClick={()=>this.renderSelection("gu")} className="education-select-button">
                                <div className="education-title-container">
                                    <h6 className='education-sub-heading'>Bachelor Of Mechanical Engineering <i className="far fa-arrow-alt-circle-right"></i></h6>
                                    <p className='education-title-text'>Gujarat University</p> 
                                    <p className='education-title-text'>2006 - 2009</p> 
                                </div>
                                </button>

                            </div>
                        </BounceInLeft>
                    </div>
                    <BounceInRight delay={2}>
                    {this.state.section[0] === "ga"? (
                        <div className="education-description-right-wrapper"> 
                            <EduGA />
                        </div>  
                        ):this.state.section[0] === "ud"? (
                        <div className="education-description-right-wrapper"> 
                            <EduUD />
                        </div> 
                        ):this.state.section[0] === "gu"?(
                        <div className="education-description-right-wrapper"> 
                            <EduGU />
                        </div> 
                        ):(
                        <div className="education-description-right-wrapper"> 
                            <EduGEN />
                        </div> 
                        )
                    }  
                    </BounceInRight> 
                </div>            
            </div>
        )
    }   
}
export default Education