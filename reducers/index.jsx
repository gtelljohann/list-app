'use strict';

import { combineReducers } from 'redux';
import lists from './lists';
import currentList from './currentList';
import currentView from './currentView';

const rootReducer = combineReducers({
  lists,
  currentList,
  currentView
});

export default rootReducer;