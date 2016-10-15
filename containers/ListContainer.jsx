'use strict';

import { connect } from 'react-redux';

import List from '../components/List';
// import { fetchAndGoToAlbum } from '../action-creators/albums';

const mapStateToProps = ({ currentList }) => ({
  currentList
});

const mapDispatchToProps = dispatch => ({
  // go: album => dispatch(fetchAndGoToAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);