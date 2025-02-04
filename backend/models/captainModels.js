import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name must have at least 3 characters"],
        },
        lastname: {
            type: String,
            minlength: [3, "Last name must have at least 3 characters"],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Changed `lowerCase` to `lowercase` (correct property)
        match: [/^\S+@\S+\.\S+$/, "Email must be valid"], // Fixed regex syntax
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "color must have at least 3 characters"],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate number  must have at least 3 characters"],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'CApacity must be atleast 1']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "motorcycle", "auto"],
        },
        location: {
            lat: {
                type: Number,
            },
            lng: {
                type: Number,
            }
        }
    }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}


captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}



const captainModel = mongoose.model("captain", captainSchema);
export default captainModel;
