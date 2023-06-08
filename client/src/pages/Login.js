import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import Form from 'react-bootstrap/Form';
import AuthService from '../utils/auth';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const { data: meData, refetch: meRefetch } = useQuery(QUERY_ME);

  const { email, password } = formState;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      // Handle form validation, display an error message or prevent form submission
      return;
    }

    try {
      const { data } = await login({
        variables: { email, password }, // Pass the email and password directly
      });

      AuthService.login(data.login.token); // Use AuthService.login instead of Auth.login
      await meRefetch(); // Refetch the QUERY_ME query to update the user data after login
    } catch (err) {
      console.error(err);
      // Handle login error, display an error message
    }

    setFormState({ email: '', password: '' });
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleFormSubmit}>
        <h2 className="login-heading">Log In</h2>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-button">
          Log In
        </Button>
      </Form>

      {error && <Alert variant="danger" className="login-error">Invalid email or password</Alert>}

      <div className="text-center mt-3">
        <p>New user? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default Login;
