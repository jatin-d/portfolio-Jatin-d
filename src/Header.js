import React from 'react'
import './Header.css'
import Pdf from './Documents/Jatin-d-Resume.pdf';


export default function Header(){
    // const handleClick = e => {

    // }
    return(
        <header className="fixed-header">
            <h6 className='logo'>JD</h6>
            <div className="menu-wrap">
                <input type="checkbox" className='toggler'/>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><a href="#projects">Home</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#resume">Resume</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="main-header-nav">
                <a href="#projects">Home</a>
                {/* <a href="#projects">Projects</a>
                <a href="#contact">Contact</a> */}

                <a 
                    style={{display: "table-cell"}} 
                    href={Pdf}
                    rel="noopener noreferrer"
                    target='_blank'
                ><i class="fas fa-file-download"></i> Resume</a>
            </nav>  
        </header>
    )
}