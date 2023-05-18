const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
const db = require("./models/");
const routes = require("./routes");
const User = db.User;
const Company = db.Company;
const AttendanceLog = db.AttendanceLogs;

// AttendanceLog.sync();

// User.sync();
// Company.sync();

app.use("/main", routes.mainRoutes);
app.use("/company", routes.companyRoutes);
// db.sequelize.sync({ alter: true });
// Attendance.sync({ force: true });

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
