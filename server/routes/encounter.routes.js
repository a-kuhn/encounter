const encounterController = require("../controllers/encounter.controller");

module.exports = (app) => {
  //get all
  app.get("/api/encounters", encounterController.getAll);
  //get one
  app.get("/api/encounters/:id", encounterController.getOne);
  //create
  app.post("/api/encounters", encounterController.create);
  //update
  app.put("/api/encounters/:id", encounterController.update);
  //delete
  app.delete("/api/encounters/:id", encounterController.delete);
};
