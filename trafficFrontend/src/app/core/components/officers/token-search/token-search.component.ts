import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/core/models/applicant.model';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';

@Component({
  selector: 'app-token-search',
  templateUrl: './token-search.component.html',
  styleUrls: ['./token-search.component.scss']
})
export class TokenSearchComponent implements OnInit {

    tokken = "";
    applicantDetails :Applicant | null = null;
    constructor(private applicantDetail: ApplicantDetailsService) {}

    ngOnInit(): void {

    }

    searchByToken() {
        this.applicantDetail.searchByToken(this.tokken);
    }

}
