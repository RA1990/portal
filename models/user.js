const bcrypt = require('bcryptjs');

const {Model, DataTypes} = require('sequelize');


class User extends Model {}
User.init({
  id: {
    type: DataTypes.UUIDV4,
    unique: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  token: {
    type: DataTypes.INTEGER,
  },
  creation_date: {
    type: DataTypes.DATE,
  },
  last_login: {
    type: DataTypes.DATE,
  },
  hooks: {
    beforeCreate: (user) => {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    },
  },
}, { sequelize, modelName: 'user' });


module.exports = {
  default: User,
};
