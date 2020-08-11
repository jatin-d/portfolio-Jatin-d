import React from 'react'
import './Footer.css'

export default function Footer(){
    return(
        <footer className="footer-wrapper">
            <section className="footer-credentials"><p>&#169; Designed & Created by Jatin D.</p></section>
            <nav className="footer-nav">
                <a 
                    style={{display: "table-cell"}} 
                    href="https://www.linkedin.com/in/jatin-d"
                    rel="noopener noreferrer"
                    target='_blank'
                    className='footer-link' 
                ><i className="fab fa-linkedin"></i></a>
                <a 
                    style={{display: "table-cell"}} 
                    href="https://github.com/jatin-d"
                    rel="noopener noreferrer"
                    target='_blank'
                    className='footer-link' 
                ><i className="fab fa-github-square"></i></a>
                <a 
                    style={{display: "table-cell"}} 
                    href="https://medium.com/@jatin.dhandhalya"
                    rel="noopener noreferrer"
                    target='_blank'
                    className='footer-link'
                ><i className="fab fa-medium"></i></a>
            </nav>  
        </footer>
    )
}