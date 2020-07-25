import { combineReducers } from 'redux';
import visibilityFilter from 'store/reducers/visibilityFilter';
import todos from 'store/reducers/todos';

export default combineReducers({ todos, visibilityFilter });
