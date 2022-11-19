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
    tokken: null,
    photo: '',
    applicantDetails: null,
    passStatus: null
    }

  constructor(private _applicantService : ApplicantService) { }

  ngOnInit(): void {
    this._applicantService.currentApplicant.subscribe((data)=>{
        if(data) {
            this.currentApplicant = data
        }
        else {
            this.currentApplicant = {
                applicantId: 0,
                name: '',
                serialNumber: '',
                tokken: 0,
                photo: '',
                applicantDetails: null,
                passStatus: null
                }
        }
    })
  }


  updateFields() {
    this._applicantService.toBeUpdateApplicant!.name = this.currentApplicant.name;
    this._applicantService.toBeUpdateApplicant!.tokken = this.currentApplicant.tokken;
    this._applicantService.toBeUpdateApplicant!.serialNumber = this.currentApplicant.serialNumber;
    this._applicantService.toBeUpdateApplicant!.passStatus = this.currentApplicant.passStatus;
    console.log(this._applicantService.toBeUpdateApplicant);
    console.log(this.currentApplicant);

  }

  update() {
    this._applicantService.updateApplicant();
    }

}
