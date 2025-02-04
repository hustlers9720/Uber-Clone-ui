import userModel from "../models/userModels.js";
import { validationResult } from "express-validator";
import blackListModel from "../models/backlistModel.js";

const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password } = req.body;

        const isUserAlreadyExist = await userModel.findOne({ email })
        if (isUserAlreadyExist) {
            return res.status(400).json({ message: "User already Exist" })
        }

        const hashedPassword = await userModel.hashPassword(password);

        const user = new userModel({
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname,
            },
            email,
            password: hashedPassword,
        });

        await user.save();
        const token = user.generateAuthToken();

        return res.status(201).json({ token, user });
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({ error: "Invalid Email" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ error: "Invalid Password" });
    }

    const token = user.generateAuthToken();
    return res.status(200).json({ token, user });
};

const getUserProfile = async (req, res) => {
    res.status(200).json(req.user);
};

const logoutUser = async (req, res, next) => {

    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    const existingToken = await blackListModel.findOne({ token });
    if (!existingToken) {
        await blackListModel.create({ token });
    }
    res.clearCookie("token");

    return res.status(200).json({ message: "Logged Out" });

};

export { registerUser, loginUser, getUserProfile, logoutUser };
