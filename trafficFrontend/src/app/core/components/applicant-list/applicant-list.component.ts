import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss']
})
export class ApplicantListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
