import React from 'react';
import './AboutAnimate.css';
import Dot from './Dot';


class AboutAnimate extends React.Component{
    state = {
            content: '', 
            left: 100,
            top: 100,
            dots: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            dotSize: '0.5em'
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
            left: Math.floor(Math.random()*300),
            top: Math.floor(Math.random()*200),
            dotSize: `${Math.floor(Math.random()*3)}em`,
            dots: [...this.state.dots, 1, 1, 1, 1]
        })
        } else {
            this.setState({
                left: Math.floor(Math.random()*300),
                top: Math.floor(Math.random()*200),
                dotSize: `${Math.floor(Math.random()*3)}em`,
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