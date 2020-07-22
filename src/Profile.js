import React from 'react';
import './Profile.css';


export default function Profile(props) {
    return(
        <div className="profile-pageWrapper">
            <div className="profile-container">
                <div className="profile-section-container">
                    <h6 className="profile-heading">Profile</h6>
                    <p className="profile-text">A seasoned professional having several years of experience in collaborating with multiple teams across the globe ensuring quality product delivery while meeting project timelines and maintaining good team health.</p>
                    <div className="profile-lineitems-container">
                        <div className="profile-line-item-wrapper">
                            <h6 className="profile-headings-lineitems">Full Name:</h6>
                            <p className="profile-text-lineitems">Jatin Dhandhalya</p> 
                        </div>
                        <div className="profile-line-item-wrapper">
                            <h6 className="profile-headings-lineitems">Birth Date:</h6>
                            <p className="profile-text-lineitems">September 05, 1984</p>
                        </div>
                        <div className="profile-line-item-wrapper">
                            <h6 className="profile-headings-lineitems">Profession:</h6>
                            <p className="profile-text-lineitems">Software Developer, Web Designer</p>
                        </div>
                        <div className="profile-line-item-wrapper">
                            <h6 className="profile-headings-lineitems">Website:</h6>
                            <p className="profile-text-lineitems">jatin.d@outlook.com.au</p>
                        </div>
                        <div className="profile-line-item-wrapper">
                            <h6 className="profile-headings-lineitems">e-mail:</h6> 
                            <p className="profile-text-lineitems">www.jatindhandhalya.com</p>
                        </div>
                        <div className="profile-line-item-wrapper">
                            <h6 className="profile-headings-lineitems">GitHub:</h6> 
                            <a href='https://github.com/jatin-d' className="profile-text-lineitems">github.com/jatin-d</a>
                        </div>
                        <div className="profile-line-item-wrapper">
                            <h6 className="profile-headings-lineitems">LinkedIn:</h6> 
                            <a href='https://www.linkedin.com/in/jatin-d/' className="profile-text-lineitems">linkedin.com/in/jatin-d/</a>
                        </div>
                        <div className="profile-line-item-wrapper">
                            <h6 className="profile-headings-lineitems">e-mail:</h6> 
                            <p className="profile-text-lineitems">www.jatindhandhalya.com</p>
                        </div>
                    </div>
                </div>
                <div className="profile-skills-container">
                    <h6 className="profile-heading">Skills</h6>
                    <p className="profile-text">A graduate in Software Development having experience in creating web applications using latest tools and technologies. A versatile team player and technology learning enthusiast.</p>
                    <div class="skill-lineitems-container">
                        <div className="skill-line-item-wrapper">
                            <h6 className="skill-list-headings">ReactJS</h6>
                            <i class="devicon-react-original leng-icon"></i>
                        </div>
                        <div className="skill-line-item-wrapper">
                            <h6 className="skill-list-headings">NodeJS</h6>
                            <i class="devicon-nodejs-plain leng-icon"></i>
                        </div>
                        <div className="skill-line-item-wrapper">
                            <h6 className="skill-list-headings">JavaScript</h6>
                            <i class="devicon-javascript-plain leng-icon"></i>
                        </div>
                        <div className="skill-line-item-wrapper">
                            <h6 className="skill-list-headings">Ruby</h6>
                            <i class="devicon-ruby-plain leng-icon"></i>
                        </div>
                        <div className="skill-line-item-wrapper">
                            <h6 className="skill-list-headings">HTML5</h6>
                            <i class="devicon-html5-plain leng-icon"></i>
                        </div>
                        <div className="skill-line-item-wrapper">
                            <h6 className="skill-list-headings">CSS3</h6>
                            <i class="devicon-css3-plain leng-icon"></i>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="profile-background"></div>
        </div>  
    ) 
}