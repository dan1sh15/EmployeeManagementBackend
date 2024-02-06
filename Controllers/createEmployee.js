const Employee = require("../Models/Employee");

exports.createEmployee = async (req, res) => {
    try {
        const {name, email, title, department, role} = req.body;

        const employee = await Employee.create({name, email, title, department, role});

        if(employee) {
            res.status(200).json({
                success: true,
                data: employee,
                message: "Employee created successfully",
            });
        } else {
            res.status(500).json({
                success: false,
                message: "Cannot create employee",
            });
        }

    } catch (error) {
        
        console.log(error);
        console.error(error);

        res.status(500).json({
            success: false,
            data: "Internal server error occured",
            message: error.message,
        });

    }
};