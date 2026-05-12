import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'src/common/config/database.config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
  ],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}
