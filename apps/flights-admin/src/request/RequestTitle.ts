import { Request as TRequest } from "../api/request/Request";

export const REQUEST_TITLE_FIELD = "queryText";

export const RequestTitle = (record: TRequest): string => {
  return record.queryText?.toString() || String(record.id);
};
