import React from 'react';
import { useRoutes } from 'react-router-dom';

import Login from './components/auth/login';
import Register from './components/auth/register';
import Header from './components/header';
import Home from './components/home';
import Study from './components/Study';
import EducationalResources from './components/EducationalResources';
import HurricanePage from './components/HurricanePage';  // Make sure this is correct
import { AuthProvider } from './contexts/authContext';

function App() {
  const routesArray = [
    {
      path: '*',
      element: <Login />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/study',
      element: <Study />,
    },
    {
      path: '/resources',
      element: <EducationalResources />,
    },
    {
      path: '/hurricane',
      element: <HurricanePage />,
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
  