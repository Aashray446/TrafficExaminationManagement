import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchOfficerRoutingModule } from './search-officer-routing.module';
import { SearchOfficerComponent } from './search-officer.component';
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [
    SearchOfficerComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
   FormsModule,
    SearchOfficerRoutingModule,
    SelectButtonModule,
    InputTextModule
  ]
})
export class SearchOfficerModule { }
