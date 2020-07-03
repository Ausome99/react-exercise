import React, { Component } from 'react';

export default class Hidden extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: true
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
  };

  handleShow() {
    this.setState({
      isActive: true
    });
  };

  handleHide() {
    this.setState({
      isActive: false
    });
  };

  render() {
    if (this.state.isActive) {
      return (
        <div>
          
          <button onClick={() => this.handleHide(false)}>Hide</button>
          <h1>Hide me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => this.handleShow(true)}>Show</button>
        </div>
            );
        }
    }      
}