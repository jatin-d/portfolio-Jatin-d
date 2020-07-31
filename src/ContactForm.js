import React from 'react';
import './ContactForm.css'
import Pdf from './Documents/Jatin-d-Resume.pdf';
import styled, { keyframes } from 'styled-components'
import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'


const BounceInLeft = styled.div`animation: 2s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: 2s ${keyframes`${bounceInRight}`}`


class ContactForm extends React.Component{

    state = {
        name: '',
        email: '',
        multiline: '',
    }

    handleChange = e => {
        this.setState({
            ...this.state, [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
      
        const req = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.multiline
        }

        this.props.handleCraftReq(req)
    }

    render() {
        return (
            <div className="contactForm-wrapper">
                <BounceInLeft className="contact-textContainer-bounce">
                <div className="contact-textContainer">
                    <h6 className='contactForm-heading'>Drop me a line</h6>
                    <p className='contactForm-text'>
                        I am always excited to interact with people, know their story and tell them mine and make long-lasting connections. <em>Drop me few words..!</em>
                    </p>
                    <h6 className='contactForm-sub-heading'>Or find me on internet</h6>
                    <div className="contactForm-social">
                        <a 
                            style={{display: "table-cell"}} 
                            href="https://www.linkedin.com/in/jatin-d"
                            rel="noopener noreferrer"
                            target='_blank'
                            className='contactForm-social-link' 
                        ><i className="fab fa-linkedin"></i></a>
                        <a 
                            style={{display: "table-cell"}} 
                            href="https://github.com/jatin-d"
                            rel="noopener noreferrer"
                            target='_blank'
                            className='contactForm-social-link' 
                        ><i className="fab fa-github-square"></i></a>
                        <a 
                            style={{display: "table-cell"}} 
                            href="https://medium.com/@jatin.dhandhalya"
                            rel="noopener noreferrer"
                            target='_blank'
                            className='contactForm-social-link'
                        ><i className="fab fa-medium"></i></a>
                    </div>
                    <a 
                    className='contactForm-download-resume-link'
                    style={{display: "table-cell"}} 
                    href={Pdf}
                    rel="noopener noreferrer"
                    target='_blank'
                    ><i className="fas fa-file-download"></i> Resume</a>
                </div>
                </BounceInLeft>
                <BounceInRight className="contactForm-formContainer-bounce">
                <form className="contactForm-formContainer" noValidate autoComplete="off" onSubmit={this.handleSubmit} action="">
                    <label className='contactForm-label'>Your name</label>
                    <input 
                        id="outlined-name"
                        className='contactForm-input'
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label className='contactForm-label'>Your e-mail</label>
                    <input 
                        id="outlined-email-input"
                        className='contactForm-input'
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label className='contactForm-label'>Your message</label>
                    <textarea 
                        id="outlined-textarea"
                        className='contactForm-input contactForm-input-textArea'
                        name="multiline"
                        value={this.state.multiline}
                        onChange={this.handleChange}
                    />
                    <div class="g-recaptcha" data-sitekey="6LcIZ7gZAAAAANfa0d2ofx-y-VLD_8rPwG869EfP"></div>
                    <br/>
                    <button className='contactForm-input contactForm-submit-button' type="submit">Send</button>
                </form>
                </BounceInRight>
            </div>
        )
    }
}

export default ContactForm;
  