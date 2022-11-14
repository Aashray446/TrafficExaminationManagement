import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../models/applicant.model';
import { ApplicantService } from '../../service/applicant.service';

@Component({
  selector: 'app-search-officer',
  templateUrl: './search-officer.component.html',
  styleUrls: ['./search-officer.component.scss']
})
export class SearchOfficerComponent implements OnInit {

    tokken = "";
    applicant :Applicant | null = null;

    constructor(private applicantService: ApplicantService) {}

  passStatus : any;
  passOptions = [
    {
        name: 'Pass', value: true
    },
    {
        name: 'Fail', value: false
    }
  ];

  ngOnInit(): void {
    this.applicantService.currentApplicant.subscribe((data) => {
        this.applicant = data;
        console.log(this.applicant)
    });
  }


  update() {
    if(this.applicant) {
        this.applicant.passStatus = this.passStatus.value
        this.applicantService.toBeUpdateApplicant = this.applicant
        this.applicantService.finalUpdate()
    }

}

  logout() {
    localStorage.clear();
}

     getByTokken() {
        this.applicantService.getByTokken(this.tokken)
    }
}
