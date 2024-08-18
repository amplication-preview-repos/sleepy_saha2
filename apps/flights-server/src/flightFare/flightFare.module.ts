import { Module } from "@nestjs/common";
import { FlightFareModuleBase } from "./base/flightFare.module.base";
import { FlightFareService } from "./flightFare.service";
import { FlightFareController } from "./flightFare.controller";
import { FlightFareResolver } from "./flightFare.resolver";

@Module({
  imports: [FlightFareModuleBase],
  controllers: [FlightFareController],
  providers: [FlightFareService, FlightFareResolver],
  exports: [FlightFareService],
})
export class FlightFareModule {}
