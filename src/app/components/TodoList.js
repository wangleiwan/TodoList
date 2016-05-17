import React, { PropTypes, Component } from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  render() {
    const todolist = this.props.todos.map((todo, index) =>
      <TodoItem key={index} todo={todo} />
    );
    return (
      <div>
        <VelocityTransitionGroup
          runOnMount
          enter={{ animation: 'slideDown' }}
          leave={{ animation: 'slideUp' }}
        >
          { todolist }
        </VelocityTransitionGroup>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
