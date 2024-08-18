import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FlightFareWhereInput = {
  currency?: StringNullableFilter;
  destination?: StringNullableFilter;
  fare?: FloatNullableFilter;
  id?: StringFilter;
  origin?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
