import React from 'react';
import './Profile.css';
import styled, { keyframes } from 'styled-components'
import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'
import { 
    Link,
    // Redirect,
} from 'react-router-dom'


const BounceInLeft = styled.div`animation: 2s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: 2s ${keyframes`${bounceInRight}`}`


export default function Profile(props) {
    return(
        <div className="profile-pageWrapper">
            <div className="profile-container">
                <BounceInLeft>
                <div className="profile-section-container">
                    <h6 className="profile-heading">Profile and prowesses</h6>
                    <div className="profile-text"> 
                        <p>I am an aspiring full-stack developer who loves to create and make things work. A mechanical engineer who believes in quality products delivered on time. A people person who is experienced in working with project teams globally.</p> 
                    </div>
                    <div className="profile-link-wrapper">
                        <Link className="router-link profile-links" to="/experience">Know more about experience <i className="far fa-arrow-alt-circle-right"></i></Link>
                        <Link className="router-link profile-links" to="/education">Know more about eduction <i className="far fa-arrow-alt-circle-right"></i></Link>
                    </div>
                </div>
                </BounceInLeft>
                <div className="profile-skills-icons-wrapper">   
                <BounceInRight>  
                    <div className="skill-icon-container">
                        <div className="skil-icon-wrapper">
                            <i className="devicon-react-original leng-icon"></i>
                            <p className="profile-skills-list-items">ReactJS</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-nodejs-plain leng-icon"></i>
                            <p className="profile-skills-list-items">NodeJS</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-javascript-plain leng-icon"></i>
                            <p className="profile-skills-list-items">JavaScript</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-ruby-plain leng-icon"></i>
                            <p className="profile-skills-list-items">Ruby</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-html5-plain leng-icon"></i>
                            <p className="profile-skills-list-items">HTML5</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-css3-plain leng-icon"></i>
                            <p className="profile-skills-list-items">CSS3</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-jquery-plain leng-icon"></i>
                            <p className="profile-skills-list-items">jquery</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-postgresql-plain leng-icon"></i>
                            <p className="profile-skills-list-items">PostgreSQL</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-bootstrap-plain leng-icon"></i>
                            <p className="profile-skills-list-items">Bootstrap</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-express-original leng-icon"></i>
                            <p className="profile-skills-list-items">ExpressJS</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-visualstudio-plain leng-icon"></i>
                            <p className="profile-skills-list-items">VS Code</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-git-plain leng-icon"></i>
                            <p className="profile-skills-list-items">Git</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-github-plain leng-icon"></i>
                            <p className="profile-skills-list-items">GitHub</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-heroku-plain leng-icon"></i>
                            <p className="profile-skills-list-items">Heroku</p>

                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-amazonwebservices-original leng-icon"></i>
                            <p className="profile-skills-list-items">AWS</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-chrome-plain leng-icon"></i>
                            <p className="profile-skills-list-items">Chrome Dev tools</p>
                        </div>  
                    </div> 
                </BounceInRight>
                </div>
            </div>
        </div>  
    ) 
}