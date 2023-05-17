const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("Users", {
		fullname: Sequelize.STRING,
		username: Sequelize.STRING,
		address: Sequelize.STRING,
		email: Sequelize.STRING,
		password: Sequelize.STRING,
	});
	return User;
};
