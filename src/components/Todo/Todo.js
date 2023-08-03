import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      task:'',
    }
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleTask = () => {
    const {todos, task} = this.state;
    this.setState({
      todos: [...todos, task],
      task: ''
    })
  }

  render() {
    const {todos, task} = this.state;
    return (
      <>
      <h1>Todo APP</h1>
      <div>
        <input type="text" value={task} onChange={this.handleChange}/>
        <button onClick={this.handleTask}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      </>
    )
  }
}
