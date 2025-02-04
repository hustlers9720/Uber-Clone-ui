import React, { createContext, useState } from 'react';

export const CaptainContext = createContext();

const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    return (
        <CaptainContext.Provider value={{ captain, updateCaptain, isLoading, setIsLoading }}>
            {children}
        </CaptainContext.Provider>
    );
};

export default CaptainProvider;
