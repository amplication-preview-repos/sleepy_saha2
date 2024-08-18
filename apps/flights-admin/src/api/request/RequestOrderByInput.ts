import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  queryText?: SortOrder;
  responseText?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
