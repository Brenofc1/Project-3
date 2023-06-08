import { createHttpLink } from '@apollo/client';
import decode from 'jwt-decode';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql', // Update with your GraphQL server URL
});

const AuthService = {
  getProfile() {
    const token = this.getToken();
    if (token) {
      return decode(token);
    }
    return null;
  },

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  },

  isTokenExpired(token) {
    const decoded = decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  },

  getToken() {
    return localStorage.getItem('authToken');
  },

  login(authToken) {
    localStorage.setItem('authToken', authToken);
    window.location.href = '/';
  },

  logout() {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }
};

export default AuthService;
