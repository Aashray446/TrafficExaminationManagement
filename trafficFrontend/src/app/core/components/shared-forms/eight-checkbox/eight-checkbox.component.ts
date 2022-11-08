import { Component, OnInit } from '@angular/core';
import { eightPattern } from 'src/app/core/models/applicantDetails.interface';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';
import { ApplicantService } from 'src/app/core/service/applicant.service';
@Component({
  selector: 'app-eight-checkbox',
  templateUrl: './eight-checkbox.component.html',
  styleUrls: ['./eight-checkbox.component.scss']
})
export class EightCheckboxComponent implements OnInit {


    userEightPattern: eightPattern;

  constructor(private _applicantDetailsService: ApplicantDetailsService, private _applicant: ApplicantService)  {
   this.userEightPattern = {
        lineTouch: false,
        poleTouch: false,
        fail: false,
        officerId: 0,
    }
  }

  ngOnInit(): void {
    this._applicant.currentApplicant.subscribe((data)=>{
        if(data) {
          !data.applicantDetails.eightPattern ? true : this.userEightPattern = data.applicantDetails.eightPattern;
        }
    })
  }

    update() {
        this._applicantDetailsService.AnyPattern = this.userEightPattern;
        this._applicant.toBeUpdateApplicant!.applicantDetails!.eightPattern = this.userEightPattern;
    }
}
