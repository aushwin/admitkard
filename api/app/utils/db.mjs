import mongoose from 'mongoose'
const dbURI = 'mongodb+srv://aushwin:SupermanQ@cluster0.8n7bl.mongodb.net/prod'

export const dbConnect =() =>{
    return mongoose.connect(dbURI)
}