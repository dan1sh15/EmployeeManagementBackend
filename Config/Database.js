const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(`${process.env.mongodbUrl}`)
    .then( () => console.log("Connected to the database successfully") )
    .catch( (error) => {
        console.log("Error Occured");
        console.error(error);
        process.exit(1);
    } );
}

module.exports = dbConnect;