import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './utility/http-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
        ? `${process.cwd()}/src/config/env/.env.${process.env.NODE_ENV}`
        : `${process.cwd()}/src/config/env/.env`,
      isGlobal: true, //To access config module globally
      load: [configuration], //To load the env variable configured file
      cache: true, //To increase the performance of ConfigService#get bcoz process.env can be slow
      expandVariables: true, //To enable the env variable expansion same as ES6 string interporal
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.DB_NAME}`,
    ),
    LocationModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [LocationModule],
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    AppService,
  ],
})
export class AppModule {}
