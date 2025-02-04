import captainModel from "../models/captainModels.js";

const createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {

    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are Required');
    }

    const captain = new captainModel({
        fullname: { firstname, lastname },
        email, password,
        vehicle: {
            color, plate, capacity, vehicleType
        }
    })

    return captain;
}

export default createCaptain