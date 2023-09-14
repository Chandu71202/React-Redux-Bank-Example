import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  registerUser,
  selectUser,
  syncWithLocalStorage,
} from "../features/register/registerSlice";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  let userArray = useSelector(selectUser);
  let navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    accountType: "savings",
    initialDeposit: "",
    accountNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const generateAccountNumber = () => {
    const accountNumber = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
    setUser({ ...user, accountNumber });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(registerUser(user));
    axios.post("http://localhost:3500/users", user);
    alert("User Registered Successfully");
    navigate('/');
  };

  useEffect(() => {
    console.log(userArray);
    if (localStorage.getItem("users")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("users"))));
    }
  }, []);

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
            disabled
          />
          <button
            type="button"
            onClick={generateAccountNumber}
            className="generate-button"
          >
            Generate Account Number
          </button>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
