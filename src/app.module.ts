import { Module } from '@nestjs/common';
import { TravelModule } from './travel/travel.module.js';

@Module({
  imports: [TravelModule],
})
export class AppModule {}