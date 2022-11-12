import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchOfficerComponent } from './search-officer.component';

const routes: Routes = [
    { path: '', component : SearchOfficerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchOfficerRoutingModule { }
