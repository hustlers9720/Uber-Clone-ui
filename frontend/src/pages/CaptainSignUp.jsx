import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [color, setColor] = useState('');
    const [plate, setPlate] = useState('');
    const [capacity, setCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const navigate = useNavigate();
    const { captain, updateCaptain } = useContext(CaptainContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname: {
                firstname: firstname,
                lastname: lastname,
            },
            email: email,
            password: password,
            vehicle: {
                color: color,
                plate: plate,
                capacity: capacity,
                vehicleType: vehicleType,
            },
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if (response.status === 201) {
            const data = response.data;
            updateCaptain(data.captain)
            localStorage.setItem('token', data.token);
            navigate('/captain-home')
        }

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setColor('');
        setPlate('');
        setCapacity('');
        setVehicleType('');
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
                className="bg-white p-8 md:p-10 mt-5 rounded-xl shadow-lg w-full max-w-md space-y-6"
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

                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="text-lg text-gray-700 font-medium">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="bg-gray-200 rounded-lg px-4 border border-gray-300 w-full text-lg py-3 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-1"
                            type="email"
                            required
                            placeholder="email@example.com"
                        />
                    </div>
                    <div className="w-1/2">
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
                </div>

                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="text-lg text-gray-700 font-medium">Vehicle Color</label>
                        <input
                            onChange={(e) => setColor(e.target.value)}
                            value={color}
                            className="bg-gray-200 rounded-lg px-4 border border-gray-300 w-full text-lg py-3 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-1"
                            type="text"
                            required
                            placeholder="Vehicle Color"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="text-lg text-gray-700 font-medium">Plate Number</label>
                        <input
                            onChange={(e) => setPlate(e.target.value)}
                            value={plate}
                            className="bg-gray-200 rounded-lg px-4 border border-gray-300 w-full text-lg py-3 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-1"
                            type="text"
                            required
                            placeholder="Plate Number"
                        />
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="text-lg text-gray-700 font-medium">Capacity</label>
                        <input
                            onChange={(e) => setCapacity(e.target.value)}
                            value={capacity}
                            className="bg-gray-200 rounded-lg px-4 border border-gray-300 w-full text-lg py-3 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-1"
                            type="number"
                            required
                            placeholder="Capacity"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="text-lg text-gray-700 font-medium">Vehicle Type</label>
                        <select
                            onChange={(e) => setVehicleType(e.target.value)}
                            value={vehicleType}
                            className="bg-gray-200 rounded-lg px-4 border border-gray-300 w-full text-lg py-3 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-1"
                            required
                        >
                            <option value="">Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="motorcycle">Motorcycle</option>
                            <option value="auto">Auto</option>
                        </select>
                    </div>
                </div>

                <button className="bg-black text-white font-semibold rounded-lg w-full text-lg py-3 hover:bg-gray-900 transition-all">
                    Create an Account
                </button>
            </form>

            <div className="text-center mt-6">
                <p className="text-gray-600 inline">Already have an account?</p>
                <Link to="/captain-login">
                    <span className="text-blue-500 font-semibold cursor-pointer inline ml-2 hover:text-blue-700">
                        Sign In
                    </span>
                </Link>
            </div>

        </div>
    );
};

export default CaptainSignUp;
