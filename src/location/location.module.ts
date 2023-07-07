import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationResolver } from './location.resolver';
import { Location, LocationSchema } from './location.model';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationRepository } from './location.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Location.name, schema: LocationSchema },
    ]),
  ],
  providers: [LocationRepository, LocationResolver, LocationService],
})
export class LocationModule {}
