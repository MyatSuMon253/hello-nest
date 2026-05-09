import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/validations/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(new ValidationPipe())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err: any) => {
  console.error(err);
});
