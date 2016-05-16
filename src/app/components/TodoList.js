import React, { PropTypes, Component } from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

class TodoList extends Component {

  render() {
    const todolist = this.props.todos.map((todo) =>
      <div>{todo.todo}</div>
    );
    return (
      <div>
        <VelocityTransitionGroup
          runOnMount
          enter={{animation: "slideDown"}}
          leave={{animation: "slideUp"}}
        >
          { todolist }
        </VelocityTransitionGroup>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList;
