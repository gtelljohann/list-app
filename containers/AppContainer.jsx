'use strict';

import { connect } from 'react-redux';

import App from '../components/App';
import { receiveLists } from '../action-creators/lists'; 

const mapStateToProps = ({ currentView }) => ({
  currentView
});

const mapDispatchToProps = dispatch => ({
  onLoad (lists) {
    dispatch(receiveLists(lists));
  }
}); 


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);