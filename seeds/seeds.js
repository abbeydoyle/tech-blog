const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedUsers = require('./userSeeds');
const seedPosts = require('./postSeeds');
const seedComments = require('./commentSeeds');

const seedDatabase = async () => {
      await sequelize.sync({ force: true });

      await seedUsers();

      await seedPosts();

      await seedComments();

      process.exit(0);
}

seedDatabase();