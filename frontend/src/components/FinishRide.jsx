import React from 'react';
import { Link } from 'react-router-dom';

const FinishRide = ({ setFinishRidePanel }) => {
    return (
        <div className="p-6 bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto">
            {/* Close Button */}
            <div className="flex justify-center mb-4">
                <button onClick={() => setFinishRidePanel(false)}>
                    <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
                </button>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-center mb-4">Finish Ride</h3>

            {/* Rider Info */}
            <div className='flex items-center justify-between p-4 rounded-lg bg-gray-100 mb-4'>
                <div className='flex items-center gap-4'>
                    <img className='h-14 w-14 rounded-full object-cover' src="https://randomuser.me/api/portraits/men/45.jpg" alt="Rider" />
                    <h2 className='text-lg font-semibold'>Harsh Patel</h2>
                </div>
                <h5 className='text-lg font-bold'>2.2 Km</h5>
            </div>

            {/* Vehicle Image */}
            <div className="flex justify-center mb-4">
                <img className="h-28 w-auto object-cover rounded-lg" src="https://random.imagecdn.app/150/100" alt="Vehicle" />
            </div>

            {/* Ride Details */}
            <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 border-b">
                    <i className="ri-map-pin-fill text-xl text-blue-500"></i>
                    <div>
                        <h3 className="text-lg font-semibold">562/11-A</h3>
                        <p className="text-sm text-gray-600">Karkardooma, Delhi</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-4 border-b">
                    <i className="ri-map-pin-user-line text-xl text-red-500"></i>
                    <div>
                        <h3 className="text-lg font-semibold">842/22-B</h3>
                        <p className="text-sm text-gray-600">Connaught Place, Delhi</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-4">
                    <i className="ri-money-rupee-circle-fill text-xl text-green-500"></i>
                    <div>
                        <h3 className="text-lg font-semibold">$193</h3>
                        <p className="text-sm text-gray-600">Cash on Delivery</p>
                    </div>
                </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Add notes (optional)"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Action Buttons */}
            <div className="mt-6">
                <Link
                    to={'/captain-riding'}
                    className="w-full bg-green-600 flex justify-center text-white font-bold rounded-lg py-3 hover:bg-green-700 transition"
                >
                    Finish Ride
                </Link>
            </div>
        </div>
    );
};

export default FinishRide;
