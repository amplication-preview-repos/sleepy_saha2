export type FlightFare = {
  createdAt: Date;
  currency: string | null;
  destination: string | null;
  fare: number | null;
  id: string;
  origin: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
