import {
  applyDecorators,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { RolesGuard } from '../guards/roles.guard';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { ValidationPipe } from '../validations/validation.pipe';

export function PostPipesDecorator() {
  return applyDecorators(
    UseGuards(RolesGuard),
    UseInterceptors(LoggingInterceptor),
    UsePipes(ValidationPipe),
  );
}
