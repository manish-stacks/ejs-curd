import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("db connected");
  } catch (error) {
    console.log("db not connected", error.message);
    process.exit(1);
  }
};

export default dbConnect;
