const Employee = require("../Models/Employee");

exports.deleteEmployee = async (req, res) => {
    try {
        
        const {id} = req.params;

        await Employee.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Deleted Employee details successfully",
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