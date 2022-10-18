import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviourCheckboxComponent } from '../shared-forms/behaviour-checkbox/behaviour-checkbox.component';
import { BehaviourOfficerComponent } from './behaviour-officer/behaviour-officer.component';
import { LparkingOfficerComponent } from './lparking-officer/lparking-officer.component';
import { MidLevelOfficerComponent } from './mid-level-officer/mid-level-officer.component';
import { RampOfficerComponent } from './ramp-officer/ramp-officer.component';
import { TokenSearchComponent } from './token-search/token-search.component';
import { TrafficLightOfficerComponent } from './traffic-light-officer/traffic-light-officer.component';

const routes: Routes = [
    { path : '', component : TokenSearchComponent, children : [
        { path: 'eightOfficer', component:  BehaviourCheckboxComponent },
        { path: 'behaviourOfficer', component: BehaviourOfficerComponent  },
        { path: 'lparkingOfficer', component: LparkingOfficerComponent  },
        {path: 'midLevelOfficer', component: MidLevelOfficerComponent  },
        { path: 'trafficLightOfficer', component: TrafficLightOfficerComponent  },
        { path: 'rampOfficer', component: RampOfficerComponent  }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficersRoutingModule { }
