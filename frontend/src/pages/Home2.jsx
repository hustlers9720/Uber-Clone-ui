import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const HomeIntersection = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const panelRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const confirmRidePanelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehicleFoundRef = useRef(null);
    const waitingForDrivingRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, { height: '70%' });
            gsap.to(panelCloseRef.current, { opacity: 1 });
        } else {
            gsap.to(panelRef.current, { height: '0%' });
            gsap.to(panelCloseRef.current, { opacity: 0 });
        }
    }, [panelOpen]);

    useGSAP(function () {
        if (vehiclePanel) {

            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanel])


    useGSAP(function () {
        if (confirmRidePanel) {

            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePanel])

    useGSAP(function () {
        if (vehicleFound) {

            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound])


    useGSAP(function () {
        if (waitingForDriver) {

            gsap.to(waitingForDrivingRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDrivingRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [waitingForDriver])
    return (
        <div className='relative h-screen overflow-hidden'>
            <img
                className='w-16 absolute left-5 top-5'
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="Uber Logo"
            />
            <div className='h-screen w-screen'>
                {/* Placeholder for live tracking or map */}
                <img
                    className='h-full w-full object-cover'
                    src="https://i.pcmag.com/imagery/reviews/02iUDVylwhApoHnkMkwhMBm-2..v1569469943.jpg"
                    alt="Map Placeholder"
                />
            </div>
            <div className='flex flex-col justify-end absolute h-screen top-0 w-full'>
                <div className='h-[30%] p-6 bg-white relative'>
                    <h5
                        ref={panelCloseRef}
                        onClick={() => setPanelOpen(false)}
                        className='absolute opacity-0 right-6 top-6 text-2xl'
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold mt-5'>Find a Trip</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            onClick={() => setPanelOpen(true)}
                            onChange={(e) => setPickup(e.target.value)}
                            value={pickup}
                            className='bg-[#eee] px-12 w-full mt-5 py-2 text-lg rounded-lg'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            onClick={() => setPanelOpen(true)}
                            onChange={(e) => setDestination(e.target.value)}
                            value={destination}
                            className='bg-[#eee] px-12 py-2 w-full mt-3 text-lg rounded-lg'
                            type="text"
                            placeholder='Enter your destination'
                        />
                    </form>
                </div>
                <div ref={panelRef} className='bg-white h-0'>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
                </div>
            </div>

            <div ref={vehiclePanelRef} className='fixed bottom-0 w-full z-10 bg-white translate-y-full pt-8'>
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>

            <div ref={confirmRidePanelRef} className='fixed bottom-0 w-full z-10 bg-white translate-y-full pt-8'>
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>

            <div ref={vehicleFoundRef} className='fixed bottom-0 w-full z-10 bg-white translate-y-full pt-8'>
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>

            <div ref={waitingForDrivingRef} className='fixed bottom-0 w-full z-10 bg-white pt-8'>
                <WaitingForDriver  setWaitingForDriver={waitingForDriver}/>
            </div>
        </div>
    );
};
export default HomeIntersection;



