import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = filtredEl => {
    this.setState({ filter: filtredEl });
  };

  handleSubmitForm = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.includes(this.state.filter)
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmitForm} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        <ul>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}</span>
              <span>{contact.number}</span>
            </li>
          ))}
        </ul>
      </div>

      // <h2>Contacts</h2>

      // <ContactList ... />
    );
  }
}
