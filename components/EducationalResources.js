import React from 'react';
import useGeolocation from '../hooks/useGeolocation';
import { Link } from 'react-router-dom'; // Add this line

const EducationalResources = () => {
    const { location, error } = useGeolocation();

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
            <h1 className='text-4xl font-extrabold text-gray-800 mb-6'>
                Educational Resources
            </h1>
            {error ? (
                <p className='text-red-600'>{error}</p>
            ) : (
                <p className='text-xl text-gray-700'>
                    {location.lat && location.lng
                        ? `Your current location: Latitude ${location.lat}, Longitude ${location.lng}`
                        : 'Fetching your location...'}
                </p>
            )}
            <section className='mb-8 w-full max-w-4xl'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                    Disaster Preparedness Guides
                </h2>
                <ul className='list-disc list-inside'>
                    
                <li className='mb-2'>
                        <Link to="/hurricane" className='text-blue-600 hover:underline'>
                            Step-by-Step Guide to Hurricane Preparedness
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <a href="#" className='text-blue-600 hover:underline'>
                            Earthquake Safety Checklist
                        </a>
                    </li>
                    <li className='mb-2'>
                        <a href="#" className='text-blue-600 hover:underline'>
                            Flood Preparedness Infographic
                        </a>
                    </li>
                </ul>
            </section>
            <section className='mb-8 w-full max-w-4xl'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                    Interactive Tutorials
                </h2>
                <div className='space-y-4'>
                    <p className='text-xl text-gray-700'>
                        Learn how to respond to different disaster scenarios with our interactive simulations:
                    </p>
                    <a href="#" className='text-blue-600 hover:underline'>
                        Earthquake Response Simulation
                    </a>
                    <a href="#" className='text-blue-600 hover:underline'>
                        Hurricane Evacuation Drill
                    </a>
                </div>
            </section>
            <section className='w-full max-w-4xl'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                    Video Content
                </h2>
                <div className='space-y-4'>
                    <div className='aspect-w-16 aspect-h-9'>
                        <iframe
                            className='w-full h-full'
                            src="https://www.youtube.com/embed/example-video"
                            title="Disaster Preparedness"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className='text-xl text-gray-700'>
                        Watch videos from experts on how to stay safe during natural disasters.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default EducationalResources;
