import React from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { UserRole } from '../../types/auth';

export function Signup() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    role: 'customer' as UserRole,
    vehicleDetails: {
      make: '',
      model: '',
      year: '',
      licensePlate: ''
    }
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, name, phoneNumber, role, vehicleDetails } = formData;

    if (!email || !password || !name || !phoneNumber) {
      setError('Please fill in all required fields');
      return;
    }

    if (role === 'driver' && 
        (!vehicleDetails.make || !vehicleDetails.model || 
         !vehicleDetails.year || !vehicleDetails.licensePlate)) {
      setError('Please fill in all vehicle details');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Signup successful!');
      // Here you would typically:
      // 1. Send registration data to your backend
      // 2. Receive and store authentication token
      // 3. Redirect to dashboard
    } catch (err) {
      setError('Failed to sign up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, role: 'customer' }))}
                className={`px-4 py-2 rounded-md ${
                  formData.role === 'customer' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Customer
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, role: 'driver' }))}
                className={`px-4 py-2 rounded-md ${
                  formData.role === 'driver' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Driver
              </button>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="phone"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {formData.role === 'driver' && (
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Vehicle Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700">
                      Make
                    </label>
                    <input
                      id="make"
                      type="text"
                      value={formData.vehicleDetails.make}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        vehicleDetails: { ...prev.vehicleDetails, make: e.target.value }
                      }))}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                      Model
                    </label>
                    <input
                      id="model"
                      type="text"
                      value={formData.vehicleDetails.model}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        vehicleDetails: { ...prev.vehicleDetails, model: e.target.value }
                      }))}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                      Year
                    </label>
                    <input
                      id="year"
                      type="text"
                      value={formData.vehicleDetails.year}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        vehicleDetails: { ...prev.vehicleDetails, year: e.target.value }
                      }))}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="license" className="block text-sm font-medium text-gray-700">
                      License Plate
                    </label>
                    <input
                      id="license"
                      type="text"
                      value={formData.vehicleDetails.licensePlate}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        vehicleDetails: { ...prev.vehicleDetails, licensePlate: e.target.value }
                      }))}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/login"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 