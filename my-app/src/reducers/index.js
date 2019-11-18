import {combineReducers} from 'redux';

import tweets from './tweetsReducer';
import user from './userReducer';

export default combineReducers({
    user,
    tweets
})