import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const { captain, updateCaptain } = useContext(CaptainContext);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        if (!token) {
            navigate('/captain-login')
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 200) {
            updateCaptain(response.data.captain)
            setIsLoading(false);
        }
    }).catch(err => {
        console.log(err);
        localStorage.removeItem('token')
        navigate('/captain-login')

    })

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <>
            {children}

        </>
    )
}

export default CaptainProtectedWrapper
