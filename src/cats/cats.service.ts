import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dtos/create.cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(createCatDto: CreateCatDto) {
    // this.cats.push();
  }

  findAll({
    activeOnly,
    page,
  }: {
    activeOnly?: boolean;
    page?: number;
  }): Cat[] {
    let result = this.cats;
    // if (activeOnly) {
    //   result = result.filter((cat) => cat?.active);
    // }
    if (page !== undefined) {
      result = result.slice((page - 1) * 10, page * 10);
    }
    return result;
  }

  findOne(id: number): Cat | undefined {
    return this.cats.find((cat) => cat?.id === id);
  }
}
