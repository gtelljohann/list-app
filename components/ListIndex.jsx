'use strict';

import React, { Component } from 'react';

export default class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (<div>
    {
      this.props.lists.map(list => (
        <div key={list.id} onClick={() => this.props.go(list)}>{list.name}</div>
      ))
    }
    </div>);
  }
}