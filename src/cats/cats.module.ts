import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ConfigService } from '@nestjs/config';
import { ApiConfigService } from 'src/common/services/api-config.service';

@Global()
@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService, ApiConfigService, ConfigService],
  exports: [CatsService],
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}
