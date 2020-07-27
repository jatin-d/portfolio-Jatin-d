import React from 'react'
import './Portfolio.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function Portfolio(){
    return(
        <div className="portfolio-container">
            <div className="portfolio-wrapper">
                <div className="portfolio-text-wrapper">
                    <h6 className='portfolio-heading'>Check Out Some of My Works.</h6>
                    <p className="portfolio-text">While learning development skills, I tried to capture every learning and attempted to craft them in form of a project. Following are my projects replicating my journey so far and going...</p> 
                </div>
                
                <div className="portfolio-grid">
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                               <h6 className="portfolio-item-heading">Tic-Tac-Toe</h6>
                                <p className="portfolio-item-text">A board game with options to play between two players or with computer bot. Developed using HTML, CSS and JavaScript.</p>
                                <a className='portfolio-demo-link' href="https://jatin-d.github.io/project1-tic-tac-toe/">DEMO</a> 
                            </div>
                        </div>
                        <img className='portfolio-item-img' src="tictactoe.png" alt="tic-tac-toe cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Poll To Pass</h6>
                                <p className="portfolio-item-text">A web-based platform to post polls. Developed using HTML5, and CSS for front-end and Ruby with Sinatra for the back-end.</p>
                                <a className='portfolio-demo-link' href="https://poll-to-pass-api.herokuapp.com/">DEMO</a>
                            </div>  
                        </div>
                        <img className='portfolio-item-img' src="polltopass.png" alt="poll-to-pass cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Common utils</h6>
                                <p className="portfolio-item-text">A web app for shared utility items such as to-do list, calendar, reminders etc. A React application including server side on NodeJS and database on PostgreSQL</p>
                                <a className='portfolio-demo-link' href="https://magic-melbourne-moments.herokuapp.com/">DEMO</a>
                            </div>
                        </div>
                        <img className='portfolio-item-img' src="common-utils.png" alt="common-utils cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Magic Melbourne</h6>
                                <p className="portfolio-item-text">A web app to guide tourists around Melbourne. Developed in a team of four using NodeJS</p>
                                <a className='portfolio-demo-link' href="https://magic-melbourne-moments.herokuapp.com/">DEMO</a>
                            </div>
                        </div>
                        <img className='portfolio-item-img' src="magicmelb.png" alt="magic-melbourne cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Portfolio Website</h6>
                                <p className="portfolio-item-text">My own portfolio website created using ReactJS. An animation that continuously updates is created by in React and I intend to update it time to time to create different shapes</p>
                                <a className='portfolio-demo-link' href="https://magic-melbourne-moments.herokuapp.com/">DEMO</a>
                            </div>
                        </div>
                        <img className='portfolio-item-img' src="portfolio-jatin.png" alt="portfolio cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Planets</h6>
                                <p className="portfolio-item-text">A fun web page created using Ruby and Sinatra. Its a CRUD app implementing database in Postgre SQL. This little project was created using MVC principle in Ruby platform</p>
                                <a className='portfolio-demo-link' href="https://damp-waters-88377.herokuapp.com/">DEMO</a>
                            </div>
                        </div>
                        <img className='portfolio-item-img' src="planets.png" alt="planets cover"/>
                    </div>
                </div>






                <Carousel 
                    showArrows={false} 
                    showStatus={false} 
                    showIndicators={false}
                    showThumbs={false}
                    className="portfolio-grid-carousal">
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                               <h6 className="portfolio-item-heading">Tic-Tac-Toe</h6>
                                <p className="portfolio-item-text">A board game with options to play between two players or with computer bot. Developed using HTML, CSS and JavaScript.</p>
                                <a className='portfolio-demo-link' href="https://jatin-d.github.io/project1-tic-tac-toe/">DEMO</a> 
                            </div>
                        </div>
                        <img className='portfolio-item-img' src="tictactoe.png" alt="tic-tac-toe cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                 <h6 className="portfolio-item-heading">Poll To Pass</h6>
                                <p className="portfolio-item-text">A web-based platform to post polls. Developed using HTML5, and CSS for front-end and Ruby with Sinatra for the back-end.</p>
                                <a className='portfolio-demo-link' href="https://poll-to-pass-api.herokuapp.com/">DEMO</a>
                            </div>  
                        </div>
                        <img src="polltopass.png" alt="poll-to-pass cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Common utils</h6>
                                <p className="portfolio-item-text">A web app for shared utility items such as to-do list, calendar, reminders etc. A React application including server side on NodeJS and database on PostgreSQL</p>
                                <a className='portfolio-demo-link' href="https://magic-melbourne-moments.herokuapp.com/">DEMO</a>
                            </div>
                        </div>
                        <img src="common-utils.png" alt="common-utils cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Magic Melbourne</h6>
                                <p className="portfolio-item-text">A web app to guide tourists around Melbourne. Developed in a team of four using NodeJS</p>
                                <a className='portfolio-demo-link' href="https://magic-melbourne-moments.herokuapp.com/">DEMO</a>
                            </div>
                        </div>
                        <img src="magicmelb.png" alt="magic-melbourne cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Portfolio Website</h6>
                                <p className="portfolio-item-text">My own portfolio website created using ReactJS. An animation that continuously updates is created by in React and I intend to update it time to time to create different shapes</p>
                                <a className='portfolio-demo-link' href="https://magic-melbourne-moments.herokuapp.com/">DEMO</a>
                            </div>
                        </div>
                        <img src="portfolio-jatin.png" alt="portfolio cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Planets</h6>
                                <p className="portfolio-item-text">A fun web page created using Ruby and Sinatra. Its a CRUD app implementing database in Postgre SQL. This little project was created using MVC principle in Ruby platform</p>
                                <a className='portfolio-demo-link' href="https://damp-waters-88377.herokuapp.com/">DEMO</a>
                            </div>
                        </div>
                        <img src="planets.png" alt="planets cover"/>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}