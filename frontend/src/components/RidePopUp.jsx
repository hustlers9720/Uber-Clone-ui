import React from 'react';

const RidePopUp = ({ setRidePopupPanel, setConfirmRidePopupPanel }) => {
    // console.log(setRidePopupPanel);

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
            {/* Close Button */}
            <div className="flex justify-center mb-2">
                <button onClick={() => setRidePopupPanel(false)}>
                    <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
                </button>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-center mb-3">New Ride Available</h3>

            {/* Rider Info */}
            <div className='flex items-center justify-between p-3 rounded-lg bg-gray-50 mb-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://randomuser.me/api/portraits/men/45.jpg" alt="Rider" />
                    <h2 className='text-lg font-medium'>Harsh Patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 Km</h5>
            </div>

            {/* Vehicle Image */}
            <div className="flex justify-center mb-4">
                <img className="h-24 w-auto object-cover" src="https://random.imagecdn.app/100/100" alt="Vehicle" />
            </div>

            {/* Ride Details */}
            <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border-b">
                    <i className="ri-map-pin-fill text-lg text-blue-500"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm text-gray-600">Karkardooma, Delhi</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 border-b">
                    <i className="ri-map-pin-user-line text-lg text-red-500"></i>
                    <div>
                        <h3 className="text-lg font-medium">842/22-B</h3>
                        <p className="text-sm text-gray-600">Connaught Place, Delhi</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3">
                    <i className="ri-money-rupee-circle-fill text-lg text-green-500"></i>
                    <div>
                        <h3 className="text-lg font-medium">$193</h3>
                        <p className="text-sm text-gray-600">Cash on Delivery</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 space-y-3">
                <button onClick={() => {
                    setConfirmRidePopupPanel(true)
                }} className="w-full bg-green-600 text-white font-semibold rounded-lg p-2 hover:bg-green-700 transition">Accept</button>
                <button
                    onClick={() => {
                        setRidePopupPanel(false)
                    }}
                    className="w-full bg-gray-200 text-gray-700 font-semibold rounded-lg p-2 hover:bg-gray-300 transition">Ignore</button>
            </div>
        </div>
    );
};

export default RidePopUp;
