import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import type { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create.cat.dto';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
import { PostPipesDecorator } from 'src/common/decorators/post-pipes.decorator';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
@PostPipesDecorator()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles(['admin'])
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe)
    activeOnly: boolean,
    @Query('page', new DefaultValuePipe(10), ParseIntPipe)
    page: number,
  ): Promise<Cat[]> {
    return this.catsService.findAll({ page });
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {
    return this.catsService.findOne(id);
  }
}
