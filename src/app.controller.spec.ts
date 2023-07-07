import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection, Model, connect } from 'mongoose';
import { Location } from './location/location.model';
import { getModelToken } from '@nestjs/mongoose';

describe('AppController', () => {
  let appController: AppController;
  let mongoConnection: Connection;
  let location: Model<Location>;
  
  beforeEach(async () => {
    mongoConnection = (await connect('mongodb://127.0.0.1:27017/location'))
      .connection;
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: getModelToken(Location.name), useValue: location },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterAll(async () => {
    await mongoConnection.close();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
