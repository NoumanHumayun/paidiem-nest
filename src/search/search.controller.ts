import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {

    constructor(private readonly searchService: SearchService) { }

    @Get()
    async getByCode(
        @Query('artistId') artistId: number,
        @Query('country') country: string,) {
        return this.searchService.searchResults(artistId, country);
    }

}
