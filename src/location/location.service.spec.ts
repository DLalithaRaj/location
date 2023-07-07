import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service';
import { LocationRepository } from './location.repository';
import { CreateLocationInput } from './dto/create-location.input';
import { locationInput, locationOutput } from './location.mock-data';

describe('LocationService', () => {
  let service: LocationService;
  let repository: LocationRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationService,
        {
          provide: LocationRepository,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<LocationService>(LocationService);
    repository = module.get<LocationRepository>(LocationRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new location record', async () => {
      jest.spyOn(repository, 'create').mockResolvedValueOnce(locationOutput);
      const result = await service.create(locationInput);
      expect(repository.create).toBeCalled();
      expect(repository.create).toBeCalledWith(locationInput);
      expect(result).toEqual(locationOutput);
    });
  });
});
