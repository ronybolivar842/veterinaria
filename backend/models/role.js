import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: String,
    race:String,
    weight: Number,
    height: Number,
    registerDate: { type: Date, default: Date.now },
    dbStatus: Boolean,
});

const role = mongoose.model("roles", roleSchema);
export default role;

