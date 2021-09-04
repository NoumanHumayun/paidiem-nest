import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { map, Observable, catchError } from 'rxjs';

@Injectable()
export class CountriesService {
    private readonly DATA_URL: string = "https://restcountries.eu/rest/v2";
    constructor(private http: HttpService) { }

    getAll(): Observable<Array<Object>> {
        return this.http.get(`${this.DATA_URL}/all`).pipe(
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            })
        );
    }

    getByCode(code: string): Observable<Array<Object>> {

        if (!code || code == "null" || code.length > 3 || code.length < 2)
            throw new HttpException(
                'Invalid country code',
                HttpStatus.BAD_REQUEST
            );

        return this.http.get(`${this.DATA_URL}/alpha/${code}`).pipe(
            catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }),
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            })
        );
    }
}
