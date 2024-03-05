import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserInfoService {
    private http = inject(HttpClient); 
    private ApiURL = 'https://rickandmortyapi.com/api/character/540,3,4,5,6,8,9,11,12,13,14,15,16,17,18,20,21,22,23,24';
    //private ApiURL2 = 'https://rickandmortyapi.com/api/character/2';
    constructor() {}

    public getData(): Observable<any[]> {
        const req1 = this.http.get<any>(this.ApiURL);
        //const req2 = this.http.get<any>(this.ApiURL2);
        return forkJoin([req1]).pipe(
            map(([rest1])=> {
                return [...rest1];
            })
        )
    }
}
export interface ApiResponse {
    name: string;
}