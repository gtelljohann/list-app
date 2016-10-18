'use strict';

import { combineReducers } from 'redux';
import lists from './lists';
import currentList from './currentList';
import currentView from './currentView';
import listItems from './listItems';

const rootReducer = combineReducers({
  lists,
  currentList,
  currentView,
  listItems
});

export default rootReducer;