import { Schema, model } from "mongoose";

    const userSchema = new Schema({
    name:{
        type: String,
        required: true, 
    },
    phone:{
        type: Number,
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String, 
        trim: true,
    }
});


const User = model('User', userSchema)
export default User 
