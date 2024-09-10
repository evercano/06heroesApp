import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, UrlSegment, RouterStateSnapshot, Router } from '@angular/router';
import { Observable , tap} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})


export class AuthGuard implements CanMatch, CanActivate {

    constructor(
        private authService : AuthService,
        private router : Router
    ) { }

    private AuthCheckStatus() : Observable<boolean> | boolean {
        return this.authService.checkAuthentication()
        .pipe(
            tap(isAuthtenticated => {
                if(!isAuthtenticated){
                    this.router.navigate(['./auth/login']);
                }
            })
        );
    }

    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
        // console.log('Can Match');
        // console.log({route, UrlSegment});
        // return false;
        return this.AuthCheckStatus();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {
        // console.log('Can Activate');
        // console.log({route, state});
        // return false;
        return this.AuthCheckStatus();
    }
    
}