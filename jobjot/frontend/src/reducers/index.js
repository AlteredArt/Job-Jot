// Basic index page to group together your reducers
import { combineReducers } from 'redux';

import leads from './leads';

import errors from './errors';

import messages from './messages';

import auth from './auth';
// export all as a combined reducer
export default combineReducers({ leads, errors, messages, auth,});
