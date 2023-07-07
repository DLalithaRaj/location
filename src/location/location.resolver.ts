import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { HttpExceptionFilter } from '../utility/http-exception.filter';
import { UseFilters } from '@nestjs/common';
import { Ilocation } from './location.interface';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation(() => Location)
  createLocation(
    @Args('createLocationInput') createLocationInput: CreateLocationInput,
  ): Promise<Ilocation> {
    return this.locationService.create(createLocationInput);
  }

  @Query(() => Location, { name: 'location' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.locationService.getLocationById(id);
  }

  @Mutation(() => Location)
  updateLocation(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateLocationInput') updateLocationInput: UpdateLocationInput,
  ) {
    return this.locationService.updateLocation(id, updateLocationInput);
  }

  @Mutation(() => Location)
  deleteLocation(@Args('id', { type: () => Int }) id: number) {
    return this.locationService.deleteLocation(id);
  }
}
