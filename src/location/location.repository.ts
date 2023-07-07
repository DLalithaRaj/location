import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Location } from './location.model';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { Ilocation } from './location.interface';

export class LocationRepository {
  constructor(
    @InjectModel(Location.name) private readonly locationModel: Model<Location>,
  ) {}

  async create(createLocation: CreateLocationInput): Promise<Ilocation> {
    const location = new this.locationModel(createLocation);
    try {
      return await location.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getLocationById(id: number) {
    try {
      const location = await this.locationModel.findById(id).exec();
      if (!location) {
        throw new NotFoundException(
          `Location for this Code-${id} does not exist`,
        );
      }
      return location;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
}

  async updateLocation(id: number, updateLocationInput: UpdateLocationInput) {
    let product = {};
    try {
      product = await this.locationModel
        .findOneAndUpdate({ id }, updateLocationInput, {
          new: true,
        })
        .exec();
      if (!product) {
        throw new ConflictException('Error trying to update product');
      }
      return product;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  
  async deleteLocation(id: number): Promise<boolean> {
    const product = await this.locationModel.findByIdAndDelete(id).exec();
    if (!product) {
      throw new NotFoundException(`Product not found for id - ${id}`);
    }
    return true;
  }

}