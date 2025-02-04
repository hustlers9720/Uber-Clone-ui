import { getAddressCoordinate } from "../services/mapsService.js";
import { validationResult } from "express-validator";

const getCoordinates = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { address } = req.query;

    try {
        const coordinates = await getAddressCoordinate(address);

        res.status(200).json(coordinates)

    } catch (error) {
        res.status(404).json({ message: 'Coordinate not found' })

    }
}

export { getCoordinates }