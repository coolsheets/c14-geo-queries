import { disconnectDb } from "../db.js";
import { findAllTrafficCamera } from "../models/trafficCamera.js";

const trafficCamera  = await findAllTrafficCamera()
console.log(trafficCamera)

await disconnectDb()