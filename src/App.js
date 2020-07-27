import React from 'react'
import './App.css'
// import MyPic from './MyPic'
import Header from "./Header"
import About from "./About"
import Profile from "./Profile"
import Portfolio from "./Portfolio"
import Play from "./Play"
import Contact from "./Contact"
import Footer from "./Footer"
import {
  BrowserRouter,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom'



function App() {
  return (
    <main className="about-text">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </main>
  )
}
export default App