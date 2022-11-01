import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../models/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor () {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const user = JSON.parse(localStorage.getItem('user')?? '' )
        const urlSegmet = state.url.split('/')
        console.log(urlSegmet)

        return !user ? false
            : user.role === Role.Admin && urlSegmet[1] === 'admin' ? true
            : user.role === Role.MidLevelOfficer && urlSegmet[1] === 'mid-officer' ? true
            : user.role === Role.EightOfficer && urlSegmet[2] === 'eightOfficer' ? true
            : user.role === Role.TrafficLightOfficer && urlSegmet[2] === 'trafficLightOfficer' ? true
            : user.role === Role.RampOfficer && urlSegmet[2] === 'rampOfficer' ? true
            : user.role === Role.LParkingOfficer && urlSegmet[2] === 'lparkingOfficer' ? true
            : user.role === Role.BehaviourOfficer && urlSegmet[2] === 'behaviourOfficer' ? true
            : false

  }

}
