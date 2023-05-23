const express = require("express");
const router =  express.Router();
const helloController = require("../controllers/helloController")

//this is my first api
router.get("/hello-get", helloController.helloGet)
router.post("/hello-post", helloController.helloPost)
module.exports= router;