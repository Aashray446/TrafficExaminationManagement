import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviourOfficerComponent } from './behaviour-officer/behaviour-officer.component';
import { EightOfficerComponent } from './eight-officer/eight-officer.component';
import { LparkingOfficerComponent } from './lparking-officer/lparking-officer.component';
import { MidLevelOfficerComponent } from './mid-level-officer/mid-level-officer.component';
import { RampOfficerComponent } from './ramp-officer/ramp-officer.component';
import { TrafficLightOfficerComponent } from './traffic-light-officer/traffic-light-officer.component';

const routes: Routes = [
    { path : '', component : BehaviourOfficerComponent },
    { path: 'eightOfficer', component: EightOfficerComponent  },
    { path: 'behaviourOfficer', component: BehaviourOfficerComponent  },
    { path: 'lparkingOfficer', component: LparkingOfficerComponent  },
    {path: 'midLevelOfficer', component: MidLevelOfficerComponent  },
    { path: 'trafficLightOfficer', component: TrafficLightOfficerComponent  },
    { path: 'rampOfficer', component: RampOfficerComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficersRoutingModule { }
