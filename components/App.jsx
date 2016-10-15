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
    const lists = [{name: 'Movies'}, {name: 'Shows'}, {name: 'Books'}];

    onLoad(lists);
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