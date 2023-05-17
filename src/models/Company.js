const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
	const Company = sequelize.define("Companys", {
		name: Sequelize.STRING,
		address: Sequelize.STRING,
	});
	return Company;
};
