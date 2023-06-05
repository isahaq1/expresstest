import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
    {
        name:{ type : String,required:true },
        isActive:{ type : Boolean,required},
        createdby:{ type :mongoose.Schema.Types.ObjectId,ref:"User"},
 
    },
    {
        timestamps:true
    }
);

const Brand = mongoose.model("Brand",brandSchema);
export default Brand;