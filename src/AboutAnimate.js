import React from 'react';
import './AboutAnimate.css';
import Dot from './Dot';


class AboutAnimate extends React.Component{
    state = {
        dots: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.handleChange(),
            3000
        );
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    handleChange = () => {
        if(this.state.dots.length < 1000){
            this.setState({
            dots: [...this.state.dots, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        })
        } else {
            this.setState({
                dots: [...this.state.dots]
            })
        }
    }
    render(){
        return (
            <div onMouseMove={this.handleChang} className="AnimationContainer">
                {this.state.dots.map(dot =>{
                    return(<Dot />)
                })}
            </div> 
        )
    }
}

export default AboutAnimate