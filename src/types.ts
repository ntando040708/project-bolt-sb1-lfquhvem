export interface Location {
  province: string;
  city: string;
  address: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  minimumOrder: number;
  imageUrl: string;
  location: Location;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  restaurantId: string;
}

export interface RideRequest {
  pickup: Location;
  destination: Location;
  estimatedPrice: number;
  estimatedTime: string;
}

export type ServiceType = 'food' | 'ride';