import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RentedService } from './rented.service';
import { RentedDTO } from './rented.dto';

@Controller('rented')
export class RentedController {
  constructor(private readonly rentedService: RentedService) {}


  @Post()
  async rent(@Body() data: RentedDTO){
    return this.rentedService.rent(data);

  }



}

