'use strict';

import { SELECT_CURRENT_LIST } from '../constants';

const initialCurrentList = {};

export default function currentList (state = initialCurrentList, action) {
  switch (action.type) {
    case SELECT_CURRENT_LIST:
      return action.currentList;
    default:
      return state;
  }
}