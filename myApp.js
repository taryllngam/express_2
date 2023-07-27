let express = require("express");
let dotenv = require("dotenv");
dotenv.config();

const Cohort = require("./Models/cohort");
const Student = require("./Models/student");
const Book = require("./Models/books");
const Courses = require("./Models/courses");
let bodyParser = require("body-parser");

const {Op, Sequelize} = require("sequelize")

let app = express();


// student callbacks
const getStudents = async (req, res) => {
let page = req.query.page? req.query.page: 0
let limit = req.query.limit? req.query.limit: 5

  await Student.findAll({
    group: "score",
    order: [
      // ["score","DESC"],
      Sequelize.fn('MAX', Sequelize.col('score'))
    ],
    limit,
    offset: page * limit,
  })
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occurred", error);
      return res.json("An error occured").status(508);
    });
};

const getStudent = async (req, res) => {
  await Student.findOne({
    attributes: { exclude: ["name", "email", "phone", "country"] },
    where: {
      [Op.and]: [
        { id: req.params.id},
        { sex: "female"}
      ]
   
    },
    include: {
      model: Courses,
    },
  })
    .then((resp) => {
      console.log("student:", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.log("An error occured", error);
      return res.send("An error occured").status(404);
    });
};

const deleteStudent = async (req, res) => {
  await Student.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log(
        "student with Id:" + req.params.id + "has been successfully deleted"
      );
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured", error);
      res.send("An error occured").status(400);
    });
};

const createStudent = async (req, res) => {
  let student = req.body.student;
  Student.create(student, {
    include: {
      model: Courses,
    },
  })
    .then(() => {
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured", error);
      res.send("An error occured").status(400);
    });
};

const updateStudent = async (req, res) => {
  let student = req.body.student;
  await Student.update(student, {
    where: {
      id: req.params.id,
    },
  }).then((resp) => {
    console.log("student", resp);
    return res.json(resp);
  });
};

//cohort callbacks
const getCohorts = async (req, res) => {
  await Cohort.findAll()
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occurred", error);
      return res.json("An error occured").status(508);
    });
};

const getCohort = async (req, res) => {
  await Cohort.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Student,
    },
  })
    .then((resp) => {
      console.log("cohort:", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.log("An error occured", error);
      return res.send("An error occured").status(404);
    });
};

const deleteCohort = async (req, res) => {
  await Cohort.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log(
        "cohort with Id:" + req.params.id + "has been successfully deleted"
      );
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured", error);
      res.send("An error occured").status(404);
    });
};

const createCohort = async (req, res) => {
  let cohort = req.body.cohort;
  Cohort.create(cohort)
    .then(() => {
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured", error);
      res.send("An error occured").status(400);
    });
};

const updateCohort = async (req, res) => {
  let cohort = req.body.cohort;
  await Student.update(cohort, {
    where: {
      id: req.params.id,
    },
  }).then((resp) => {
    console.log("cohort", resp);
    return res.json(resp);
  });
};

//book callback
const getBooks = async (req, res) => {
  await Book.findAll()
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occurred", error);
      return res.json("An error occured").status(508);
    });
};

const getBook = async (req, res) => {
  await Book.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Student,
    },
  })
    .then((resp) => {
      console.log("book:", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.log("An error occured", error);
      return res.send("An error occured").status(404);
    });
};

const deleteBook = async (req, res) => {
  await Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log(
        "cohort with Id:" + req.params.id + "has been successfully deleted"
      );
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured", error);
      res.send("An error occured").status(404);
    });
};

const createBook = async (req, res) => {
  let book = req.body.book;
  Book.create(book)
    .then(() => {
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured", error);
      res.send("An error occured").status(400);
    });
};

const updateBook = async (req, res) => {
  let book = req.body.book;
  await Book.update(book, {
    where: {
      id: req.params.id,
    },
  }).then((resp) => {
    console.log("cohort", resp);
    return res.json(resp);
  });
};

