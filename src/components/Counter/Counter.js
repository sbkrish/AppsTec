import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
        count : 0
    }
  }
  handleIncrease = () => {
    this.setState((val) => ({
        count : val.count + 1
    }));
  }

  handleDecrease = () => {
    this.setState((val) => ({
        count : val.count - 1
    }));
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h2>Counter : {count}</h2>
        <button onClick={this.handleIncrease}>Increment</button>
        <button onClick={this.handleDecrease}>Decrement</button>
      </div>
    )
  }
}
