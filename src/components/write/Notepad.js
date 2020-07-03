import React from 'react';
import './Notepad.css'

class Notepad extends React.Component {
    constructor(){
        super()
        this.state = {
            text: ""
        }
    }

    componentDidMount(){
        this.notePad.focus(); 
    }
    
    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    handleBlur = () => {
        console.log('write func to save to db')
    }

    calculateWordCount = () => {
        const { text } = this.state
        return text.trim().split(" ").length - 1
    }
    
    


    render(){
        return (
        <div className="Notepad">
            <textarea
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            ref={(input) => { this.notePad = input; }} 
            className="text-area" value={this.state.text}/>
            <div className="info-box"> {this.calculateWordCount()} </div>
        </div>
    );
}
}

export default Notepad;
