import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const value = this.refs.input.value;
    if (value !== '') {
      this.props.actions.addToDo(value);
      this.refs.input.value = '';
    } else {
      console.log('you didnt enter anything!');
    }
  }

  render() {
    return (
      <div className="header">
        <nav className="navbar">
          <ul className="navlist">
            <li className="title"> ToDoList </li>
            <li className="input">
              <input
                ref="input"
                type="text"
                placeholder="Add To Do"
              />
            </li>
            <li className="addButton">
              <button className="add" onClick={this.handleClick}> + </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(todoActions, dispatch),
  }
);

Header.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
