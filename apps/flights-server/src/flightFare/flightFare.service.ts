import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlightFareServiceBase } from "./base/flightFare.service.base";

@Injectable()
export class FlightFareService extends FlightFareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
