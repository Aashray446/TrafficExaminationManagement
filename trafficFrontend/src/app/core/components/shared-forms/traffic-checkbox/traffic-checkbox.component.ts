import { Component, OnInit } from '@angular/core';
import { trafficLightPattern } from 'src/app/core/models/applicantDetails.interface';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';
import { ApplicantService } from 'src/app/core/service/applicant.service';

@Component({
  selector: 'app-traffic-checkbox',
  templateUrl: './traffic-checkbox.component.html',
  styleUrls: ['./traffic-checkbox.component.scss']
})
export class TrafficCheckboxComponent implements OnInit {

    trafficLightPattern:trafficLightPattern = {
        uTurn: false,
        trafficLight: false,
        fail: false,
        officerId: 0
    }

  constructor(private _applicantDetailsService: ApplicantDetailsService, private _applicant : ApplicantService) { }

  ngOnInit(): void {

    this._applicant.currentApplicant.subscribe((data)=>{
        if(data) {
          !data.applicantDetails.trafficLightPattern? true : this.trafficLightPattern = data.applicantDetails.trafficLightPattern;
        }
    })

  }

  update() {
    this._applicantDetailsService.AnyPattern = this.trafficLightPattern;
    this._applicant.toBeUpdateApplicant!.applicantDetails!.trafficLightPattern = this.trafficLightPattern;
}

}
