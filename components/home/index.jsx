
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useAuth } from '../../contexts/authContext'

// const Home = () => {
//     const { currentUser } = useAuth()

//     return (
//         <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
//             <h1 className='text-4xl font-extrabold text-gray-800 mb-4'>
//                 This current page is Home
//             </h1>
//             <h2 className='text-2xl font-semibold text-gray-700 mb-8'>
//                 Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.
//             </h2>
//             <Link to="/study" className='text-blue-500 hover:underline'>
//                 Go to Study Page
//             </Link>

//         </div>
        
//     )
// }

// export default Home


import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const Home = () => {
    const { currentUser } = useAuth();

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
            <h1 className='text-4xl font-extrabold text-gray-800 mb-4'>
                This current page is Home
            </h1>
            <h2 className='text-2xl font-semibold text-gray-700 mb-8'>
                Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.
            </h2>
            <Link to="/study" className='text-blue-500 hover:underline'>
                Go to Study Page
            </Link>
            <Link to="/resources" className='text-blue-500 hover:underline mt-4'>
                Go to Educational Resources
            </Link>
        </div>
    );
}

export default Home;
