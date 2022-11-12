import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/core/models/applicant.model';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.scss']
})
export class ApplicantDetailComponent implements OnInit {

    applicant : Applicant | null = null;

    dataAvailable = false;


  constructor(private _applicantDetails : ApplicantDetailsService) { }

  ngOnInit(): void {

   this._applicantDetails.currentApplicant.subscribe(
        (data) => {
            if(data) {
                this.applicant = data;
            this.dataAvailable = true;
            return
            }
            this.dataAvailable = false;
            this.applicant = null;

        })
  }



}
