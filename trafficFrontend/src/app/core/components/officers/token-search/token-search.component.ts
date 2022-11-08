import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/core/models/applicant.model';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';
import { Role } from 'src/app/core/models/role.enum';
@Component({
  selector: 'app-token-search',
  templateUrl: './token-search.component.html',
  styleUrls: ['./token-search.component.scss']
})
export class TokenSearchComponent implements OnInit {

    tokken = "";
    applicant :Applicant | null = null;
    constructor(private applicantDetail: ApplicantDetailsService) {}

    ngOnInit(): void {

        this.applicant = this.applicant

    }

    searchByToken() {
        this.applicantDetail.searchByToken(this.tokken);
    }

    send() {
        this.applicantDetail.updateApplicantDetails(Role.EightOfficer);
    }

}
