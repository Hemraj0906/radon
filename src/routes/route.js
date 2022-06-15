const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const comMiddleware= require("../Middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",comMiddleware.mid,userController.getUserData)

router.put("/users/:userId", userController.updateUser)
router.delete("/users/:userId",userController.isDelete)

module.exports = router;