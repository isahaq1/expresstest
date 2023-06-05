import mongoose from "mongoose";
import validator from "validator";
import bcrypt from  "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        address:{type:String,required:false},
        email:{type:String,required:true,unique:[true,'Already Exist'],validate:[validator.isEmail,'Please endter a valid email']},
        password:{type:String,required:true},
        phonNo:{type:Number},
        image:{type:String},
        isActive:{type:Boolean,required:true,default:1},
    },
    {
        timestamps:true
    }
    
);

userSchema.method.matchPassword = async function(endterPassword){
    return await bcrypt.compare(endterPassword,this.password);

}

const User = mongoose.model("User",userSchema);
export default User;