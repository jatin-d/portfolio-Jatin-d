import React from 'react';
import './Contact.css';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as progressLogo from "./progress.json"
import * as success from "./success.json";
import ContactForm from "./ContactForm"


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: progressLogo.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
}

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
};

export default class Contact extends React.Component{
    state ={
        formSubmitted: false,
        isLoading: false
    }

    handleSubmit = req => {
        const template = process.env.REACT_APP_PCF
        const userId = process.env.REACT_APP_UID
        // const userId = '1234'
        const params = req
        
        window.emailjs.send('default_service', template, params, userId).then(res => {
            this.setState({...this.state, isLoading:false})
        }).catch(e => {
            this.setState({...this.state, isLoading:false})
        })
    }

    handleCraftReq = req => {
        this.setState({...this.state, formSubmitted:true, isLoading:true});
        this.handleSubmit(req)
    }

    render(){
        return (
            <div className='contact-wrapper'>
                {this.state.formSubmitted ? (
                <FadeIn>
                    <div class="mailer-anim-container">
                    {this.state.isLoading ? (
                        <div className="anim-sending-wrapper">
                            <h6>Sending</h6>
                            <Lottie options={defaultOptions} height={200} width={200} /> 
                        </div>
                    ) : (
                        <div className="anim-sent-wrapper">
                            <h6>Sent successfully</h6>
                            <Lottie options={defaultOptions2} height={200} width={200} />
                            <h6>Thank you..!</h6>
                        </div>
                    )}
                    </div>
                </FadeIn>
                ) : (
                    <ContactForm handleCraftReq={this.handleCraftReq} />
                )}
            </div>
        );
    } 
}