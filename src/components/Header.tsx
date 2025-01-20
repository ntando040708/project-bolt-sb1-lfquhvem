import React from 'react';
import { Menu, X, ShoppingBag, Car } from 'lucide-react';
import { ServiceType } from '../types';

interface HeaderProps {
  activeService: ServiceType;
  setActiveService: (service: ServiceType) => void;
}

export function Header({ activeService, setActiveService }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <span className="text-2xl font-bold">QuickServe SA</span>
            <div className="hidden ml-10 space-x-8 lg:block">
              <button
                onClick={() => setActiveService('food')}
                className={`inline-flex items-center px-4 py-2 rounded-md ${
                  activeService === 'food' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Food Delivery
              </button>
              <button
                onClick={() => setActiveService('ride')}
                className={`inline-flex items-center px-4 py-2 rounded-md ${
                  activeService === 'ride' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <Car className="mr-2 h-5 w-5" />
                Book Ride
              </button>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <button className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium hover:bg-opacity-75">
              Sign in
            </button>
            <button className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
              Sign up
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setActiveService('food');
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left flex items-center px-3 py-2 rounded-md ${
                  activeService === 'food' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Food Delivery
              </button>
              <button
                onClick={() => {
                  setActiveService('ride');
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left flex items-center px-3 py-2 rounded-md ${
                  activeService === 'ride' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <Car className="mr-2 h-5 w-5" />
                Book Ride
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}