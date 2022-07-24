const Emp = require("../models/empModel");

const createEmp = async (data) => {
  try {
    const newEmp = {
      id: data.id,
      name: data.name,
      age: data.age,
      name: data.department,
      position: data.position,
    };
    const response = await new Emp(newEmp).save();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const updateEmp = async (data) => {
  try {
    const response = await Emp.updateOne({ id: data.id }, data);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const destroyEmp = async (id) => {
  try {
    const response = await Emp.findOneAndDelete(id);
    console.log(response);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const getEmp = async (id) => {
  try {
    console.log(name);
    const response = await Emp.findOne({ id: id });
    //console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getAllEmp = async () => {
  try {
    const response = await Emp.find();
    console.log(response);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};
module.exports = {
  createEmp,
  updateEmp,
  destroyEmp,
  getEmp,
  getAllEmp,
};
