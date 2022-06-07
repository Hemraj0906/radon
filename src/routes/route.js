const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookModel= require("../models/bookModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController.js")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)
router.post("/createBook", BookController.createBook)
router.post("/getBooksInYear", BookController.getBooksInYear)
router.get("/bookList", BookController.bookList)
router.post("/getParticularBooks", BookController.getParticularBooks)
router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)



module.exports = router;