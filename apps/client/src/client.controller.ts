import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client.service';
import { Observable } from 'rxjs';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getHello(): Observable<number> {
    return this.clientService.accumulate();
  }
}
