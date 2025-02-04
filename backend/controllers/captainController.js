import captainModel from "../models/captainModels.js";
import createCaptain from "../services/captainService.js";
import { validationResult } from "express-validator";
import blackListModel from "../models/backlistModel.js";

const captainRegister = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullname, email, password, vehicle } = req.body

    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain Already exist' })
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })
    await captain.save();
    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
}


const loginCaptain = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password")

    if (!captain) {
        return res.status(401).json({ message: 'Invalid captain' })
    }

    const isMatch = await captain.comparePassword(password)

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' })
    }

    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, captain })
}

const getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain })
}

const logoutCaptain = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    const existingToken = await blackListModel.findOne({ token });
    if (!existingToken) {
        await blackListModel.create({ token });
    }

    res.clearCookie("token");
    return res.status(200).json({ message: "Logged Out" });
}

export { captainRegister, loginCaptain, getCaptainProfile, logoutCaptain }