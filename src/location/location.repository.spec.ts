import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { LocationRepository } from './location.repository';
import { LocationSchema,Location } from './location.model';

describe('ProductRepository', () => {
  let locationRepository: LocationRepository;
  let locationModel: Model<Location>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationRepository,
        {
          provide: getModelToken('Location'),
          useClass: Location,
        },
      ],
    }).compile();

    repository = module.get<LocationRepository>(LocationRepository);
    
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