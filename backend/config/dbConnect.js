import dotenv from 'dotenv';

dotenv.config();


import mongoose from "mongoose";
 // This should be at the top of your dbConnect.js file

//// Connect to MongoDB
//const dbConnect = () => {
//    if (mongoose.connection.readyState >= 1) {
//        return;
//    }
//    
//    mongoose.connect(process.env.MONGODB_URI, {
//        useNewUrlParser: true,
//    });
//
//    console.log('Connected to MongoDB Successfully'.yellow.bold.underline);
//}
//
//export default dbConnect;


const dbConnect = async () => {
    try {
        //console.log(process.env.MONGODB_URL)
        await mongoose.connect("mongodb+srv://shubhra_72:hello1234@cluster0.hbtrmqg.mongodb.net/recipes", {
            
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default dbConnect;