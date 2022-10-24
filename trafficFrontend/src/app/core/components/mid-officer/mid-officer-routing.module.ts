import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MidOfficerComponent } from './mid-officer/mid-officer.component';

const routes: Routes = [
    { path : '', component : MidOfficerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MidOfficerRoutingModule { }
