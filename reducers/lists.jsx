'use strict';

import { RECEIVE_LISTS } from '../constants';

export default function lists (state = [], action) {
  switch (action.type) {
    case RECEIVE_LISTS: 
      return action.lists;
    default:
      return state;
  }
}