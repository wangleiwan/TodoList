import React, { PropTypes, Component } from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import Grid from '../components/grid';
import { connect } from 'react-redux';
// import { VelocityTransitionGroup } from 'velocity-react';

class AppContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  //   this.state = {
  //     renderSubComponent: false,
  //   };
  // }
  //
  // handleClick() {
  //   this.setState({
  //     renderSubComponent: !this.state.renderSubComponent,
  //   });
  // }

  render() {
    return (
      <div className="container">
        <Header />
        <TodoList todos={this.props.todolist} />
        <Grid />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    todolist: state.ToDoList.todos,
  }
);

AppContainer.propTypes = {
  todolist: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(AppContainer);
