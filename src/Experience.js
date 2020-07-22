import React from 'react';
import './Experience.css';

export default function Experience(props) {
    return(
        <div className="experience-container">
            <div className="resume-experience">
                <h6 className="resume-experience-heading">Experience</h6>
                <div className="resume-experience-ga">
                    <div className="res-exp-ga-title">
                        <h6 className='resume-internal-heading'>Software Engineering Immersive | Trainee</h6>
                        <p className="resume-text">General Assembly Melbourne</p> 
                        <p className='resume-text'>Mar-2020 to June-2020</p> 
                    </div>
                    <div className="res-exp-ga-symbol">
                        <i class="im im-briefcase exp-icon"></i>
                    </div>
                    <div className="res-exp-ga-text">
                        <p className='resume-text'>An intensive 12-weeks Full-stack Boot camp covering both web development fundamentals and current industry-leading techniques. Learned HTML, CSS, JavaScript, Ruby on Rails, Node.js, PostgreSQL, Sinatra, React.js, jQuery, Bootstrap, underscore.js, postman and many more. Gained more then 700 hours of development experience. Practiced coding for over 600 hours.</p> 
                    </div>
                </div>
                <div className="resume-experience-se">
                    <div className="res-exp-se-title">
                        <h6 className='resume-internal-heading'>Business Manager | Retail team leader</h6>
                        <p className='resume-text'>7-Eleven Australia</p> 
                        <p className='resume-text'>2017 to 2020</p> 
                    </div>
                    <div className="res-exp-se-symbol">
                        <i class="im im-briefcase exp-icon"></i>
                    </div>
                    <div className="res-exp-se-text">
                        <p className='resume-text'>While setting up my feet in Australia, enjoyed meeting new people everyday. Learned culture and people. Led a team to achieve best practices and learned managing diverse team. Gained experience in managing business and dealing with head-office.</p> 
                    </div>
                </div>
                <div className="resume-experience-lt">
                    <div className="res-exp-lt-title">
                        <h6 className='resume-internal-heading'>Mechanical Engineer ⎪ Project Engineer</h6>
                        <p className='resume-text'>Larsen & Toubro Ltd</p> 
                        <p className='resume-text'>2010 - 2017</p> 
                    </div>
                    <div className="res-exp-lt-symbol">
                        <i class="im im-briefcase exp-icon"></i>
                    </div>
                    <div className="res-exp-lt-text">
                        <p className='resume-text'>Managed packages up to $90 million In EPC projects valued $800 million to $1100 million. Assuming a role of package manager, took responsibility of packages from concept to handover. Managed team of up to 8 junior engineers. Resolved technical challenges by meticulous thinking analytical skills. Added values by optimizing, and standardizing.</p> 
                    </div>
                </div>
            </div>             
            <div className="experience-background"></div>
        </div>
    ) 
}