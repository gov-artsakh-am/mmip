module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("Users", {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    ssn: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    roleId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false
    },
    apiKey: {
      type: Sequelize.STRING
    },
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'users'
  });

  return Users;
};