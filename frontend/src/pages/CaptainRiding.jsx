import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);
    
    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [finishRidePanel]);

    return (
        <div className='h-screen flex flex-col'>
            {/* Header */}
            <div className='fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white shadow-md z-10'>
                <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber Logo' />
                <Link to='/home2' className='flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 shadow-lg hover:scale-110 hover:shadow-xl transition'>
                    <i className='ri-logout-box-r-line text-xl'></i>
                </Link>
            </div>

            {/* Map Section */}
            <div className='h-1/2 mt-16'>
                <img className='h-60 w-full object-cover' src='https://i.pcmag.com/imagery/reviews/02iUDVylwhApoHnkMkwhMBm-2..v1569469943.jpg' alt='Map Placeholder' />
            </div>

            {/* Ride Info */}
            <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 w-11/12 mx-auto mt-4' onClick={() => setFinishRidePanel(true)}>
                <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
                <h4 className='text-xl font-semibold'>4 Km away</h4>
                <button className="bg-green-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-green-700 transition">
                    Complete Ride
                </button>
            </div>

            {/* Finish Ride Panel */}
            <div ref={finishRidePanelRef} className='fixed bottom-0 w-full z-10 transform translate-y-full bg-white shadow-lg pt-8'>
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>
        </div>
    );
};

export default CaptainRiding;
