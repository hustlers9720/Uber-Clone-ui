import React from 'react';

const LocationSearchPanel = (props) => {
    const locations = [
        "24B, Near Kapoor Cafe School",
        "22B, Near Kapoor Cafe School",
        "44B, Near Kapoor Cafe School"
    ];

    return (
        <div className="px-2">
            {locations.map((elem, index) => (
                <div
                    key={index}
                    onClick={() => {
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }}
                    className="flex border-2 p-3 rounded-xl my-2 border-gray-50 active:border-black items-center justify-start w-[95%] mx-auto cursor-pointer"
                >
                    <h2 className="bg-[#eee] mt-3 py-3 px-2 h-8 w-8 flex items-center justify-center rounded-full">
                        <i className="ri-map-pin-fill text-lg"></i>
                    </h2>
                    <h4 className="ml-2">{elem}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchPanel;
