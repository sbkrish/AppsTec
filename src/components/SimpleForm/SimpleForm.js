import React, { Component } from 'react'
import './SimpleForm.css';

export default class SimpleForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName : '',
      lastName: '',
      email : '',
      address: ''
    }

  }

  handleInput = (e) => {
    const {name, value} = e.target;
    // console.log(name, value);
    this.setState({[name] : value}) // {firstName: "name"}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const {firstName, lastName, email, address} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} id="firstName" name="firstName" onChange={this.handleInput}/>
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} id="lastName" name="lastName" onChange={this.handleInput}/>
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} id="email" name="email" onChange={this.handleInput}/>
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} id="address" name="address" onChange={this.handleInput}/>
        </div>
        <button>Submit</button>
      </form>
    )
  }
}
