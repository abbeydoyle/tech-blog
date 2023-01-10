const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
      await sequelize.sync({ force: true });

      const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
      });

      // TODO: does this need to be an iterator?
      // for (const project of projectData) {
      //       await Project.create({
      //         ...project,
      //         user_id: users[Math.floor(Math.random() * users.length)].id,
      //       });
      // }

      const posts = await Post.bulkCreate(postData, {
            individualHooks: true,
            returning: true,
      });

      const comments = await Comment.bulkCreate(commentData, {
            individualHooks: true,
            returning: true,
      });

      process.exit(0);

}

seedDatabase();