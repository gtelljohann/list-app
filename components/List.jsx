'use strict';

import React, { Component } from 'react';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.onChange.bind(this);
  }

  render () {
    return (<div>
      <h2 onClick={this.props.back}>Back</h2>
      <h1>This is a list with name {this.props.currentList.name}</h1>
      <ul>
        { this.props.listItems.map(item => <li key={item.name}>{item.name}</li>) }
      </ul>
      <form>
        <input 
          className="field"
          placeholder="Add a new item"
          onChange={this.onChange} />
      </form>
    </div>);
  }
}