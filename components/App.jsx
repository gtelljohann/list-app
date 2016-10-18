'use strict';

import React, { Component } from 'react';

import ListContainer from '../containers/ListContainer';
import ListIndexContainer from '../containers/ListIndexContainer';

import { LIST_INDEX, SINGLE_LIST } from '../constants';

export default class App extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { onLoad } = this.props;
    const lists = [{name: 'Movies', id:0}, {name: 'Shows', id:1}, {name: 'Books', id:2}];
    const listItems = [{name: 'The Two Towers', listId:0}, {name: 'The Matrix', listId:0}, {name:'Batman Begins', listId:0}, {name: 'Kung Fu Panda', listId:0}, {name:'War and Peace', listId:2}]; 

    onLoad(lists, listItems);
  }

  render () {
    return (<div id="main" className="clearfix">
      <div className="col col-8 mx-auto">
      { (() => {
        switch (this.props.currentView) {
          case SINGLE_LIST:
            return <ListContainer />
          case LIST_INDEX:
          default:
            return <ListIndexContainer />
        }
      })() }
      </div>
    </div>);
  }
}