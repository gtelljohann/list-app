'use strict';

import { connect } from 'react-redux';

import App from '../components/App';
import { receiveLists, receiveListItems } from '../action-creators';

const mapStateToProps = ({ currentView }) => ({
  currentView
});

const mapDispatchToProps = dispatch => ({
  onLoad (lists, listItems) {
    dispatch(receiveLists(lists));
    dispatch(receiveListItems(listItems));
  }
}); 


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);