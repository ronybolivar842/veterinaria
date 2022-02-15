import mongoose from "mongoose";

const dbConnection = () => {
    try {
        mongoose.connect(process.env.BD_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connection with MongoBD: OK");
    } catch (e) {
        console.log("Error connecting to MongoDB: \n ", e);
    }

};

export default { dbConnection };