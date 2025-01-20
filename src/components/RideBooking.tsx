import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';
import { Location } from '../types';

const provinces = [
  'Eastern Cape',
  'Free State',
  'Gauteng',
  'KwaZulu-Natal',
  'Limpopo',
  'Mpumalanga',
  'North West',
  'Northern Cape',
  'Western Cape'
];

export function RideBooking() {
  const [pickup, setPickup] = React.useState<Location>({
    province: '',
    city: '',
    address: ''
  });
  const [destination, setDestination] = React.useState<Location>({
    province: '',
    city: '',
    address: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleBookRide = async () => {
    if (!pickup.province || !pickup.city || !pickup.address ||
        !destination.province || !destination.city || !destination.address) {
      setError('Please fill in all location fields');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Ride booked successfully!');
    } catch (err) {
      setError('Failed to book ride. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Book a Ride
        </h2>
        <p className="text-xl text-gray-500 mb-8">
          Safe and reliable rides across South Africa
        </p>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                <select
                  value={pickup.province}
                  onChange={(e) => setPickup({ ...pickup, province: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Province</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                placeholder="Enter city"
                value={pickup.city}
                onChange={(e) => setPickup({ ...pickup, city: e.target.value })}
                className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Enter pickup address"
                value={pickup.address}
                onChange={(e) => setPickup({ ...pickup, address: e.target.value })}
                className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                <select
                  value={destination.province}
                  onChange={(e) => setDestination({ ...destination, province: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Province</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                placeholder="Enter city"
                value={destination.city}
                onChange={(e) => setDestination({ ...destination, city: e.target.value })}
                className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Enter destination address"
                value={destination.address}
                onChange={(e) => setDestination({ ...destination, address: e.target.value })}
                className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Estimated Time</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">25-30 min</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Car className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Estimated Price</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">R150-200</span>
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm mt-2">{error}</div>
            )}

            <button 
              onClick={handleBookRide}
              disabled={isLoading}
              className={`w-full bg-indigo-600 text-white py-3 px-4 rounded-lg transition-colors ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
              }`}
            >
              {isLoading ? 'Booking...' : 'Book Ride'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}