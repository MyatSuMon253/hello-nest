import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from 'src/common/validations/env.validation';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
    }),
  ],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}
