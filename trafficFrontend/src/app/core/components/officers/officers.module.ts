import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficersRoutingModule } from './officers-routing.module';
import { EightOfficerComponent } from './eight-officer/eight-officer.component';
import { TrafficLightOfficerComponent } from './traffic-light-officer/traffic-light-officer.component';
import { RampOfficerComponent } from './ramp-officer/ramp-officer.component';
import { LparkingOfficerComponent } from './lparking-officer/lparking-officer.component';
import { BehaviourOfficerComponent } from './behaviour-officer/behaviour-officer.component';
import { MidLevelOfficerComponent } from './mid-level-officer/mid-level-officer.component';
import { AutoCompleteModule } from "primeng/autocomplete";
import { TokenSearchComponent } from './token-search/token-search.component';
import { ButtonModule } from 'primeng/button';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { SharedFormsModule } from '../shared-forms/shared-forms.module';

@NgModule({
    imports: [
        CommonModule,
        OfficersRoutingModule,
        AutoCompleteModule,
        ButtonModule,
        SharedFormsModule
      ],
  declarations: [

    EightOfficerComponent,
    TrafficLightOfficerComponent,
    RampOfficerComponent,
    LparkingOfficerComponent,
    BehaviourOfficerComponent,
    MidLevelOfficerComponent,
    TokenSearchComponent,
    ApplicantDetailComponent
  ],
})
export class OfficersModule { }
