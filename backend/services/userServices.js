import userModel from "../models/userModels.js";

const createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error("All fields are required");
    }

    // Check if the email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    // Hash the password before saving
    const hashedPassword = await userModel.hashPassword(password);

    // Create and save the new user
    const user = new userModel({
        fullname: { firstname, lastname },
        email,
        password: hashedPassword, // Store hashed password
    });

    await user.save(); // Save user to the database

    return user; // Return created user
};

export { createUser };
