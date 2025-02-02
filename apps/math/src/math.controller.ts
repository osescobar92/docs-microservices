import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MathController {

    @MessagePattern({ cmd: 'sum' })
    accumulate(data: number[]): number {
      return (data || []).reduce((a, b) => a + b);
    }
}
