import React from 'react';
// import './Contact.css';
import ContactForm from './ContactForm';

export default class Contact extends React.Component{
    state ={
        formSubmitted: false,
        isLoading: false
    }

    handleSubmit = req => {
        const template = process.env.REACT_APP_PCF
        const userId = process.env.REACT_APP_UID
        console.log("JD userId"+userId);
        const params = req
        
        window.emailjs.send('default_service', template, params, userId).then(res => {
            this.setState({...this.state, isLoading:false})
            console.log(res)
        }).catch(e => {
            this.setState({...this.state, isLoading:false})
            console.log(e)
        })
    }

    handleCraftReq = req => {
        this.setState({...this.state, formSubmitted:true, isLoading:true});
        this.handleSubmit(req)
    }

    render(){
        return(
            <div className="ContactWrapper">
                    <div className="ContactWrap">
                        {
                            // this.state.isLoading ? 
                            //     <CircularProgress className="load" /> :
                            //     this.state.formSubmitted ? 
                            //     <Submitted /> :
                                <ContactForm handleCraftReq={this.handleCraftReq} />
                        }
                    </div>
            </div>
        )
    } 
}