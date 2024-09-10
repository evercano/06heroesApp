import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})

export class PublicGuard implements CanMatch, CanActivate {

    constructor(
        private authService : AuthService,
        private router : Router,
    ) { }

    private authPublicGuard(): Observable<boolean> | boolean {
        return this.authService.checkAuthentication()
        .pipe(
            tap(isAuthenticated => {
                if (isAuthenticated){
                    this.router.navigate(['./']);
                }
            } ),
            map(isAuthenticated => !isAuthenticated)
        );
    } 

    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
       return this.authPublicGuard();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
       return this.authPublicGuard();
    }

    
}