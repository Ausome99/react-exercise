import React, { Component } from 'react';

import Alignment from './alignment.js';
import Hidden from './hide.js';
import ChangeNumber from './changeNumber.js';
import FontChange from './fontChange.js';
import ColorChange from './changeColor.js';
import Time from './time.js';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Alignment />
        <hr />
        <Hidden />
        <hr />
        <ChangeNumber />
        <hr />
        <FontChange />
        <hr />
        <ColorChange />
        <hr />
        <Time />
      </div>
    );
  }
}
