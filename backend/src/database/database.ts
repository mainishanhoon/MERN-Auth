import mongoose from 'mongoose';
import { config } from '../config/app';

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB');
    process.exit(1);
  }
};

export default connectDatabase;
