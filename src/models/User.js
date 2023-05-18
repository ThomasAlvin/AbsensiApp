module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("Users", {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    username: Sequelize.STRING,
    address: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    Date: Sequelize.DATE,
  });
  return User;
};
