import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Applicant',
                items: [
                    {
                        label: 'Applicant',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/admin/applicant-list'],
                    },
                    {
                        label : 'Result',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/admin/result-list'],
                    }
                ],
            },
            {
                label: 'User',
                items: [
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/admin/user-list'],
                    },
                ],
            },
        ];
    }
}
