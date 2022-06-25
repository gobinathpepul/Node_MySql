const express = require("express")

const router = express.Router()

const userController = require("../controllers/users.controller")

router.get("/getAllUsers", userController.getAllUsers)

module.exports = router