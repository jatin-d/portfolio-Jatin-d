import React from 'react';
import './ExpGA.css';
import styled, { keyframes } from 'styled-components'
// import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'

// const BounceInLeft = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInRight}`}`


export default function ExpLT(props) {
    return(
        <BounceInRight className="experience-description-wrapper" delay={2}>
            <div >
                <p className='experience-text'>Headquartered in Mumbai, India, Larsen & Toubro (L&T) is one of the largest companies in India's private sector. L&T has unmatched capabilities across Technology, Engineering, Construction, and Manufacturing.</p>
                <p className='experience-text'>I Joined L&T as a graduate engineer and served for 7 years before I left it to move to Australia.</p>
                <p className='experience-text'>In 7 years, I was promoted twice to become Senior Mechanical Engineer.</p>
                <p className='experience-text'>I managed packages up to $90 million In EPC projects valued $800 million to $1100 million. Assuming a role of package manager, took responsibility of packages from concept to handover. Managed team of up to 8 junior engineers. Completed 3 large scale projects from proposal to commissioning.</p>
                <p className='experience-text'><em><b>Highlights of my duties and achievements are...</b></em></p>
                <p className='experience-text'>Prepared design calculations, specifications, data sheets, bid evaluation reports, and scopes of work packs.</p> 
                <p className='experience-text'>Prepared schedules, budgets, staff and construction planning.</p>  
                <p className='experience-text'>Interfaced with vendors, clients, contractors and allied engineering disciplines</p>
                <p className='experience-text'>Managed technical and contractual disputes, change order claims, and performance issues</p> 
                <p className='experience-text'>Managed techno-commercial close-out of subcontract agreements.</p> 
            </div>     
        </BounceInRight> 
    ) 
}