import React from 'react';
import './ContactForm.css'

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
                <div className="contact-textContainer">
                     <h6 className='contactForm-heading'>Drop me a line</h6>
                    <p className='contactForm-text'>
                        I am always excited to interact with people, know their story and tell them mine and make long-lasting connections. <em>Drop me few words..!</em>
                    </p>
                </div>
                <form className="contactForm-formContainer" noValidate autoComplete="off" onSubmit={this.handleSubmit} action="">
                    <label className='contactForm-label'>Name</label>
                    <input 
                        id="outlined-name"
                        className='contactForm-input'
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label className='contactForm-label'>e-mail</label>
                    <input 
                        id="outlined-email-input"
                        className='contactForm-input'
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label className='contactForm-label'>Message</label>
                    <input 
                        id="outlined-textarea"
                        className='contactForm-input contactForm-input-textArea'
                        name="multiline"
                        value={this.state.multiline}
                        onChange={this.handleChange}
                    />
                    <button className='contactForm-input contactForm-submit-button' type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;
  