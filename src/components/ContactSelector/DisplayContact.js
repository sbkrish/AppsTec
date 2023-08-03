import React, { Component } from 'react'
import { connect } from 'react-redux'
import { contactCount, selectContact } from '../../redux/selector';

class DisplayContact extends Component {
  render() {
    const {contacts, lengthCon} = this.props;
    return (
      <div>
        <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.email}</li>
        ))}
        </ul>
        <p>Total Count : {lengthCon}</p>
      </div>
    )
  }
}

const stateToProps = (state) => ({
  contacts : selectContact(state),
  lengthCon : contactCount(state)
})

export default connect(stateToProps, null)(DisplayContact);