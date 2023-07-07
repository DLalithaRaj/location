import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field(() => String, {
    nullable: false,
    description: 'location id',
  })
  _id: string;

  @Field(() => Int, { description: 'Unique Location Code', nullable: false })
  locationCode: number;

  @Field(() => String, {
    description: 'Address line1',
    nullable: false,
  })
  addressline: string;

  @Field(() => String, { description: 'Name of city', nullable: true })
  city: string;

  @Field(() => String, { description: 'Region of the city', nullable: true })
  region: string;

  @Field(() => String, { description: 'Country name', nullable: true })
  country: string;

  @Field(() => Int, { description: 'Country Zipcode ', nullable: false })
  zipCode: number;

  @Field(() => String, {
    description: 'latitude Value of location ',
    nullable: true,
  })
  latitude: string;

  @Field(() => String, {
    description: 'longitude value of location',
    nullable: true,
  })
  longitude: string;
}
