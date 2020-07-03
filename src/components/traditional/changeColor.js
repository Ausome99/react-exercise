import React, { Component } from 'react';

export default class ColorChange extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textColor: 'black'
        }
    }

    handleColorChange() {
        const newColor = document.querySelector("#colorInput").value
        this.setState({
            textColor: newColor  
        })
    }

    render() {
        return (
            <div>
                <h1 style={{color: this.state.textColor}}>Color Me!</h1>
                <input name="colorInput" id="colorInput" type="text" />
                <button onClick={() => this.handleColorChange()}>Submit</button>
            </div>
        )
    }
}