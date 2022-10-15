import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ApplicantListComponent } from '../applicant-list/applicant-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        ListboxModule,
        DropdownModule,
        MultiSelectModule,
    ],
    declarations: [DashboardComponent, SearchBarComponent, ApplicantListComponent, UserListComponent, UserDetailsComponent],
})
export class DashboardModule {}
