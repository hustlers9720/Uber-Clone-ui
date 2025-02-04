import mongoose from "mongoose";

function connectDb() {
    mongoose.connect(`${process.env.MONGODB_URL}/`)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
}

export default connectDb
