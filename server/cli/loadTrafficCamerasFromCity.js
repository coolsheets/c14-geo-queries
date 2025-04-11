import { disconnectDb } from "../db.js"
import { createTrafficCamera, findTrafficCameraByCityAssetCd } from "../models/trafficCamera.js"

const response = await fetch('https://data.calgary.ca/resource/k7p9-kppz.json?$limit=500')
if (!response.ok) {
    console.log('Problem getting data from the city', response)
    process.exit()
}

const equipment = await response.json()
for (const piece of equipment) {
    const {asset_cd, type_description} = piece

    const existingEquipment = await findTrafficCameraByCityAssetCd(asset_cd)
    if (existingEquipment) {
        console.log('Updating',asset_cd)
        existingEquipment.description = type_description
        await existingEquipment.save()
    }
    else {
        console.log('Creating', asset_cd, 'of', type_description)
        await createTrafficCamera(asset_cd, type_description)
    }
}

await disconnectDb()
