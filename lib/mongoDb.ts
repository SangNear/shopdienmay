import mongoose from "mongoose";

let isConnected = false

export const connectDb = async (): Promise<void> => {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("MongoDB is already connected");
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_URL || "", {
            dbName: "Shopdienmay"
        })
        isConnected = true
        console.log("MongoDb is connected");

    } catch (error) {
        console.log("MongoDb occur errors", error);

    }
}