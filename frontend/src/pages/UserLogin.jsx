import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext.jsx';
import axios from 'axios';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, { email, password });
            if (response.status === 200) {
                const data = response.data;
                setUser(data.user);
                localStorage.setItem('token', data.token);
                navigate('/home2');
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
            <img className="w-24 md:w-28 mb-6" src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="Uber Logo" />

            <form onSubmit={onSubmitHandler} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg lg:max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Sign in to Uber</h3>

                <div className="mb-4">
                    <label className="block text-lg text-gray-700 font-medium">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="bg-gray-200 mt-1 rounded-lg px-4 border border-gray-300 w-full text-lg py-2 focus:outline-none focus:ring-2 focus:ring-gray-600" type="email" required placeholder="email@example.com" />
                </div>

                <div className="mb-6">
                    <label className="block text-lg text-gray-700 font-medium">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className="bg-gray-200 mt-1 rounded-lg px-4 border border-gray-300 w-full text-lg py-2 focus:outline-none focus:ring-2 focus:ring-gray-600" type="password" required placeholder="Password" />
                </div>

                <button className="bg-black text-white font-semibold rounded-lg w-full text-lg py-3 hover:bg-gray-900 transition-all">Login</button>
            </form>

            <p className="text-center text-gray-600 mt-4">
                New here? <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Create an account</Link>
            </p>

            <div className="mt-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
                <Link to="/captain-login" className="block bg-gray-900 text-white font-semibold rounded-lg w-full text-lg py-3 text-center hover:bg-gray-800 transition-all">Sign in as Captain</Link>
            </div>
        </div>
    );
};

export default UserLogin;
