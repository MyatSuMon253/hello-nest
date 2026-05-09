import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/validations/validation.pipe';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(new ValidationPipe())
  app.useGlobalInterceptors(new LoggingInterceptor())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err: any) => {
  console.error(err);
});
