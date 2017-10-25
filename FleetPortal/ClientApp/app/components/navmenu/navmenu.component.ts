import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'nav-menu',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css', './simple-sidebar.css']
})
export class NavMenuComponent {
    menuToggle() {
        $('#wrapper').toggleClass('toggled');
    }
}