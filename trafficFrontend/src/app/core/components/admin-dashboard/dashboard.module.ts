import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ApplicantListComponent } from '../applicant-list/applicant-list.component';
import { AutoCompleteModule } from "primeng/autocomplete";
import { ApplicantProfileComponent } from '../applicant-profile/applicant-profile.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { SharedFormsModule } from '../shared-forms/shared-forms.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        CheckboxModule,
        InputTextareaModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        ListboxModule,
        DropdownModule,
        MultiSelectModule,
        AutoCompleteModule,
        SharedFormsModule
    ],
    declarations: [DashboardComponent, SearchBarComponent, ApplicantListComponent, UserListComponent, UserDetailsComponent, ApplicantProfileComponent],
})
export class DashboardModule {}
