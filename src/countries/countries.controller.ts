import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {

    constructor(private readonly countriesService: CountriesService) { }

    @Get()
    async getAll() {
        return this.countriesService.getAll();
    }

    @Get("/:code")
    async getByCode(@Param('code') code: string) {
        return this.countriesService.getByCode(code);
    }

}
