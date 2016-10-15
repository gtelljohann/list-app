'use strict';

import { CHANGE_VIEW, LIST_INDEX } from '../constants';

export default function currentView (state = LIST_INDEX, action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.currentView;
    default: 
      return state;
  }
}