import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: 'hello'
  };

  componentDidMount() {
    console.log('componentDidMount...');
  }

  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }
  //
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillUpdate...');
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('componentWillUpdate...');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
