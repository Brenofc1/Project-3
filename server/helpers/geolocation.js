const axios = require('axios');

// Function to fetch geolocation data
const getGeolocation = async () => {
  try {
    const response = await axios.get('https://api.example.com/geolocation'); // Replace with the actual geolocation API endpoint

    // Process and return the geolocation data as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    throw new Error('Failed to fetch geolocation data');
  }
};

module.exports = { getGeolocation };