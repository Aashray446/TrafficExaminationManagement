import { Component, OnInit } from '@angular/core';
import { behaviourPattern } from 'src/app/core/models/applicantDetails.interface';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';
import { ApplicantService } from 'src/app/core/service/applicant.service';

@Component({
  selector: 'app-behaviour-checkbox',
  templateUrl: './behaviour-checkbox.component.html',
  styleUrls: ['./behaviour-checkbox.component.scss']
})
export class BehaviourCheckboxComponent implements OnInit {

   userBehaviour : behaviourPattern=  {
    first: false,
    second: false,
    third: false,
    fail: false,
    failRemarks: '',
    officerId: 0,
   };

  constructor(private _applicantDetailsService: ApplicantDetailsService, private _applicant: ApplicantService) { }

  ngOnInit(): void {
    this._applicant.currentApplicant.subscribe((data)=>{
        if(data) {
            if(data.applicantDetails.behaviourPattern) {
            this.userBehaviour = data.applicantDetails.behaviourPattern
            }
        }
    })
  }


  update() {
    this._applicantDetailsService.AnyPattern = this.userBehaviour
    this._applicant.toBeUpdateApplicant!.applicantDetails!.behaviourPattern = this.userBehaviour
}

}
