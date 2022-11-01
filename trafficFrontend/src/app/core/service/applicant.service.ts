import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicant.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {



  constructor(private _http : HttpClient) { }

    public getApplicants() {
        // return this.currentApplicants;
        return this._http.get( environment.apiBaseUrl + '/private/applicant/getAll');
    }

    public addApplicant(applicant:Applicant){
        // this.currentApplicants.push(applicant);
      return this._http.post( environment.apiBaseUrl + '/private/applicant/create', applicant)
    }


}
