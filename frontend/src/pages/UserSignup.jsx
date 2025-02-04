import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext.jsx';

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const newUser = {
            fullname: {
                firstname,
                lastname
            },
            email,
            password
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

            if (response.status === 201) {
                const data = response.data
                setUser(data.user);
                localStorage.setItem('token', data.token)
                navigate('/Home2');
            }
        } catch (error) {
            console.error('Signup failed:', error);
        }

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6 relative">
            <img
                className="w-24 md:w-28 absolute top-6 left-6"
                src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
                alt="Uber Logo"
            />

            <form
                onSubmit={submitHandler}
                className="bg-white p-8 md:p-10 rounded-xl shadow-lg w-full max-w-md space-y-6"
            >
                <h3 className="text-2xl font-semibold text-gray-900 text-center">What's your name</h3>

                <div className="flex space-x-4">
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstname}
                        className="bg-gray-200 rounded-lg px-4 border border-gray-300 w-1/2 text-lg py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        type="text"
                        required
                        placeholder="First name"
                    />
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastname}
                        className="bg-gray-200 rounded-lg px-4 border border-gray-300 w-1/2 text-lg py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        type="text"
                        required
                        placeholder="Last name"
                    />
                </div>

                <div>
                    <label className="text-lg text-gray-700 font-medium">What's your Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="bg-gray-200 rounded-lg px-4 border border-gray-300 w-full text-lg py-3 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-1"
                        type="email"
                        required
                        placeholder="email@example.com"
                    />
                </div>

                <div>
                    <label className="text-lg text-gray-700 font-medium">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="bg-gray-200 rounded-lg px-4 border border-gray-300 w-full text-lg py-3 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-1"
                        type="password"
                        required
                        placeholder="Password"
                    />
                </div>

                <button className="bg-black text-white font-semibold rounded-lg w-full text-lg py-3 hover:bg-gray-900 transition-all">
                    Create Account
                </button>
            </form>

            <p className="text-center text-gray-600 mt-4">
                Already have an Account?{" "}
                <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                    Login Here
                </Link>
            </p>

            <div className="fixed bottom-6 flex flex-col items-center w-3/4 max-w-md">
                <p className="text-center text-xs text-gray-600">
                    By proceeding, you agree to receive calls, SMS, and messages, including automated ones, from our side.
                </p>
            </div>
        </div>
    );
};

export default UserSignup;
