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
            <div className="ContactViewWrap">
                <h2>Reach-out to me..!</h2>
                <form className="formContainer" noValidate autoComplete="off" onSubmit={this.handleSubmit} action="">
                    <label>Name</label>
                    <input 
                        id="outlined-name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label>e-mail</label>
                    <input 
                        id="outlined-email-input"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label>Message</label>
                    <input 
                        id="outlined-textarea"
                        name="multiline"
                        value={this.state.multiline}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;
  