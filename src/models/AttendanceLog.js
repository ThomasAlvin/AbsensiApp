const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
	const AttendanceLog = sequelize.define("AttendanceLogs", {
		clockIn: Sequelize.DATE,
		clockOut: Sequelize.DATE,
	});
	return AttendanceLog;
};
