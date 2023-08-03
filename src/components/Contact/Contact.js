import React, { Component } from 'react'
// import { addContact } from '../../redux/actions';
import './Contact.css'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: props.data,
      person: '',
    };
  }



  handleChange = (e) => {
    this.setState({ person: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { person, names } = this.state;

    if (person.trim()) {
      this.setState({
        names: [...names, person],
        person: ''
      }); 
    }
  };

  render() {
    const { names, person } = this.state;
    const name = names.map((val, index) => <li key={index}>{val}</li>);

    return (
      <div className="contactForm">
        <h2>Contact Manager</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="Input-text"
            onChange={this.handleChange}
            value={person}
            placeholder="Enter name"
          />
          <input type="submit" className="submit" value="Add" />
        </form>
        <hr />
        <ul>{name}</ul>
      </div>
    );
  }
}


