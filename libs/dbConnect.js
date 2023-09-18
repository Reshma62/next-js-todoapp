import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("Mongodb is connected");
    });
  } catch (error) {
    console.log(error);
  }
};
export default dbConnect;
