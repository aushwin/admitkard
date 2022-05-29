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

userSchema.statics.findUser =async  function  findUser (email,callback) {
    try{
        const response = await this.find({email})
        if (response.length>0) return true
        else return false
    }catch(e){
        return e
    }
}

export const User = mongoose.model('User',userSchema)