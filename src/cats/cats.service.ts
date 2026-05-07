import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dtos/create.cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(createCatDto: CreateCatDto) {
    // this.cats.push();
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
