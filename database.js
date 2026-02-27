import mongoose from 'mongoose';
import 'dotenv/config';

const moDB = mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.mongodb.net/?appName=Cluster`
);

export default moDB;

