"use strict";

const express = require("express");
const Controller = require("./queue-controller");


const controller = new Controller();
const router = express.Router();

router.get("/", controller.list);
router.post("/create", controller.create);
router.post("/update/:id", controller.update);
router.get("/appointment/:appointmentId", controller.appointmentIdFiltering)


module.exports = router;