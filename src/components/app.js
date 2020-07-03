import React, { Component } from 'react';

import Alignment from './hooks/alignment';
import Hidden from './hooks/hide';
import ChangeNumber from './hooks/changeNumber';
import FontChange from './hooks/fontChange';
import ColorChange from './hooks/changeColor';
import Time from './hooks/time';

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
