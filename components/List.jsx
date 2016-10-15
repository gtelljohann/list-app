'use strict';

import React, { Component } from 'react';

export default class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (<div>
      This is a list with name {this.props.currentList.name}
    </div>);
  }
}