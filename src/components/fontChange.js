import React, { Component } from 'react';

export default class FontChange extends Component {
    constructor(props) {
        super(props);

        this.state = {
            font: 30
        }
        this.handleFontChangeUp = this.handleFontChangeUp.bind(this);
        this.handleFontChangeDown = this.handleFontChangeDown.bind(this);
    }

    handleFontChangeUp(changeFont) {
        this.setState({ font: this.state.font + 10})
    }

    handleFontChangeDown(changeFont) {
        this.setState({ font: this.state.font - 10})
    }

    render() {
        return (
            <div >
                <button onClick={() => this.handleFontChangeUp()}>Font Size Up</button>
                <button onClick={() => this.handleFontChangeDown()}>Font Size Down</button>
                <h3 style={{ fontSize: `${this.state.font}px` }}>{`${this.state.font}`}</h3>
            </div>
        )
    }
}
