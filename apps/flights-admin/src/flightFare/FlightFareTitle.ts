import { FlightFare as TFlightFare } from "../api/flightFare/FlightFare";

export const FLIGHTFARE_TITLE_FIELD = "currency";

export const FlightFareTitle = (record: TFlightFare): string => {
  return record.currency?.toString() || String(record.id);
};
