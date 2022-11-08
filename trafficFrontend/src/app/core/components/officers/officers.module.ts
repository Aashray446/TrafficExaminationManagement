import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficersRoutingModule } from './officers-routing.module';

import {ToolbarModule } from 'primeng/toolbar';
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
        ToolbarModule,
        SharedFormsModule,
      ],
  declarations: [
    TokenSearchComponent,
    ApplicantDetailComponent
  ],
})
export class OfficersModule { }
