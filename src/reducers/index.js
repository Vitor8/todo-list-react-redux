import { combineReducers } from 'redux';

import todolist from './todolist';

const rootReducer = combineReducers({
  todolist,
});

export default rootReducer;