'use strict';

import { RECEIVE_LIST_ITEMS} from '../constants';

export default function listItems (state = [], action) {
  switch (action.type) {
    case RECEIVE_LIST_ITEMS:
      return [...state, ...action.listItems];
    default:
      return state;
  }
}