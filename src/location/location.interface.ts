import { ObjectId } from 'mongoose';

export interface Ilocation {
  locationCode: number,
  addressline: string,
  city?: string,
  region?: string,
  country?: string,
  zipCode: number,
  latitude?: string,
  longitude?: string
}