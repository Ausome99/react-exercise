import React, { Component } from 'react';
import Moment from 'moment';

export default class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: Moment().format('LTS')
        };
    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            this.setState({ 
                currentTime: Moment().format('LTS')
        })
    }, 1000);
}

    componentWillUnmount() {
        clearInterval(this.liveTime);
    }

    render() {

        return (
            <div>
                <h2>{this.state.currentTime}</h2>
            </div>
        );
    }
}