import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod/v3';

export class ZodVAlidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const parsedValue: any = this.schema.parse(value);
      return parsedValue;
    } catch (e: error) {
      console.log(e);
      throw new BadRequestException('Validation Failed');
    }
  }
}
