const Employee = require("../Models/Employee");

exports.getAllEmployees = async (req, res) => {
    try {
        
        const allEmployeeData = await Employee.find({});

        res.status(200).json({
            success: true,
            data: allEmployeeData,
            message: "Fetched data successfully",
        });

    } catch (error) {
        console.log(error);
        console.error(error);

        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: error.message,
        });
    }
};