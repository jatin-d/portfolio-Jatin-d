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
                        <p>An aspiring full-stack developer. Experienced working in project teams globally. A mechanical engineer. Believes in quality product delivered on time. Loves to create and make things work.</p> 
                    </div>
                   
                    <h6 className="profile-skills-heading">I can work with...</h6>
                    <div className="profile-skills-list">
                        <div>
                            <p className="profile-skills-list-items">React.js</p>
                            <p className="profile-skills-list-items">Node.js</p>
                            <p className="profile-skills-list-items">jQuery</p>
                            <p className="profile-skills-list-items">JavaScript</p>
                            <p className="profile-skills-list-items">HTML5/CSS3</p>
                        </div>
                        <div>
                            <p className="profile-skills-list-items">Ruby</p>
                            <p className="profile-skills-list-items">Sinatra</p>
                            <p className="profile-skills-list-items">PostgreSQL</p>
                            <p className="profile-skills-list-items">Underscore.js</p>
                            <p className="profile-skills-list-items">Postman</p>
                        </div>
                        <div>
                            <p className="profile-skills-list-items">Restful WS</p>
                            <p className="profile-skills-list-items">AWS</p>
                            <p className="profile-skills-list-items">VS Code</p>
                            <p className="profile-skills-list-items">GitHub</p>
                            <p className="profile-skills-list-items">Heroku</p>
                        </div>
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
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-nodejs-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-javascript-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-ruby-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-html5-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-css3-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-jquery-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-postgresql-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-bootstrap-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-express-original leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-visualstudio-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-git-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-github-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-gitlab-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-heroku-plain-wordmark leng-icon"></i>
                        </div> 
                        <div className="skil-icon-wrapper">
                            <i className="devicon-heroku-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-amazonwebservices-original leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-angularjs-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-wordpress-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-chrome-plain leng-icon"></i>
                        </div>  
                    </div> 
                </BounceInRight>
                </div>
            </div>
        </div>  
    ) 
}