'use strict';

import { connect } from 'react-redux';

import List from '../components/List';
import { LIST_INDEX } from '../constants';
import { changeView } from '../action-creators'; 
// import { fetchAndGoToAlbum } from '../action-creators/albums';

const mapStateToProps = ({ currentList, listItems }) => ({
  currentList,
  listItems: listItems.filter(li => li.listId === currentList.id)
});

const mapDispatchToProps = dispatch => ({
  // go: album => dispatch(fetchAndGoToAlbum(album))
  back: () => dispatch(changeView(LIST_INDEX))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);