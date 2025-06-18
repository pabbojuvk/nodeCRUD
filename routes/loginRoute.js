const express = require("express");
const router = express.Router();

const { loginController } = require("../controllers/loginController");

router.get("/v1/api/login", loginController);

module.exports = router;
