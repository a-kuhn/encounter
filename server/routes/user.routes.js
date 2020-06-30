const userController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
  app.post("/api/logout", userController.logout);

  //these routes require authentication through jwt
  app.post("/api/users", authenticate, userController.getAll);
  app.post("/api/users/loggedin", authenticate, userController.getLoggedInUser);
};
