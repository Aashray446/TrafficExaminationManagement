import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicantListComponent } from '../applicant-list/applicant-list.component';
import { ApplicantProfileComponent } from '../applicant-profile/applicant-profile.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DashboardComponent },
            {path: 'user-details', component: UserDetailsComponent},
            {path: 'user-list', loadChildren: () => import('../user-list/user-list.module').then(m => m.UserListModule)},
            {path: 'applicant-list', component: ApplicantListComponent},
            {path: 'applicant-profile/:id', component: ApplicantProfileComponent},
        ]),
    ],
    exports: [RouterModule],
})
export class DashboardsRoutingModule {}
