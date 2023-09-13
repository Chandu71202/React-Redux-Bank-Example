import React, { Component } from 'react';
import './Register.css';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      accountType: 'savings', // Default to 'savings', you can add more options
      initialDeposit: '',
      accountNumber: '', // Initially empty
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  generateAccountNumber = () => {
    // Generate a random 10-digit account number
    const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    this.setState({ accountNumber });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to the server or perform actions
    console.log('Form submitted with data:', this.state);
  };

  render() {
    return (
      <div>
        <h2>Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Account Type:</label>
            <select
              name="accountType"
              value={this.state.accountType}
              onChange={this.handleChange}
            >
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
              {/* Add more account types as needed */}
            </select>
          </div>
          <div>
            <label>Initial Deposit ($):</label>
            <input
              type="number"
              name="initialDeposit"
              value={this.state.initialDeposit}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Account Number:</label>
            <input
              type="text"
              name="accountNumber"
              value={this.state.accountNumber}
              readOnly // Prevents user input
            />
            <button type="button" onClick={this.generateAccountNumber}>
              Generate Account Number
            </button>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
