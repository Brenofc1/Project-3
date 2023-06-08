const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../helpers/authHelpers');
const { getGeolocation } = require('../helpers/geolocation');

const resolvers = {
  Query: {
    users: async () => {
      // Logic to fetch and return the list of users
      const users = await User.find();
      return users;
    },
    
    itIssueOptions: () => {
      // Return the list of available IT issue options
      return [
        'No connection to the internet',
        'Device not turning on/off',
        'Touchscreen not working',
        // Add more IT issue options as needed
      ];
    },
    
    me: async (parent, args, context) => {
      if (context.user) {
        // Process the geolocation data as needed
        // You can combine it with the existing logic to fetch the user data
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addUser: async (parent, { input }, context) => {
      // Check if the user is authenticated
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in to perform this operation.');
      }
      
      // Check if the authenticated user has the necessary permissions to add a user
      // You can implement your own authorization logic here
      
      try {
        const { username, email, password } = input;
        const newUser = await User.create({ username, email, password });

        const token = signToken(newUser);

        return { token, user: newUser };
      } catch (error) {
        throw new Error('Failed to create a new user.');
      }
    },
    
    login: async (parent, { email, password }) => {
      try {
        const foundUser = await User.findOne({ email });

        if (!foundUser) {
          throw new AuthenticationError('User not found.');
        }

        const isCorrectPassword = await foundUser.isCorrectPassword(password);

        if (!isCorrectPassword) {
          throw new AuthenticationError('Invalid email or password.');
        }

        const token = signToken(foundUser);

        return { token, user: foundUser };
      } catch (error) {
        throw new AuthenticationError('Invalid email or password.');
      }
    },
    
    submitITIssue: (parent, { category, issue }) => {
      // Process the submitted IT issue and perform necessary actions
      // You can handle the category and issue values as needed
      // For example, you can store them in a database or trigger appropriate actions based on the selected issue
      // Return a success message or any relevant response
      return `Submitted IT issue: Category - ${category}, Issue - ${issue}`;
    },
  },
};

module.exports = resolvers;
