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

// Basically is https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/api/booking/ + above routes
// Examples are below:

// TO CREATE A NEW APPOINMENT: https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/api/booking/create  
// TO GET ALL APPOINTMENTS: https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/api/booking/
// TO GET ALL APPOINTMENTS IN TAMPINES: https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/api/booking/location/Tampines
// TO GET ALL APPOINTMENTS FOR CITIZEN WITH NRIC G1238888X: https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/api/booking/citizen/G1238888X


module.exports = router;    