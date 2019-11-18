import {applyMiddlware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from './reducers/index'

const middleware = applyMiddlware(logger(), thunk, promise());

export default createStore(reducers, middleware);