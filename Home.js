import React from 'react';
import { useAuth } from './contexts/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1 >Welcome, {user ? user.name : 'Guest'}!</h1>
    </div>
  );
}

export default Home;
