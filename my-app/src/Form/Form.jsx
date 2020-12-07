import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class Form extends Component {
  state = { name: '', number: '', id: '' };
  handleFormChange = event => {
    const contactId = uuidv4();
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value, id: contactId });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleFormChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            value={this.state.number}
            name="number"
            onChange={this.handleFormChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;
