const EmpService = require("../services/empService");

const createEmp = async (req, res) => {
  try {
    const emp = await EmpService.createEmp(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully created Emp",
      data: emp,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const updateEmp = async (req, res) => {
  try {
    const airline = await EmpService.updateEmp(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully Updated Emp",
      data: airline,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const deleteEmp = async (req, res) => {
  try {
    const airline = await EmpService.destroyEmp(req.params.id);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted empolyee",
      data: airline,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const getEmp = async (req, res) => {
  try {
    const airline = await EmpService.getEmp(req.params.id);

    res.status(200).json({
      success: true,
      message: "Successfully fetched employee",
      data: airline,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const getAllEmp = async (req, res) => {
  try {
    const airlines = await EmpService.getAllEmp();
    res.status(200).json({
      success: true,
      message: "Successfully Get employee",
      data: airlines,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

module.exports = {
  createEmp,
  deleteEmp,
  updateEmp,
  getEmp,
  getAllEmp,
};
