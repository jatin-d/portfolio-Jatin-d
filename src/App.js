import React from 'react'
import './App.css'
// import MyPic from './MyPic'
import Header from "./Header"
import About from "./About"
import Profile from "./Profile"
import Portfolio from "./Portfolio"
// import Play from "./Play"
// import Contact from "./Contact"
import Footer from "./Footer"
import Experience from "./Experience"
import Education from "./Education"

import {
  BrowserRouter,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom'
import ContactForm from './ContactForm'



class App extends React.Component{
  state = {
    target: ""
  }
  render(){
    return (
      <main className="about-text">
        <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/contact">
                <ContactForm />
              </Route>
              <Route path="/:target">
                <About />
              </Route>
              {/* <Route path="/play">
                <Play />
              </Route> */}
              
              <Route path="/">
                <About />
              </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
      </main>
    )
  }
  
}
export default App