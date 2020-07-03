import React, { Component } from 'react';

export default class ChangeNumber extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }

        this.handleNumUp = this.handleNumUp.bind(this);
        this.handleNumDown = this.handleNumDown.bind(this);
    }

    handleNumUp() {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleNumDown() {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleNumUp()}>+</button>
                <h3>{this.state.number}</h3>
                <button onClick={() => this.handleNumDown()}>-</button>
                
            </div>
        )
    }
}