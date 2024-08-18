/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FlightFareWhereInput } from "./FlightFareWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FlightFareListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FlightFareWhereInput,
  })
  @ValidateNested()
  @Type(() => FlightFareWhereInput)
  @IsOptional()
  @Field(() => FlightFareWhereInput, {
    nullable: true,
  })
  every?: FlightFareWhereInput;

  @ApiProperty({
    required: false,
    type: () => FlightFareWhereInput,
  })
  @ValidateNested()
  @Type(() => FlightFareWhereInput)
  @IsOptional()
  @Field(() => FlightFareWhereInput, {
    nullable: true,
  })
  some?: FlightFareWhereInput;

  @ApiProperty({
    required: false,
    type: () => FlightFareWhereInput,
  })
  @ValidateNested()
  @Type(() => FlightFareWhereInput)
  @IsOptional()
  @Field(() => FlightFareWhereInput, {
    nullable: true,
  })
  none?: FlightFareWhereInput;
}
export { FlightFareListRelationFilter as FlightFareListRelationFilter };
