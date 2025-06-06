import { connectDb } from "../server/db.js";

const mongoose = await connectDb();

// Schema 
const playgroundEquipmentSchema = new mongoose.Schema({
    city_asset_cd: String,
    description: String,
})

// Models
const PlaygroundEquipment = mongoose.model('playgroundEquipment', playgroundEquipmentSchema, 'playgroundEquipment')

// Functions to expose to the outside world!
export async function createPlaygroundEquipment(city_asset_cd, description) {
    const newPlaygroundEquipment = await PlaygroundEquipment.create({
        city_asset_cd,
        description
    })    
    return newPlaygroundEquipment
}

export async function findAllPlaygroundEquipment() {
    const playgroundEquipment = await PlaygroundEquipment.find()
    return playgroundEquipment
}

export async function findPlaygroundEquipmentById(id) {
    const playgroundEquipment = await PlaygroundEquipment.findById(id)
    return playgroundEquipment
}

export async function findPlaygroundEquipmentByCityAssetCd(asset_cd) {
    const playgroundEquipment = await PlaygroundEquipment.findOne({ city_asset_cd: asset_cd })
    return playgroundEquipment
}

// In 1791, the metre was defined as 1 ten millionth the distance
// between the north pole and the equator travelling through Paris. 
// 234 years later, Tony used this formula in a sofware development
// class focused on geographic queries.
const METERS_PER_DEGREE = 10000000/90 

export async function findPlaygroundEquipmentNear(lat, lon, distanceM) {
    return []
}
