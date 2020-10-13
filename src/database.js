import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const conection = mongoose.connection;

conection.once("open", () => {
  console.log("DB is connected");
});
