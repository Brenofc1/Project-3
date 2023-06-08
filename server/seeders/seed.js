const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

const populateUsers = async () => {
  try {
    await db.once('open');

    await User.deleteMany({});

    await User.create(userSeeds);

    console.log('Data population completed!');
  } catch (err) {
    console.error('Error populating data:', err);
  } finally {
    process.exit(0);
  }
};

populateUsers();