const userController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
  app.post("/api/logout", userController.logout);

  //these routes require authentication through jwt
  app.get("/api/users", authenticate, userController.getAll);
  app.get("/api/users/loggedin", authenticate, userController.getLoggedInUser);
};

//IMPORTANT: NOW THAT WE ARE USING COOKIES FOR AUTHENTICATION AND AUTHORIZATION, WE WILL MAKE SURE EACH REQUEST IS SENT WITH { withCredentials: true }. THIS WILL SEND THE COOKIES WITH EACH REQUEST SO OUR MIDDLEWARE WILL VERIFY WHO IS LOGGED IN.
