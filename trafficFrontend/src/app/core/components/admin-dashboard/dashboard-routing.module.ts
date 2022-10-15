import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicantListComponent } from '../applicant-list/applicant-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserListComponent } from '../user-list/user-list.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DashboardComponent },
            {path: 'user-details', component: UserDetailsComponent},
            {path: 'user-list', component: UserListComponent},
            {path: 'applicant-list', component: ApplicantListComponent},
        ]),
    ],
    exports: [RouterModule],
})
export class DashboardsRoutingModule {}
