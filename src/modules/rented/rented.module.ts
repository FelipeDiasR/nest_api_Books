import { Module } from '@nestjs/common';
import { RentedService } from './rented.service';
import { RentedController } from './rented.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [RentedController],
  providers: [RentedService, PrismaService],
})
export class RentedModule {}
