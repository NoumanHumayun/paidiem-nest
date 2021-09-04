import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [CountriesModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
