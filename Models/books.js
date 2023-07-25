const { DataTypes } = require("sequelize");
const sequel = require("../db");
const Cohort = require("../Models/cohort");


const Book = sequel.define("book", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.ENUM("1st", "2nd"),
  },
  cohortId: {
    type: DataTypes.UUID,
  },
  country: {
    type: DataTypes.STRING,
  },
});

Book.belongsTo(Cohort);

sequel
.sync()
  .then(() => { 
    console.log("book table created successfully");
  })
  .catch((error) => {
    console.error("An error occured", error);
  });

module.exports = Book;