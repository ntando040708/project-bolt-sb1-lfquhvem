import React from 'react';
import { Header } from './components/Header';
import { FoodDelivery } from './components/FoodDelivery';
import { RideBooking } from './components/RideBooking';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { ServiceType } from './types';

function App() {
  const [activeService, setActiveService] = React.useState<ServiceType>('food');
  const path = window.location.pathname;

  // Simple routing
  if (path === '/login') {
    return <Login />;
  }

  if (path === '/signup') {
    return <Signup />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeService={activeService} setActiveService={setActiveService} />
      <main>
        {activeService === 'food' ? <FoodDelivery /> : <RideBooking />}
      </main>
    </div>
  );
}

export default App;