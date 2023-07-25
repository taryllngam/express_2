const { DataTypes } = require("sequelize");
const sequel = require("../db");


const Cohort = sequel.define("cohorts", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startingMonth: {
        type: DataTypes.CHAR,
    },
    startingYear: {
        type: DataTypes.CHAR,
    },
})



sequel
.sync()
  .then(() => { 
    console.log("cohorts table created successfully");
  })
  .catch((error) => {
    console.error("An error occured", error);
  });

module.exports = Cohort;