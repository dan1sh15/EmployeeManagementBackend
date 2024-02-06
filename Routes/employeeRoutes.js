const express = require("express");
const router = express.Router();

const { createEmployee } = require("../Controllers/createEmployee");
const { getEmployee } = require("../Controllers/getEmployee");
const { getAllEmployees } = require("../Controllers/getAllEmployees");
const { deleteEmployee } = require("../Controllers/deleteEmployee");
const { updateEmployee } = require("../Controllers/updateEmployee");

router.post("/createEmployee", createEmployee);
router.get('/getEmployee/:id', getEmployee);
router.get('/getAllEmployee', getAllEmployees);
router.delete('/deleteEmployee/:id', deleteEmployee);
router.put('/updateEmployee/:id', updateEmployee);

module.exports = router;