import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RequestWhereInput = {
  id?: StringFilter;
  queryText?: StringNullableFilter;
  responseText?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
