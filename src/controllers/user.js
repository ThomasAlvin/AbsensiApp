const db = require("../models");
const sequelize = require("sequelize");
const userController = {
  getAll: async (req, res) => {
    try {
      const user = await db.User.findAll();

      return res.send(user);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  },
  getById: async (req, res) => {
    const user = await db.User.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.send(user);
  },
  insertUserV1: async (req, res, next) => {
    try {
      const {
        first_name,
        last_name,
        username,
        address,
        email,
        password,
        company_id,
        Date,
      } = req.body;
      const result = await db.sequelize.transaction(async () => {
        const newUser = await db.User.create({
          first_name,
          last_name,
          username,
          address,
          email,
          password,
          company_id,
          Date,
        });
        console.log(newUser.dataValues);
      });
      next();
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  },
};
module.exports = userController;
