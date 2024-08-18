import { SortOrder } from "../../util/SortOrder";

export type FlightFareOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  destination?: SortOrder;
  fare?: SortOrder;
  id?: SortOrder;
  origin?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
