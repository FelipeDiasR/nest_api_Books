import { Injectable } from '@nestjs/common';
import { RentedDTO } from './rented.dto';
import { PrismaService } from 'src/database/PrismaService';
import { BookDTO } from '../book/book.dto';
@Injectable()
export class RentedService {

    constructor(private prisma: PrismaService) {}  
        
    
    async rent (data: BookDTO): Promise<RentedDTO>  {

        const bookExists = await this.prisma.book.findFirst({
            where: {
                bar_code: data.bar_code
    
            },
    
           });
    
           if(!bookExists) {
            console.log('400 book dosent exist');
            throw new Error('book dosent exists');   
            
    
           }
           const rented = await this.prisma.RentedBook.create({ 
            data,
    
           });
    
           return rented;
        }



        }
            
        


    




