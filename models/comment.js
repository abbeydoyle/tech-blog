const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Comment.init(
      {
            id: {
                  type: DataTypes.INTEGER,
                  allowNull: false, 
                  primaryKey:true,
                  autoIncrement: true,
            },

            comment_body: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  validate: {
                     len: [1]
                  }
            },

            user_id: {
                  type: DataTypes.INTEGER,
                  references: {
                        model: 'user',
                        key: 'id'
                  }
            },

            post_id: {
                  type: DataTypes.INTEGER,
                  references: {
                        model: 'user',
                        key: 'id'
                  }
            }
      },

      {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'comment'
      }
)

module.exports = Comment;