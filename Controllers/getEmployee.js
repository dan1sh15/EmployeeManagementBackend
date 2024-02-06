const Employee = require("../Models/Employee");

exports.getEmployee = async (req, res) => {
    try {
        
        const {id} = req.params;
        const employeeDetails = await Employee.findById(id);

        if(employeeDetails) {
            res.status(200).json({
                success: true,
                data: employeeDetails,
                message: "Employee Details fetched successfully",
            });
        } else {
            res.status(404).json({
                success: false,
                data: "User not found",
                message: "Cannot fetch User",
            });
        }

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