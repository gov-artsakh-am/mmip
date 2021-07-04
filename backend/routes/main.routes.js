const controller = require("../controllers/main.controller");

const { authJwt } = require('../middlewares')

module.exports = function(app) {

  app.get("/api/main", authJwt.verifyToken, controller.get);
  app.post("/api/main", authJwt.verifyToken, controller.post);
  app.put("/api/main", authJwt.verifyToken, controller.update);
  app.delete("/api/main", authJwt.verifyToken, controller.delete);
};