import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const contact = { id: name, name, number };
    this.props.onSubmit(contact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={name}>
          Name
          <input
            className={s.input}
            type="text"
            value={name}
            name={'name'}
            onChange={this.handleChange}
            id={name}
            placeholder="Enter contact name"
            required
          />
        </label>
        <label className={s.label} htmlFor={number}>
          Number
          <input
            className={s.input}
            type="tel"
            name={'number'}
            value={number}
            onChange={this.handleChange}
            id={number}
            placeholder="Enter contact number"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add the new contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
