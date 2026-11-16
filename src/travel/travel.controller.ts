import { Controller, Post } from '@nestjs/common';

@Controller('travel')
export class TravelController {
  @Post()
  create(): string {
    return 'planifier un noveaux voiyage ici';
  }
}