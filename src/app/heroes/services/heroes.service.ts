import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environment/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
    constructor(private http: HttpClient) { }
    private baseURL : string = environments.baseURL;
    getHeroes () : Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseURL}/heroes`);
    }

    getHeroById(id : string): Observable<Hero | undefined>{
        return this.http.get<Hero>(`${this.baseURL}/heroes/${id}`)
        .pipe(
            catchError(error => of(undefined))
        );
    }

    getSegustion(query : string): Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseURL}/heroes?q=${query}&_limit=5`);
    }
    
}