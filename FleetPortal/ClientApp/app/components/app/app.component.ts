import { Component, ViewEncapsulation, Inject } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Observable';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service'

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    currentUser: User;

    isLoggedIn$: Observable<boolean>;

    constructor(private userService: UserService, private authenticationService: AuthenticationService) {
        if (typeof window !== 'undefined') {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser') + '');
        }
    }

    ngOnInit() {
        this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    }
}
