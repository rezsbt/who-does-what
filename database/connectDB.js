import mongoose from "mongoose"
// Helpers
import { errorDivider } from "@/helpers/functions"

const connectDB = async () => {
  // If already connected end process
  if (mongoose.connections[0].readyState) return
  // If not connected, connect to the database
  mongoose.set('strictQuery', false)
  await mongoose.connect(process.env.MONGO_URI)
  console.log('********** Database connected **********')
}

export default connectDB