export type UserRole = 'customer' | 'driver';

export interface AuthFormData {
  email: string;
  password: string;
  role: UserRole;
  name?: string; // Only for signup
  phoneNumber?: string; // Only for signup
  vehicleDetails?: {  // Only for driver signup
    make: string;
    model: string;
    year: string;
    licensePlate: string;
  };
} 