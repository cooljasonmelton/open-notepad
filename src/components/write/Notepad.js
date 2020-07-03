import React from 'react';
import './Notepad.css'

class Notepad extends React.Component {

    componentDidMount(){
        this.nameInput.focus(); 
     }


    render(){
        return (
        <div className="Notepad">
            <textarea 
            ref={(input) => { this.nameInput = input; }} 
            className="text-area" />
            <div className="info-box"> what up </div>
        </div>
    );
}
}

export default Notepad;
