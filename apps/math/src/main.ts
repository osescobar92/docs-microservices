import { NestFactory } from '@nestjs/core';
import { MathModule } from './math.module';

async function bootstrap() {
  const app = await NestFactory.create(MathModule);
  await app.listen(3000);
}
bootstrap();
