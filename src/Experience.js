import React from 'react';
import './Experience.css';
import styled, { keyframes } from 'styled-components'
import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'
import {flash} from 'react-animations'
import ExpGA from './ExpComponents/ExpGA';
import ExpSE from './ExpComponents/ExpSE';
import ExpLT from './ExpComponents/ExpLT';
import ExpGEN from './ExpComponents/ExpGEN';

const BounceInLeft = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`
const Flash = styled.div`animation: 4s ${keyframes`${flash}`} infinite`

class Experience extends React.Component {
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
            <div className="experience-container">
                <div className="experience-mobile-view-wrapper">
                    <BounceInRight delay={2}>
                    <h6 className="experience-heading">Experience</h6>
                    </BounceInRight> 
                    {this.state.section[0] === "ga"? (
                        <BounceInRight delay={2}>
                            <div className="experience-description-right-wrapper"> 
                            <ExpGA />
                            </div>
                        </BounceInRight> 
                        ):this.state.section[0] === "se"? (
                        <BounceInRight delay={2}>
                            <div className="experience-description-right-wrapper"> 
                            <ExpSE />
                            </div>
                        </BounceInRight>
                        ):this.state.section[0] === "lt"?(
                        <BounceInRight delay={2}>
                            <div className="experience-description-right-wrapper"> 
                            <ExpLT />
                            </div> 
                        </BounceInRight>
                        ):(
                        <BounceInRight delay={2}>
                            <div className="experience-description-right-wrapper"> 
                            <ExpGEN />
                            </div> 
                        </BounceInRight> 
                        )
                    } 
                    <div className="experience-text-left-container">
                        <BounceInLeft delay={2}>
                            <Flash className='experience-instruction-mobile-view'>
                                <p className='experience-instruction-text'><i className="far fa-arrow-alt-circle-down"></i> Click tabs to know more about my experience </p>
                            </Flash> 
                            <div className="experience-title-wrapper">
                                <button onClick={()=>this.renderSelection("ga")} className="experience-select-button">
                                    <div className="experience-title-container">
                                        <h6 className='experience-sub-heading'>Software Engineering Immersive <i className="far fa-arrow-alt-circle-right"></i></h6>
                                        <p className="experience-title-text">General Assembly Melbourne</p> 
                                        <p className='experience-title-text'>Mar-2020 to June-2020</p> 
                                    </div>
                                </button>
                                <button onClick={()=>this.renderSelection("se")}  className="experience-select-button">
                                    <div className="experience-title-container">
                                        <h6 className='experience-sub-heading'>Manager | Retail team leader  <i className="far fa-arrow-alt-circle-right"></i></h6>
                                        <p className='experience-title-text'>7-Eleven Australia</p> 
                                        <p className='experience-title-text'>2017 to 2020</p> 
                                    </div>
                                </button>
                                <button onClick={()=>this.renderSelection("lt")}  className="experience-select-button">
                                    <div className="experience-title-container">
                                        <h6 className='experience-sub-heading'>Project Engineer | Mechanical <i className="far fa-arrow-alt-circle-right"></i></h6>
                                        <p className='experience-title-text'>Larsen & Toubro Ltd</p> 
                                        <p className='experience-title-text'>2010 to 2017</p> 
                                    </div>
                                </button>
                                
                            </div>
                        </BounceInLeft>
                    </div>
                </div>
                <div className="experience-web-view-wrapper">
                    <div className="experience-text-left-container">
                        <BounceInLeft delay={2}>
                            <h6 className="experience-heading">Experience</h6>
                            <Flash className='experience-instruction-mobile-view'>
                                <p className='experience-instruction-text'><i className="far fa-arrow-alt-circle-down"></i> Click tabs to know more about my experience </p>
                            </Flash> 
                            <div className="experience-title-wrapper">
                                <button onClick={()=>this.renderSelection("ga")} className="experience-select-button">
                                    <div className="experience-title-container">
                                        <h6 className='experience-sub-heading'>Software Engineering Immersive <i className="far fa-arrow-alt-circle-right"></i></h6>
                                        <p className="experience-title-text">General Assembly Melbourne</p> 
                                        <p className='experience-title-text'>Mar-2020 to June-2020</p> 
                                    </div>
                                </button>
                                <button onClick={()=>this.renderSelection("se")}  className="experience-select-button">
                                    <div className="experience-title-container">
                                        <h6 className='experience-sub-heading'>Manager | Retail team leader  <i className="far fa-arrow-alt-circle-right"></i></h6>
                                        <p className='experience-title-text'>7-Eleven Australia</p> 
                                        <p className='experience-title-text'>2017 to 2020</p> 
                                    </div>
                                </button>
                                <button onClick={()=>this.renderSelection("lt")}  className="experience-select-button">
                                    <div className="experience-title-container">
                                        <h6 className='experience-sub-heading'>Project Engineer | Mechanical <i className="far fa-arrow-alt-circle-right"></i></h6>
                                        <p className='experience-title-text'>Larsen & Toubro Ltd</p> 
                                        <p className='experience-title-text'>2010 to 2017</p> 
                                    </div>
                                </button>
                                
                            </div>
                        </BounceInLeft>
                    </div>
                    <BounceInRight delay={2}>
                    {this.state.section[0] === "ga"? (
                        <div className="experience-description-right-wrapper"> 
                            <ExpGA />
                        </div>
                        ):this.state.section[0] === "se"? (
                        <div className="experience-description-right-wrapper"> 
                            <ExpSE />
                        </div>
                        ):this.state.section[0] === "lt"?(
                        <div className="experience-description-right-wrapper"> 
                            <ExpLT />
                        </div> 
                        ):(
                        <div className="experience-description-right-wrapper"> 
                            <ExpGEN />
                        </div> 
                    )}
                    </BounceInRight> 
                </div>             
            </div>
        )
    }   
}
export default Experience