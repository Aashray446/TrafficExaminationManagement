import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/core/service/applicant.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

    public searchTokken = '';

    constructor(private _applicantServer : ApplicantService) {}

    ngOnInit(): void {
    }

    search(){
        this._applicantServer.getById(this.searchTokken)
    }


}
