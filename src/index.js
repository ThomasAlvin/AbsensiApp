const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
const db = require("./models/");
// const routes = require("./routes");
// const Branch = db.;
const User = db.User;
const Company = db.Company;
const Attendance = db.Attendance;

// Attendance.sync();
// User.sync();
// Company.sync();

// db.sequelize.sync({ alter: true });

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
