import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/core/service/user.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { Role } from 'src/app/core/models/role.enum';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    submitted = false;

    user: any = {
        email: '',
        password: ''
    };
    constructor(public layoutService: LayoutService, private UserService : UserService, private _router : Router, private _message : MessageService) {
    }


    login() {

        this.UserService.login(this.user).subscribe(
            {
                next: (response:any) => {
                    localStorage.setItem('token', response.content.tokens.accessToken.token);
                    localStorage.setItem('expiresIn' , response.content.tokens.accessToken.expiresIn);
                    localStorage.setItem('user', JSON.stringify(response.content.user));

                    this.UserService.loggedUser.next(response.content.user);

                    return response.content.user.role == Role.Admin ? this._router.navigate(['/admin/applicant-list'])
                           : response.content.user.role == Role.EightOfficer ? this._router.navigate(['/officers/eightOfficer'])
                           : response.content.user.role == Role.BehaviourOfficer ? this._router.navigate(['/officers/behaviourOfficer'])
                           : response.content.user.role == Role.LParkingOfficer ? this._router.navigate(['/officers/lParkingOfficer'])
                            : response.content.user.role == Role.RampOfficer ? this._router.navigate(['/officers/rampOfficer'])
                            : response.content.user.role == Role.TrafficLightOfficer ? this._router.navigate(['/officers/trafficLightOfficer'])
                            : response.content.user.role == Role.MidLevelOfficer ? (this._router.navigate(['/mid-officer']))
                            : this._router.navigate(['/login']);
                },
                error: (error) => {
                    console.log(error)
                    this._message.add({severity:'error', summary:'Error', detail:error.error.error.message});
                }
            }
        )

    }

}
