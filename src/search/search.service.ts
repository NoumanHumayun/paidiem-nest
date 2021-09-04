import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { HttpException, Injectable } from '@nestjs/common';
import { map, catchError } from 'rxjs';

@Injectable()
export class SearchService {
    private readonly DATA_URL: string = "https://itunes.apple.com/lookup?entity=album";
    constructor(private http: HttpService) { }


    searchResults(artistId: number, country: string) {
        let url = this.DATA_URL;
        if (artistId)
            url = url + `&id=${artistId}`;
        if (country && country.length < 3 && country.length > 1)
            url = url + `&country=${country}`;

        return this.http.get(url).pipe(
            catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }),
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            })
        );
    }

}
