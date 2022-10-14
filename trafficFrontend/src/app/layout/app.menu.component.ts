import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/loggedIn'] }
                ]
            },
            {
                label: 'Manage',
                items: [
                    { label: 'Users', icon: 'pi pi-fw pi-user', routerLink: ['/uikit/misc'] },
                    { label: 'Applicant', icon: 'pi pi-fw pi-database', routerLink: ['/uikit/misc'] }
                ]
            },
        ];
    }
}
