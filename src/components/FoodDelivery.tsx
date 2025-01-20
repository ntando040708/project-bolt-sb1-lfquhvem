import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Restaurant } from '../types';

const popularRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Nando\'s',
    cuisine: 'Portuguese',
    rating: 4.5,
    deliveryTime: '30-45 min',
    minimumOrder: 50,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    location: {
      province: 'Gauteng',
      city: 'Johannesburg',
      address: 'Sandton City'
    }
  },
  {
    id: '2',
    name: 'Ocean Basket',
    cuisine: 'Seafood',
    rating: 4.3,
    deliveryTime: '40-55 min',
    minimumOrder: 100,
    imageUrl: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f',
    location: {
      province: 'Western Cape',
      city: 'Cape Town',
      address: 'V&A Waterfront'
    }
  },
  {
    id: '3',
    name: 'Steers',
    cuisine: 'Burgers',
    rating: 4.2,
    deliveryTime: '25-35 min',
    minimumOrder: 75,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    location: {
      province: 'KwaZulu-Natal',
      city: 'Durban',
      address: 'Gateway Mall'
    }
  }
];

function RestaurantSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
}

export function FoodDelivery() {
  const [address, setAddress] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);
  const [isLoadingRestaurants, setIsLoadingRestaurants] = React.useState(false);
  const [restaurants, setRestaurants] = React.useState(popularRestaurants);

  const handleSearch = async () => {
    if (!address.trim()) {
      alert('Please enter a delivery address');
      return;
    }

    setIsSearching(true);
    setIsLoadingRestaurants(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, we would fetch restaurants based on the address
      setRestaurants(popularRestaurants);
    } finally {
      setIsSearching(false);
      setIsLoadingRestaurants(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hungry? We've got you covered
          </h2>
          <p className="text-xl text-gray-500">
            Order from the best restaurants in your area
          </p>
        </div>
        <div className="mt-6 flex gap-4">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your delivery address"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button 
            onClick={handleSearch}
            disabled={isSearching}
            className={`px-6 py-3 bg-indigo-600 text-white rounded-lg transition-colors ${
              isSearching ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
            } flex items-center`}
          >
            <Search className="mr-2 h-5 w-5" />
            {isSearching ? 'Searching...' : 'Find Food'}
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Popular Restaurants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoadingRestaurants ? (
            <>
              <RestaurantSkeleton />
              <RestaurantSkeleton />
              <RestaurantSkeleton />
            </>
          ) : (
            restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={restaurant.imageUrl}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-900">{restaurant.name}</h4>
                  <p className="text-gray-500">{restaurant.cuisine}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600">{restaurant.rating}</span>
                    </div>
                    <span className="text-gray-500">{restaurant.deliveryTime}</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      Minimum order: R{restaurant.minimumOrder}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}