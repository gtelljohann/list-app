'use strict';

import { connect } from 'react-redux';

import ListIndex from '../components/ListIndex';
import { fetchAndRenderList } from '../action-creators/lists';

const mapStateToProps = ({ lists }) => ({
  lists
});

const mapDispatchToProps = dispatch => ({
  go: list => dispatch(fetchAndRenderList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex);