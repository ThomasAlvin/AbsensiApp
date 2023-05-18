const db = require("../models");
const sequelize = require("sequelize");
const moment = require("moment");
const mainController = {
	getAll: async (req, res) => {
		try {
			const main = await db.AttendanceLogs.findAll();
			// console.log(tes().format("hh:mm "));
			return res.send(main);
		} catch (err) {
			console.log(err);
			return res.status(500).send({
				message: err.message,
			});
		}
	},
	insertClockIn: async (req, res) => {
		try {
			await db.AttendanceLogs.create({
				clockIn: moment().format("hh:mm"),
				clockOut: null,
			});
			return res.send({
				message: "succes",
			});
		} catch (err) {
			console.log(err);
			return res.status(500).send({
				message: err.message,
			});
		}
	},
};

module.exports = mainController;
