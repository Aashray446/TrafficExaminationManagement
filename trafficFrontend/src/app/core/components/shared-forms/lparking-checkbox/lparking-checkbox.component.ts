import { Component, OnInit } from '@angular/core';
import { lParkingPattern } from 'src/app/core/models/applicantDetails.interface';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';
import { ApplicantService } from 'src/app/core/service/applicant.service';

@Component({
  selector: 'app-lparking-checkbox',
  templateUrl: './lparking-checkbox.component.html',
  styleUrls: ['./lparking-checkbox.component.scss']
})
export class LparkingCheckboxComponent implements OnInit {


    lParkingPattern:lParkingPattern = {
        onceForwarded: false,
        lineTouchFail: false,
        fail: false,
        officerId: 0
    }

  constructor(private _applicantDetailsService: ApplicantDetailsService, private _applicant: ApplicantService) { }

  ngOnInit(): void {
    this._applicant.currentApplicant.subscribe((data)=>{
        if(data) {
          !data.applicantDetails.lParkingPattern ? true : this.lParkingPattern = data.applicantDetails.lParkingPattern;
        }
    })
  }

  update() {
    this._applicantDetailsService.AnyPattern = this.lParkingPattern;
    this._applicant.toBeUpdateApplicant!.applicantDetails!.lParkingPattern = this.lParkingPattern;
}


}
