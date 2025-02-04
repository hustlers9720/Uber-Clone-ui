import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConfirmRidePopup = ({ setConfirmRidePopupPanel, setRidePopupPanel }) => {
    const [otp, setOtp] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="p-2 bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto">
            {/* Close Button */}
            <div className="flex justify-center mb-4">
                <button onClick={() => setConfirmRidePopupPanel(false)}>
                    <i className="text-2xl text-gray-500 ri-arrow-down-wide-line"></i>
                </button>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-center mb-4">Confirm Ride</h3>

            {/* Rider Info */}
            <div className='flex items-center justify-between p-2 rounded-lg bg-gray-100 mb-4'>
                <div className='flex items-center gap-2'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://randomuser.me/api/portraits/men/45.jpg" alt="Rider" />
                    <h2 className='text-md font-semibold'>Harsh Patel</h2>
                </div>
                <h5 className='text-md font-bold'>2.2 Km</h5>
            </div>

            {/* Vehicle Image */}
            <div className="flex justify-center mb-4">
                <img className="h-20 w-auto object-cover rounded-lg" src="https://random.imagecdn.app/150/100" alt="Vehicle" />
            </div>

            {/* Ride Details */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 border-b">
                    <i className="ri-map-pin-fill text-lg text-blue-500"></i>
                    <div>
                        <h3 className="text-md font-semibold">562/11-A</h3>
                        <p className="text-xs text-gray-600">Karkardooma, Delhi</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-2 border-b">
                    <i className="ri-map-pin-user-line text-lg text-red-500"></i>
                    <div>
                        <h3 className="text-md font-semibold">842/22-B</h3>
                        <p className="text-xs text-gray-600">Connaught Place, Delhi</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-2">
                    <i className="ri-money-rupee-circle-fill text-lg text-green-500"></i>
                    <div>
                        <h3 className="text-md font-semibold">$193</h3>
                        <p className="text-xs text-gray-600">Cash on Delivery</p>
                    </div>
                </div>
            </div>

            {/* OTP Input */}
            <form onSubmit={submitHandler} className="mt-2 space-y-2">
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter OTP'
                />

                <Link
                    to={'/captain-riding'}
                    className="w-full bg-green-600 flex justify-center text-white font-bold rounded-lg py-2 hover:bg-green-700 transition"
                >
                    Confirm
                </Link>

                <button
                    type="button"
                    onClick={() => {
                        setConfirmRidePopupPanel(false);
                        setRidePopupPanel(false);
                    }}
                    className="w-full bg-red-600 text-white font-bold rounded-lg py-2 hover:bg-gray-300 transition"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default ConfirmRidePopup;
