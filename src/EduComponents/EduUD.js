import React from 'react';
import './EduUD.css';
import styled, { keyframes } from 'styled-components'
import {bounceInRight} from 'react-animations'
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function EduUD(props) {
    return(
        <BounceInRight className="education-description-wrapper" delay={2}>
            <div >
                <p className='education-text'>I have always been excited to learn more about computers and how things work on it. Working as a Mechanical design engineering and exposure to design softwares always arouse a zeal to learn about software development.</p> 
                <p className='education-text'>In year <em><b>2017</b></em>, I learned <em><b>HTML, CSS and JavaScript on SoloLearn</b></em>, to expose my self to the world of software development.</p>
                <p className='education-text'>CSS and Web Page Layout excited me so I researched about leading design tools in the industry which led me to Figma and I completed <em><b>"Learn Figma - UI/UX Design Essential Training"</b></em> a 40+ hour course on <em><b>Udemy in 2018</b></em>.</p> 
                <p className='education-text'><em><b>Learn Figma - UI/UX Design Essential Training included...</b></em></p> 
                <p className='education-text'>Using panels in Figma such as Menu, Tools, Layers and Pages, Components, Team Library, Design, Prototype, Code etc.</p>
                <p className='education-text'><em><b>The course included hands-on Training on..</b></em>.</p> 
                <p className='education-text'>Working with Frames and Shapes, Working with Text, Masking Images and Shapes, Importing Icons and Graphics, Setting up Components, Using Constraints for Responsive Design, Creating and viewing a prototype, and Live device preview.</p>
                <p className='education-text'>Learning Figma and basics of programming inspired me to learn about interactivity on web so I read <em><b>O'Reilly Media's Learning JavaScript: by Ethan Brown</b></em> in late <em><b>2019</b></em>.</p>  
            </div>     
        </BounceInRight> 
    ) 
}