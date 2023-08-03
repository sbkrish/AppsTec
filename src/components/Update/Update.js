import React, { Component } from 'react'

export default class Update extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      console.log("Component updated successfully")
    }
  }

  componentWillUnmount() {
    console.log("Unmounted successfully");
  }

  handleClick = () => {
    this.setState((val) => ({
      count : val.count + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
