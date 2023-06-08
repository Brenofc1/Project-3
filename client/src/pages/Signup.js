import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import './Signup.css';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
    role: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await addUser({
        variables: {
          input: { ...formState },
        },
      });
  
      console.log('User added:', data);
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  return (
    <>
      {data?.addUser ? (
        <Alert variant="success">
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </Alert>
      ) : (
        <Form onSubmit={handleFormSubmit} className="signup-form">
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              onChange={handleChange}
              value={formState.username}
              name="username"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={formState.email}
              name="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={formState.password}
              name="password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mobile">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile Number"
              onChange={handleChange}
              value={formState.mobile}
              name="mobile"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              onChange={handleChange}
              value={formState.address}
              name="address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="role">
            <Form.Label>User Role</Form.Label>
            <Form.Select
              onChange={handleChange}
              value={formState.role}
              name="role"
              required
            >
              <option value="">Select Role</option>
              <option value="new-customer">New Customer</option>
              <option value="technician">Technician</option>
              <option value="project-manager">Project Manager</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
      {error && <Alert variant="danger">{error.message}</Alert>}
    </>
  );
};

export default Signup;
