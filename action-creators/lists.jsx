'use strict';

import { RECEIVE_LISTS } from '../constants';  

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const fetchAndRenderList = list => ({
  // type: 
})