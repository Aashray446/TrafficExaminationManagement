import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AuthGuard } from './core/service/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {path: '', loadChildren: () => import('./core/components/auth/auth.module').then( (m) => m.AuthModule)},
                { path: 'pages/notfound', component: NotfoundComponent },
                {path: 'admin', component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './core/components/admin-dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                            canActivate: [AuthGuard]
                        },
                    ],
                },
                {path: 'mid-officer', loadChildren: () => import('./core/components/mid-officer/mid-officer.module').then( (m) => m.MidOfficerModule), canActivate: [AuthGuard]},
                {path: 'search-officer', loadChildren: () => import('./core/components/search-officer/search-officer.module').then( (m) => m.SearchOfficerModule), canActivate: [AuthGuard]},
                {path: 'officers', loadChildren: () => import('./core/components/officers/officers.module').then((m) => m.OfficersModule), canActivate: [AuthGuard]},
                { path: '**', redirectTo: 'pages/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
