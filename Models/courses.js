const { DataTypes } = require("sequelize");
const sequel = require("../db");

const Courses = sequel.define("course", {
//   id: {
//     type: DataTypes.UUID,
//     primaryKey: true,
//     defaultValue: DataTypes.UUIDV4,
//   },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.ENUM("1st", "2nd"),
  },
});

sequel
  .sync()
  .then(() => {
    console.log("Courses table created successfully");
  })
  .catch((error) => {
    console.error("An error occured", error);
  });

module.exports = Courses;
