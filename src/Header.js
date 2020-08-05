import React, { useRef } from 'react'
import './Header.css'
import Pdf from './Documents/Jatin-d-Resume.pdf';
import {
    Link
} from 'react-router-dom'


export default function Header() {
    let checkBoxRef = useRef(null);
    const handleOverlay = e => {
        checkBoxRef.current.checked = !checkBoxRef.current.checked;
    }
    return (
        <header className="fixed-header">
            <Link className="router-link" to="/"><div className="log-wrapper"><h6 className='logo'>JD</h6></div></Link>
            <div className="menu-wrap">
                <input id="togglerCheckbox" type="checkbox" className='toggler' ref={checkBoxRef}/>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><Link onClick={handleOverlay} className="hamburger-router-link" to="/">
                                    Home
                                </Link></li>
                                <li><Link onClick={handleOverlay} className="hamburger-router-link" to="/profile">
                                    Profile
                                </Link></li>
                                <li><Link onClick={handleOverlay} className="hamburger-router-link" to="/portfolio">
                                    Portfolio
                                </Link></li>
                                <li><Link onClick={handleOverlay} className="hamburger-router-link" to="/contact">
                                    Contact
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <nav id="main-header-nav">
                <Link className="router-link" to="/">Home</Link>
                <Link className="router-link" to="/profile">Profile</Link>
                <Link className="router-link" to="/portfolio">Portfolio</Link>
                <Link className="router-link" to="/contact">Contact</Link>
                <a
                    style={{ display: "table-cell" }}
                    href={Pdf}
                    rel="noopener noreferrer"
                    target='_blank'
                ><i className="fas fa-file-download"></i> Resume</a>
            </nav>
        </header>
    )
}