import React from 'react';
import './Profile.css';




export default function Profile(props) {
    return(
        <div className="profile-pageWrapper">
            <div className="profile-container">
                <div className="profile-section-container">
                    <h6 className="profile-heading">Profile and prowesses</h6>
                    <div className="profile-text"> 
                        <p>A graduate in Software Engineering Immersive Boot-camp from General Assembly - Melbourne. A seasoned professional having several years of experience in collaborating with multiple teams across the globe. A mechanical engineer who ensure quality product delivery while meeting project timelines and maintaining good team health.</p> 
                    </div>
                    <h6 className="profile-skills-heading">I can work with...</h6>
                    <div className="profile-skills-list">
                        <div>
                            <p className="profile-skills-list-items">React.js</p>
                            <p className="profile-skills-list-items">Node.js</p>
                            <p className="profile-skills-list-items">jQuery</p>
                            <p className="profile-skills-list-items">JavaScript</p>
                            <p className="profile-skills-list-items">HTML5</p>
                            <p className="profile-skills-list-items">CSS3</p>
                        </div>
                        <div>
                            <p className="profile-skills-list-items">Ruby</p>
                            <p className="profile-skills-list-items">Sinatra</p>
                            <p className="profile-skills-list-items">PostgreSQL</p>
                            <p className="profile-skills-list-items">Underscore.js</p>
                            <p className="profile-skills-list-items">Bootstrap</p>
                            <p className="profile-skills-list-items">Postman</p>
                        </div>
                        <div>
                            <p className="profile-skills-list-items">Restful WS</p>
                            <p className="profile-skills-list-items">AWS</p>
                            <p className="profile-skills-list-items">GraphQL</p>
                            <p className="profile-skills-list-items">VS Code</p>
                            <p className="profile-skills-list-items">GitHub</p>
                            <p className="profile-skills-list-items">Heroku</p>
                        </div>
                    </div>
                </div>
                <div className="profile-skills-icons-wrapper">
                    
                    <div class="skill-icon-container">
                        <div className="skil-icon-wrapper">
                            <i class="devicon-react-original leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-nodejs-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-javascript-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-ruby-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-html5-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-css3-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-jquery-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-postgresql-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-bootstrap-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-express-original leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-visualstudio-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-git-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-github-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-gitlab-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-heroku-plain-wordmark leng-icon"></i>
                        </div> 
                        <div className="skil-icon-wrapper">
                            <i class="devicon-heroku-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-amazonwebservices-original leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-angularjs-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-wordpress-plain leng-icon"></i>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i class="devicon-chrome-plain leng-icon"></i>
                        </div>  
                    </div> 
                </div>
            </div>
            <div className="profile-background"></div>
        </div>  
    ) 
}