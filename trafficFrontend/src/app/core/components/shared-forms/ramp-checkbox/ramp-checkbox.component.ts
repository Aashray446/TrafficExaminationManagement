import { Component, OnInit } from '@angular/core';
import { rampPattern } from 'src/app/core/models/applicantDetails.interface';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';

@Component({
  selector: 'app-ramp-checkbox',
  templateUrl: './ramp-checkbox.component.html',
  styleUrls: ['./ramp-checkbox.component.scss']
})
export class RampCheckboxComponent implements OnInit {

    remarksOptions = [
        "Line Touch", "Start Off +1", "Foot used"
    ]

    rampPattern : rampPattern = {
       breakerOne : false,
       breakerTwo : false,
       fail: false,
       failRemarks: "",
       officerId: 0

    }



  constructor(private _applicantDetailsService: ApplicantDetailsService) { }

  ngOnInit(): void {
  }

  update() {
    this._applicantDetailsService.AnyPattern = this.rampPattern;
}

}
