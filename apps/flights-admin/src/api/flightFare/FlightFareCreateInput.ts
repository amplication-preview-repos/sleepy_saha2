export type FlightFareCreateInput = {
  currency?: string | null;
  destination?: string | null;
  fare?: number | null;
  origin?: string | null;
  timestamp?: Date | null;
};
