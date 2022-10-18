import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviourCheckboxComponent } from '../shared-forms/behaviour-checkbox/behaviour-checkbox.component';
import { EightCheckboxComponent } from '../shared-forms/eight-checkbox/eight-checkbox.component';
import { LparkingCheckboxComponent } from '../shared-forms/lparking-checkbox/lparking-checkbox.component';
import { RampCheckboxComponent } from '../shared-forms/ramp-checkbox/ramp-checkbox.component';
import { TokenSearchComponent } from './token-search/token-search.component';
import { TrafficCheckboxComponent } from '../shared-forms/traffic-checkbox/traffic-checkbox.component';

const routes: Routes = [
    { path : '', component : TokenSearchComponent, children : [
        { path: 'eightOfficer', component: EightCheckboxComponent },
        { path: 'behaviourOfficer', component: BehaviourCheckboxComponent  },
        { path: 'lparkingOfficer', component: LparkingCheckboxComponent },
        {path: 'midLevelOfficer', component: RampCheckboxComponent },
        { path: 'trafficLightOfficer' , component: TrafficCheckboxComponent },
        { path: 'rampOfficer' , component: RampCheckboxComponent }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficersRoutingModule { }
