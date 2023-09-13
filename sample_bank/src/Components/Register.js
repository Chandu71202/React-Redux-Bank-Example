import React, { useState } from 'react';
import './Register.css';

export default function Register() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    accountType: 'savings',
    initialDeposit: '',
    accountNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const generateAccountNumber = () => {
    const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    setUser({ ...user, accountNumber });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  

  }

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Account Type:</label>
          <select
            name="accountType"
            value={user.accountType}
            onChange={handleChange}
          >
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
        </div>
        <div>
          <label>Initial Deposit ($):</label>
          <input
            type="number"
            name="initialDeposit"
            value={user.initialDeposit}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={user.accountNumber}
            readOnly
          />
          <button type="button" onClick={generateAccountNumber}>
            Generate Account Number
          </button>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
