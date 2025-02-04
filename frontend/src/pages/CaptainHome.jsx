import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CaptainDetailed from '../components/CaptainDetailed';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopup from '../components/ConfirmRidePopup';
const CaptainHome = () => {

    const [ridePopupPanel, setRidePopupPanel] = useState(true)
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
    const ridePopupPanelRef = useRef(null);
    const confirmRidePopupPanelRef = useRef(null);

    useGSAP(function () {
        if (ridePopupPanel) {

            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ridePopupPanel])

    useGSAP(function () {
        if (confirmRidePopupPanel) {

            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePopupPanel])
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
                <img className='h-full w-full object-cover' src='https://i.pcmag.com/imagery/reviews/02iUDVylwhApoHnkMkwhMBm-2..v1569469943.jpg' alt='Map Placeholder' />
            </div>

            {/* Info Section */}
            <div className='h-1/2 p-4 flex flex-col justify-between bg-white shadow-lg rounded-t-2xl'>
                <CaptainDetailed />
            </div>

            <div ref={ridePopupPanelRef} className='fixed bottom-0 w-full z-10 -translate-y-full bg-white  pt-8'>
                <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
            </div>

            <div ref={confirmRidePopupPanelRef} className='fixed h-screen bottom-0 w-full z-10 -translate-y-full bg-white  pt-8'>
                <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
            </div>
        </div>
    );
};

export default CaptainHome;
