import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'routesmanagement',
    templateUrl: './routesmanagement.component.html'
})
export class RoutesManagementComponent {
    public routes: Route[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Route/Get').subscribe(result => {
            this.routes = result.json() as Route[];
        }, error => console.error(error));
    }
}

interface Route {
    id: number;
    driver: string;
    truck: number;
    date: string;
}
