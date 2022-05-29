import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        course: {
            type: String,
            required: true
        },
        country: {
            type: Array,
            required:true
        },
        dob:{
            type: Date
        }

    },{timestamps:true}
)
export const User = mongoose.model('User',userSchema)