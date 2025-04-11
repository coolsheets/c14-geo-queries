import { Router } from "express";
import { createTrafficCamera, findAllTrafficCamera, findTrafficCameraById } from "../models/trafficCamera.js";

const router = Router();

// list all trafficCamera
router.get('/', async function (req, res) {
    try {
        const trafficCamera = await findAllTrafficCamera()
        res.send(trafficCamera)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// create a new trafficCamera
router.post('/', async (req, res) => {
    const {name} = req.body

    if (req.body) {       
        const trafficCamera = createTrafficCamera(name)
        return res.send(trafficCamera)
    }
    else {
        return res.sendStatus(400)
    }
})

// get a particular trafficCamera
router.get('/:trafficCameraId', async function (req, res) {
    const id = req.params.trafficCameraId
    try {
        const trafficCamera = findTrafficCameraById(id)
        res.send(trafficCamera)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router