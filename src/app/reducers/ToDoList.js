import { ADD_TO_DO } from '../constants/ActionTypes';

const initialState = {
  todos: [
    {
      todo: 'go shopping',
      isComplete: false,
      isEditing: false,
    },
    {
      todo: 'do laundry',
      isComplete: false,
      isEditing: false,
    },
  ],
};

const ToDoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO: {
      const newTodo = { todo: action.value, isComplete: false, isEditting: false };
      const newTodos = [...state.todos, newTodo];
      return Object.assign({}, state, { todos: newTodos });
    }
    default:
      return state;
  }
};

export default ToDoList;
