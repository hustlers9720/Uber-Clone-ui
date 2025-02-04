import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { captain, updateCaptain } = useContext(CaptainContext)
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const captain = { email: email, password };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
        if (response.status === 200) {
            const data = response.data
            updateCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }
        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
            {/* Uber Logo */}
            <img
                className="w-24 md:w-28 absolute top-6 left-6"
                src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
                alt="Uber Logo"
            />

            <div className="w-full max-w-md flex flex-col items-center">
                <form
                    onSubmit={onSubmitHandler}
                    className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign in as Captain</h3>

                    {/* Email Input */}
                    <label className="text-lg text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 mb-4 mt-1 rounded-lg px-4 border border-gray-300 w-full text-lg py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        required
                    />

                    {/* Password Input */}
                    <label className="text-lg text-gray-700 font-medium">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-200 mb-6 mt-1 rounded-lg px-4 border border-gray-300 w-full text-lg py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        required
                    />

                    {/* Login Button */}
                    <button className="bg-black text-white font-semibold rounded-lg w-full text-lg py-3 hover:bg-gray-900 transition-all">
                        Login
                    </button>
                </form>

                {/* Signup Link */}
                <p className="text-center text-gray-600 mt-4">
                    Join a fleet?{" "}
                    <Link to="/captain-signup" className="text-blue-600 font-semibold hover:underline">
                        Register as a Captain
                    </Link>
                </p>
            </div>

            {/* Sign in as User Button - Fixed at the Bottom */}
            <div className="fixed bottom-6 w-3/4 max-w-md">
                <Link
                    to="/login"
                    className="block bg-gray-900 text-white font-semibold rounded-lg w-full text-lg py-3 text-center hover:bg-gray-800 transition-all"
                >
                    Sign in as User
                </Link>
            </div>

        </div>
    );
};

export default CaptainLogin;
