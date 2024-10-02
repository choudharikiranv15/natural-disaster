// import { useState, useEffect } from 'react';

// const useGeolocation = () => {
//     const [location, setLocation] = useState({ lat: null, lng: null });
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (!navigator.geolocation) {
//             setError('Geolocation is not supported by your browser');
//             return;
//         }

//         const success = (position) => {
//             setLocation({
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//             });
//         };

//         const error = () => {
//             setError('Unable to retrieve your location');
//         };

//         navigator.geolocation.getCurrentPosition(success, error);
//     }, []);

//     return { location, error };
// };

// export default useGeolocation;

import { useState, useEffect } from 'react';

const useGeolocation = () => {
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        const success = (position) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        };

        const handleError = (error) => {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    setError('User denied the request for Geolocation.');
                    break;
                case error.POSITION_UNAVAILABLE:
                    setError('Location information is unavailable.');
                    break;
                case error.TIMEOUT:
                    setError('The request to get user location timed out.');
                    break;
                case error.UNKNOWN_ERROR:
                    setError('An unknown error occurred.');
                    break;
                default:
                    setError('An error occurred while retrieving your location.');
                    break;
            }
        };

        navigator.geolocation.getCurrentPosition(success, handleError);
    }, []);

    return { location, error };
};

export default useGeolocation;

