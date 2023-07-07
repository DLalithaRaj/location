import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { HydratedDocument } from 'mongoose';

@Schema()
export class Location {
  @Prop({ required: true, unique: true })
  locationCode: number;

  @Prop({ required: true, minlength: 2, maxlength: 100 })
  addressline: string;

  @Prop({ trim: true })
  city: string;

  @Prop({ trim: true })
  region: string;

  @Prop({ trim: true })
  country: string;

  @Prop({ required: true })
  zipCode: number;

  @Prop({ trim: true })
  latitude: string;

  @Prop({ trim: true })
  longitude: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);