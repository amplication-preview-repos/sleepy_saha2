import { FlightFareWhereInput } from "./FlightFareWhereInput";
import { FlightFareOrderByInput } from "./FlightFareOrderByInput";

export type FlightFareFindManyArgs = {
  where?: FlightFareWhereInput;
  orderBy?: Array<FlightFareOrderByInput>;
  skip?: number;
  take?: number;
};
