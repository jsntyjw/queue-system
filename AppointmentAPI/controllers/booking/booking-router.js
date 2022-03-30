"use strict";

const express = require("express");
const Controller = require("./booking-controller");


const controller = new Controller();
const router = express.Router();

router.get("/", controller.list);
router.get("/edit/:id", controller.detail);
router.post("/create", controller.create);
router.post("/update/:id", controller.update);
router.delete("/del", controller.del); 
router.get("/location/:serviceProviderLocation", controller.locationFiltering)
router.get("/citizen/:nric", controller.nricFiltering)


module.exports = router;