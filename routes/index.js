const express = require("express");
const route = express.Router();
const controller = require("../controller/index")

route.get("/:nome/:idade", controller.getdata);

route.post("/usuario", controller.postdata)

module.exports = route;