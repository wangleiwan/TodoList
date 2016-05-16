import { combineReducers } from 'redux';
// import dashboard from './dashboard';
import ToDoList from './ToDoList';

const rootReducer = combineReducers({
  ToDoList,
});

export default rootReducer;
