import ReactGridLayout from 'react-grid-layout';
import React, { Component } from 'react';

class Grid extends Component {

  render() {
    return (
      <ReactGridLayout className="layout" cols={8} rowHeight={30} width={1200}>
        <div key="a" _grid={{ x: 0, y: 0, w: 2, h: 2, static: true }}>a</div>
        <div key="b" _grid={{ x: 2, y: 0, w: 2, h: 2, static: true }}>b</div>
        <div key="c" _grid={{ x: 4, y: 0, w: 2, h: 2, static: true }}>c</div>
      </ReactGridLayout>
    );
  }
}
export default Grid;
