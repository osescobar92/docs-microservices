import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
        { name: 'MATH_SERVICE', transport: Transport.TCP }
    ])
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
