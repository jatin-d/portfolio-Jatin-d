import React from 'react';
import './Education.css';

export default function Education(props) {
    return(
        <div className="education-container">           
            <div className="resume-education">
                <h6 className="resume-education-heading">Education</h6>
                <div className="resume-edu-ga">
                    <div className="res-edu-ga-titile">
                        <h6 className='resume-internal-heading'>Software Engineering Immersive</h6>
                        <p className='resume-text'>General Assembly Melbourne</p> 
                        <p className='resume-text'>2020</p> 
                    </div>
                    <div className="res-edu-ga-symbol">
                        <i class="im im-graduation-hat edu-icon"></i>
                    </div>
                    <div className="res-edu-ga-text">
                        <p className='resume-text'>Learned writing responsive web pages in HTML5, CSS & JavaScript(ES6). Developed web-applications with React.js. Built back-end applications using MVC frameworks (Ruby on Rails). Employed JS and Ruby libraries such as Underscore, jQuery, and Sinatra. learned complete product life-cycles from user-stories to deployment. Practiced TDD (test driven development).</p> 
                    </div>
                </div>
                <div className="resume-edu-udemy">
                    <div className="res-edu-udemy-titile">
                        <h6 className='resume-internal-heading'>Learn figma | UI/UX design essential training</h6>
                        <p className='resume-text'>Udemy</p> 
                        <p className='resume-text'>2018</p> 
                    </div>
                    <div className="res-edu-udemy-symbol">
                        <i class="im im-graduation-hat edu-icon"></i>
                    </div>
                    <div className="res-edu-udemy-text">
                        <p className='resume-text'>Completed a 40+ hour course on Figma. Learned basics of designing UI using Figma.</p> 
                    </div>
                </div>
                <div className="resume-edu-gu">
                    <div className="res-edu-gu-titile">
                        <h6 className='resume-internal-heading'>Bachelor Of Mechanical Engineering</h6>
                        <p className='resume-text'>Gujarat University</p> 
                        <p className='resume-text'>2006 - 2009</p> 
                    </div>
                    <div className="res-edu-gu-symbol">
                        <i class="im im-graduation-hat edu-icon"></i>
                    </div>
                    <div className="res-edu-gu-text">
                        <p className='resume-text'>While learning fundamentals of mechanical engineering, enjoyed university days making friends. Played cricket for collage team. Being enthusiastic about technology, learned computer aided design and secured a job in a power plant designing company.</p> 
                    </div>
                </div>
            </div>  
            <div className="education-background"></div>
        </div>
    ) 
}