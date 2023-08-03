import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addContact } from '../../redux/actions';

class ContactManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: ''
    };
  }

  handleChange = (e) => {
    const {name} = e.target;
    this.setState({
      [name] : e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.userName,
      email: this.state.email,
      id: Date.now() 
    }
    this.props.addContact(newContact);
    this.setState({
      userName: "",
      email: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='Enter name' value={this.state.userName} name="userName" onChange={this.handleChange}/>
        <input type="email" placeholder='Enter email' value={this.state.email} name="email" onChange={this.handleChange}/>
        <button type='submit'>Add Contact</button>
      </form>
    )
  }
}

export default connect(null, {addContact})(ContactManager);