import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserInfoService {
//1,183
    private ApiURL = 'https://rickandmortyapi.com/api/character/540';
    constructor(private http: HttpClient) {}

    public getData(): Observable<any[]> {
        return this.http.get<any>(this.ApiURL).pipe(
            map(data => [data])
        );
}
}
export interface ApiResponse {
    name: string;
}