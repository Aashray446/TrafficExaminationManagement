import { Component, OnDestroy, OnInit } from '@angular/core';
import { Applicant } from '../../models/applicant.model';
import { ApplicantService } from '../../service/applicant.service';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.scss']
})
export class ApplicantProfileComponent implements OnInit{

    valCheck:boolean = false;

    currentApplicant : Applicant = {
    applicantId: 0,
    name: '',
    serialNumber: '',
    tokken: 0,
    photo: '',
    applicantDetails: null
    }

  constructor(private _applicantService : ApplicantService) { }

  ngOnInit(): void {
    this._applicantService.currentApplicant.subscribe((data)=>{
      this.currentApplicant = data;
    })
  }


  updateFields() {
    this._applicantService.toBeUpdateApplicant!.name = this.currentApplicant.name;
    this._applicantService.toBeUpdateApplicant!.tokken = this.currentApplicant.tokken;
    this._applicantService.toBeUpdateApplicant!.serialNumber = this.currentApplicant.serialNumber;
  }

  update() {
    this._applicantService.updateApplicant();
    }

}
