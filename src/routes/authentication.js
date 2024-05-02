const authenticationController = require("../controller/authenticationController")

const router = require("express").Router();

router.post("/login",authenticationController.login);
router.post("/register",authenticationController.register)

module.exports = router;