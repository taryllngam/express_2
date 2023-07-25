let Sequelize = require("sequelize");

console.log(process.env)
const sequel = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);


sequel
  .authenticate()
  .then(() => { 
    console.log("connection to db successful");
  })
  .catch((error) => {
    console.error("Error connecting to database", error);
  });

  module.exports = sequel ;