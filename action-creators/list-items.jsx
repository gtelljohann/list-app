'use strict';

import { RECEIVE_LIST_ITEMS, CREATE_LIST_ITEM } from '../constants';

export const receiveListItems = listItems => ({
  type: RECEIVE_LIST_ITEMS,
  listItems
});

export const createListItem = listItem => ({
  type: CREATE_LIST_ITEM,
  listItem
});