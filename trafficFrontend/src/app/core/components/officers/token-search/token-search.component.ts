import { Component, OnDestroy, OnInit } from '@angular/core';
import { Applicant } from 'src/app/core/models/applicant.model';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';

@Component({
  selector: 'app-token-search',
  templateUrl: './token-search.component.html',
  styleUrls: ['./token-search.component.scss']
})
export class TokenSearchComponent implements OnInit, OnDestroy {

    tokken = "";
    applicant :Applicant | null = null;
    constructor(private applicantDetail: ApplicantDetailsService) {}

    ngOnInit(): void {
        this.applicantDetail.currentApplicant.subscribe((data) => {
            this.applicant = data;
        });
    }

    ngOnDestroy(): void {
        this.applicantDetail.currentApplicant.unsubscribe();
    }

    searchByToken() {
        this.applicantDetail.searchByToken(this.tokken);
    }

    send() {
        this.applicantDetail.updateApplicantDetails();
    }

}
