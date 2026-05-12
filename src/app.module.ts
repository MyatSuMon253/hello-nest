import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './common/validations/validation.pipe';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config/configuration';

@Module({
  imports: [
    CatsModule,
    // ConfigModule.forRoot({
    //   load: [configuration],
    // }),
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
