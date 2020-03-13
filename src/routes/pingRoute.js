const { Router } = require("express");
const router = Router();

const pingHandler = require("../handlers/pingHandler");

function pingRoute() {
  router.get("/ping", pingHandler.pong);
  return router;
}

module.exports = pingRoute;