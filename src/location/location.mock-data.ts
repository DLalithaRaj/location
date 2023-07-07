import { CreateLocationInput } from "./dto/create-location.input";
import { Location } from "./entities/location.entity";

export const locationInput: CreateLocationInput = {
  locationCode: 105,
  addressline: '5/10',
  city: 'chennai',
  region: 'South',
  country: 'India',
  zipCode: 600018,
  latitude: null,
  longitude: null
}

export const locationOutput: Location = {
  _id: 'dfdfjsdnfkfnsdfkjwnefwe',
  locationCode: 105,
  addressline: '5/10',
  city: 'chennai',
  region: 'South',
  country: 'India',
  zipCode: 600018,
  latitude: null,
  longitude: null
}