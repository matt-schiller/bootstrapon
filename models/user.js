'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    api_key: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    api_enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    api_hits: DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};