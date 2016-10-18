'use strict';

import { CHANGE_VIEW } from '../constants';

export const changeView = currentView => ({
  type: CHANGE_VIEW,
  currentView
});