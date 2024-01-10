import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { RentedModule } from './modules/rented/rented.module';



@Module({
  imports: [BookModule, RentedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
