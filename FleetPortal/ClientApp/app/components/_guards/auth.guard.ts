import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (isPlatformBrowser(this.platformId)) {

            if (localStorage.getItem('currentUser')) {
                // logged in so return true
                return true;
            }
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};