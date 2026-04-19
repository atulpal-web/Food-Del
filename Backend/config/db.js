import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://palatul8141:atul123@atul.0srzgcf.mongodb.net/food-del')
    .then(()=>{
        console.log("DB Connected 👍");
    }).catch((err)=>{
        console.log(err);    
    })
}     