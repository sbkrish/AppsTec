import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delContact } from '../../redux/actions'
class ContactList extends Component {
    

  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => (
            <li key={contact.id}>
                {contact.name} {contact.email}
                <button onClick={()=>this.props.delContact(contact.id)}>Delete</button>
            </li>
        )) }
      </ul>
    )
  }
}

const propsData = (state) => ({
    contacts: state.contacts
})

export default connect(propsData, {delContact})(ContactList);
