import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EightCheckboxComponent } from './eight-checkbox/eight-checkbox.component';
import { TrafficCheckboxComponent } from './traffic-checkbox/traffic-checkbox.component';
import { RampCheckboxComponent } from './ramp-checkbox/ramp-checkbox.component';
import { LparkingCheckboxComponent } from './lparking-checkbox/lparking-checkbox.component';
import { BehaviourCheckboxComponent } from './behaviour-checkbox/behaviour-checkbox.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext";
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [
    EightCheckboxComponent,
    TrafficCheckboxComponent,
    RampCheckboxComponent,
    LparkingCheckboxComponent,
    BehaviourCheckboxComponent,
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    MultiSelectModule
  ],
  exports : [
    CheckboxModule,
    FormsModule,
    InputTextModule,
  ]
})
export class SharedFormsModule { }
