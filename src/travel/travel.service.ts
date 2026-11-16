import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TravelService {

  private trips = [
    { id: 1, name: 'To China', price: 9000 },
    { id: 2, name: 'To Morocco', price: 4000 },
  ];

  findAll() {
    return this.trips;
  }

  findOne(id: number) {
    const trip = this.trips.find(t => t.id === id);

    if (!trip) {
      throw new NotFoundException('Voyage not found');
    }

    return trip;
  }
}