import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter';
class App extends Component {
  state = { contacts: [], filter: '' };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    this.state.contacts.map(item =>
      item.name === contact.name
        ? alert(`${contact.name} is already in contacts.`)
        : console.log(this.state.contacts),
    );
  };

  filterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList contacts={visibleContacts} />
        <Filter value={filter} onChange={this.filterChange} />
      </div>
    );
  }
}

export default App;
