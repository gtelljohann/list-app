'use strict';

import { RECEIVE_LISTS, SELECT_CURRENT_LIST, SINGLE_LIST } from '../constants';
import { changeView } from './views';  

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const selectCurrentList = currentList => ({
  type: SELECT_CURRENT_LIST,
  currentList
});

// async action creators
export const fetchAndRenderList = list => {
  return dispatch => {
    dispatch(changeView(SINGLE_LIST));
    dispatch(selectCurrentList(list));
  };
};