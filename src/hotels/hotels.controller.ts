import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller('hotels')
export class HotelsController {
    constructor(private readonly hotelsService: HotelsService) {}

    @Post()
    create(@Body() createHotelDto: CreateHotelDto) {
        return this.hotelsService.create(createHotelDto) ;
    }

    @Get()
    findAll() {
        return this.hotelsService.findAll() ;
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) { 
        return this.hotelsService.findOne(id) ;
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateHotelDto: UpdateHotelDto) {
        return this.hotelsService.update(id, updateHotelDto) ;
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.hotelsService.remove(id) ;
    }
}
