import React, { Component } from 'react'
import { connect } from 'react-redux';
import addContact from '../../redux/actions';

class ContactSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      email : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      email : this.state.email
    }
    this.props.addContact(newContact);
    this.setState({email: ""})
  }

  render() {
    const {email} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" placeholder='Enter email' value={email} onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default connect(null, {addContact})(ContactSelector)
