const empController = require("../controllers/emp.controller");

module.exports = (app) => {
  app.post("/emp/api/v1", empController.createEmp);

  app.get("/emp/api/v1", empController.getAllEmp);

  app.delete("/emp/api/v1/:id", empController.deleteEmp);

  app.put("/emp/api/v1/:id", empController.updateEmp);

  app.get("/emp/api/v1/:id", empController.getEmp);
};
