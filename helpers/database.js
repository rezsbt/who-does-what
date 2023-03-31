import mongoose from "mongoose"
// Helpers
import { errorDivider } from "./functions"

export async function connectDB () {
  // If already connected end process
  if (mongoose.connections[0].readyState) return
  // If not connected, connect to the database
  mongoose.set('strictQuery', false)
  await mongoose.connect(process.env.MONGO_URI)
  console.log('---------- Connected to database ----------')
}

export async function tryConnectDB (callback) {
  try {
    await connectDB()
  } catch (err) {
    console.log('Connecting to DB error', err)
    callback(err)
  }
}