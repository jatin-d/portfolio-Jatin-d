import React from 'react'
import './Play.css'

export default function Play(){
    return(
        <footer className="footer-wrapper">
            <section className="footer-credentials"><p>&reg; Designed & Created by Jatin D.</p></section>
            <nav className="footer-nav">
                <a className='footer-link' href="#linkedId"><i className="fab fa-linkedin"></i></a>
                <a className='footer-link' href="#GitHub"><i className="fab fa-github-square"></i></a>
                <a className='footer-link' href="#medium"><i className="fab fa-medium"></i></a>
            </nav>  
        </footer>
    )
}