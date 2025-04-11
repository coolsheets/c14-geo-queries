import { connectDb } from "../db.js";

const mongoose = await connectDb();

// Schema 
const trafficCameraSchema = new mongoose.Schema({
    description: String,
    url: String,
    camera_location: String
})

trafficCameraSchema.index({ location: '2dsphere' })

// Models
const trafficCamera = mongoose.model('trafficCamera', trafficCameraSchema, 'trafficCamera')

// Functions to expose to the outside world!
export async function createtrafficCamera(city_asset_cd, description) {
    const newtrafficCamera = await trafficCamera.create({
        city_asset_cd,
        description
    })    
    return newtrafficCamera
}

export async function findAlltrafficCamera() {
    const trafficCamera = await trafficCamera.find()
    return trafficCamera
}

export async function findtrafficCameraById(id) {
    const trafficCamera = await trafficCamera.findById(id)
    return trafficCamera
}

export async function findtrafficCameraByCityAssetCd(asset_cd) {
    const trafficCamera = await trafficCamera.findOne({ city_asset_cd: asset_cd })
    return trafficCamera
}

// In 1791, the metre was defined as 1 ten millionth the distance
// between the north pole and the equator travelling through Paris. 
// 234 years later, Tony used this formula in a sofware development
// class focused on geographic queries.
const METERS_PER_DEGREE = 10000000/90 

export async function findtrafficCameraNear(lat, lon, distanceM) {
    return []
}
