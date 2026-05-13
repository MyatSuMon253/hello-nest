import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dtos/create.cat.dto';
import { ConfigService } from '@nestjs/config';
import { ApiConfigService } from 'src/common/services/api-config.service';

interface DatabaseEnvironmentVariables {
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
}

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(private apiConfigService: ApiConfigService) {
    if (apiConfigService.isAuthEnabled) {
      // Authentication is enabled
    }
  }

  create(createCatDto: CreateCatDto) {}

  findAll({ page }: { page?: number }): Cat[] {
    let result = this.cats;

    if (page !== undefined) {
      result = result.slice((page - 1) * 10, page * 10);
  }
    return result;
  }

  findOne(id: number): Cat | undefined {
    return this.cats.find((cat) => cat?.id === id);
  }
}
