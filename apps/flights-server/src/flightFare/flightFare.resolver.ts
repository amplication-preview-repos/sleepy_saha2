import * as graphql from "@nestjs/graphql";
import { FlightFareResolverBase } from "./base/flightFare.resolver.base";
import { FlightFare } from "./base/FlightFare";
import { FlightFareService } from "./flightFare.service";

@graphql.Resolver(() => FlightFare)
export class FlightFareResolver extends FlightFareResolverBase {
  constructor(protected readonly service: FlightFareService) {
    super(service);
  }
}
