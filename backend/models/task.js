import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: "users"},
    name: String,
    race:String,
    weight: Number,
    height: Number,
    taskStatus: "to-do",
    ImageUrl: String,
    registerDate: {type: Date, default: Date.now},
})