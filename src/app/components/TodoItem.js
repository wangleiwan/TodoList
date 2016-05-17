import React, { PropTypes, Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class TodoItem extends Component {

  render() {
    return (
      <Row>
        <Col lg={4} md={6} sm={12} xshidden>
          {this.props.todo.todo}
        </Col>
      </Row>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
