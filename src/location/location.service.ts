import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { LocationRepository } from './location.repository';
import { Ilocation } from './location.interface';

@Injectable()
export class LocationService {
  constructor(private readonly locationrepository: LocationRepository) {}

  async create(createLocationInput: CreateLocationInput): Promise<Ilocation> {
    return await this.locationrepository.create(createLocationInput);
  }

  getLocationById(id: number) {
    return this.locationrepository.getLocationById(id);
  }

  updateLocation(id: number, updateLocationInput: UpdateLocationInput) {
    return this.locationrepository.updateLocation(id, updateLocationInput);
  }

  deleteLocation(id: number) {
    const isDeleted = this.locationrepository.deleteLocation(id);
    isDeleted
      ? `Location belongs to ${id} deleted`
      : `Unable to delete the Location belongs to ${id}`;
  }
}
