import { Component, OnInit } from '@angular/core';
import { lParkingPattern } from 'src/app/core/models/applicantDetails.interface';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';

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

  constructor(private _applicantDetailsService: ApplicantDetailsService) { }

  ngOnInit(): void {

  }

  update() {
    this._applicantDetailsService.AnyPattern = this.lParkingPattern;
}


}
