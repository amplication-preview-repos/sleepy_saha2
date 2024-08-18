import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlightFareService } from "./flightFare.service";
import { FlightFareControllerBase } from "./base/flightFare.controller.base";

@swagger.ApiTags("flightFares")
@common.Controller("flightFares")
export class FlightFareController extends FlightFareControllerBase {
  constructor(protected readonly service: FlightFareService) {
    super(service);
  }
}
