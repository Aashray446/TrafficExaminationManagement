import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.scss']
})
export class ApplicantProfileComponent implements OnInit {

    valCheck:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
