import { NestFactory } from '@nestjs/core';
import { MathModule } from './math.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MathModule, { transport: Transport.TCP });
  await app.listen();
}
bootstrap();
