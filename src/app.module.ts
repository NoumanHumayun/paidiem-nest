import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [CountriesModule, AlbumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