//courses callbacks
const getCourses = async (req, res) => {
  await Courses.findAll()
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occurred", error);
      return res.json("An error occured").status(508);
    });
};

const getCourse = async (req, res) => {
  await Courses.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Student,
    },
  })
    .then((resp) => {
      console.log("book:", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.log("An error occured", error);
      return res.send("An error occured").status(404);
    });
};

const deleteCourse = async (req, res) => {
  await Courses.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log(
        "course with Id:" + req.params.id + "has been successfully deleted"
      );
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured", error);
      res.send("An error occured").status(404);
    });
};

const createCourse = async (req, res) => {
  let course = req.body.book;
  Courses.create(course)
    .then(() => {
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured", error);
      res.send("An error occured").status(400);
    });
};

const updateCourse = async (req, res) => {
  let course = req.body.book;
  await Courses.update(course, {
    where: {
      id: req.params.id,
    },
  }).then((resp) => {
    console.log("course", resp);
    return res.json(resp);
  });
};

let rootCallback = (req, res) => {
  res.json({ hello: "Welcome to Express" });
};

let postRootCallback = (req, res) => {
  res.json({ hello: "Welcome to handling the post method in express" });
};

let serveIndex = (req, res) => {
  let pathToFile = __dirname + "/views/index.html";
  res.sendFile(pathToFile);
};

let staticDir = __dirname + "/public";

let serveText = (req, res) => {
  res.send("Hello we are good with express");
};

let serveJson = (req, res) => {
  let jsonObject;
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonObject = { message: "HELLO JSON" };
  } else {
    jsonObject = { message: "Hello json" };
  }
  res.json(jsonObject);
};

let loggingMiddleware = (req, res, next) => {
  console.log(req.ip, req.method, req.path, req.time, req.params, req.body);
  next();
};

let timeMiddleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

let echoFunc = (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
};

let getQueries = (req, res) => {
  var firstName = req.query.first;
  var lastName = req.query.last;
  var age = req.query.age;
  // or you can destructure and remove the keys

  var { first, last, age } = req.query;

  res.json({
    name: `${firstName} ${lastName}`,
    firstName: `${first}`,
    lastName: `${last}`,
    age: `${age}`,
  });
};

let createPerson = (req, res) => {
  const { name, age, favorite_foods } = req.body;
  console.log(name, age, favorite_foods);
  res.json({
    name,
    age,
    favorite_foods,
  });
};

// middlewares
app.use(timeMiddleware).use(loggingMiddleware);
app.use("/public", loggingMiddleware);
app.use("/public", express.static(staticDir));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get("/", rootCallback);
app.post("/", postRootCallback);
app.get("/index.html", serveIndex);
app.get("/text", serveText);
app.get("/json", serveJson);

app.get("/now", (req, res) => {
  res.send({
    time: req.time,
  });
});

app.get("/:word/echo", echoFunc);
app.get("/query", getQueries);
app.post("/create-person", createPerson);

//student endpoints
app.get("/students", getStudents);
app.post("/students/", createStudent);
app.get("/students/:id", getStudent);
app.delete("/students/delete/:id", deleteStudent);
app.post("/students/update/:id", updateStudent);

//cohort endpoints
app.get("/cohorts", getCohorts);
app.post("/cohort/create", createCohort);
app.get("/cohort/:id", getCohort);
app.delete("/cohort/deleteCohort/:id", deleteCohort);
app.post("/cohort/updat/:id", updateCohort);

// books endpoints

app.get("/books", getBooks);
app.post("/book/", createBook);
app.get("/book/:id", getBook);
app.delete("/book/delete/:id", deleteBook);
app.post("/book/update/:id", updateBook);

//courses endpoints
app.get("/courses", getCourses);
app.post("/course/", createCourse);
app.get("/course/:id", getCourse);
app.delete("/course/delete/:id", deleteCourse);
app.post("/course/update/:id", updateCourse);

app.listen(3000);
