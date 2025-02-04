import axios from 'axios';

const API_KEY = process.env.GOOGLE_MAPS_API // Ensure your API key is correct
const BASE_URL = 'https://maps.gomaps.pro/maps/api/geocode/json'; // Update if using another service

export const getAddressCoordinate = async (address) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                address: address,
                key: API_KEY
            }
        });

        if (response.data.status !== 'OK') {
            throw new Error(`Geocoding failed: ${response.data.status}`);
        }

        const { lat, lng } = response.data.results[0].geometry.location;
        return { lat, lng };
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw new Error('Unable to fetch coordinates');
    }
};
