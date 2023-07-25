const { DataTypes } = require("sequelize");
const sequel = require("../db");
const Cohort = require("../Models/cohort");
const Book = require("../Models/books");
const Courses = require("../Models/courses");

const Student = sequel.define("student", {
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
  dob: {
    type: DataTypes.DATE,
  },
  street: {
    type: DataTypes.STRING,
  },
  town: {
    type: DataTypes.STRING,
  },
  region: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  sex: {
    type: DataTypes.ENUM("male", "female"),
  },
  score: {
    type: DataTypes.STRING,
  },
});
Student.belongsTo(Cohort);
Cohort.hasMany(Student);

Courses.hasMany(Student)

// const StudentBooks = sequel.define("student_books", {}, { timestamps: false });
const StudentCourses = sequel.define(
  "student_course",
  {},
  { timestamps: false }
);

// Book.belongsToMany(Student, { through: StudentBooks });
// Student.belongsToMany(Book, { through: StudentBooks });

Courses.belongsToMany(Student, { through: StudentCourses });
Student.belongsToMany(Courses, { through: StudentCourses });

sequel
  .sync({ alter: true })
  .then(() => {
    console.log("student table created successfully");
  })
  .catch((error) => {
    console.error("An error occured", error);
  });

module.exports = Student;
