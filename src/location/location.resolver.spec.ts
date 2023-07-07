import { Test, TestingModule } from '@nestjs/testing';
import { LocationResolver } from './location.resolver';
import { LocationService } from './location.service';
import { locationInput, locationOutput } from './location.mock-data';

describe('LocationResolver', () => {
  let resolver: LocationResolver;
  let service: LocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationResolver,
        {
          provide: LocationService,
          useValue: {
            create: jest.fn(),
            getLocationById: jest.fn(),
            updateLocation: jest.fn(),
            deleteLocation: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<LocationResolver>(LocationResolver);
    service = module.get<LocationService>(LocationService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createLocation', () => {
    it('should create a new Location', async () => {
      jest.spyOn(service, 'create').mockResolvedValue(locationOutput);

      const result = await resolver.createLocation(locationInput);
      expect(service.create).toBeCalled();
      expect(service.create).toHaveBeenCalledWith(locationInput);
      expect(result).toEqual(locationOutput);
    });
  });
});
