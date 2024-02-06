const Employee = require("../Models/Employee");

exports.updateEmployee = async (req, res) => {
    try {
        
        const { id } = req.params;
        const { name, email, title, department, role } = req.body;

        const updatedDetails = await Employee.findByIdAndUpdate(id, {
            name, email, title, department, role
        });

        if(updatedDetails) {
            res.status(200).json({
                success: true,
                data: updatedDetails,
                message: "Employee Details Updated Successfully",
            });
        } else {
            res.status(404).json({
                success: false,
                data: "User not found",
                message: "User doesn't exist",
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