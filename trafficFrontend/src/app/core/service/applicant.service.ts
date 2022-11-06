import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicant.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {



  constructor(private _http : HttpClient) { }

    public getApplicants() {

        return this._http.get( environment.apiBaseUrl + '/private/applicant/getAll');
    }

    public addApplicant(applicant:Applicant, file:File) {

        const formData = new FormData();
        formData.append('file', file);
        formData.append('applicant', JSON.stringify(applicant));


      return this._http.post( environment.apiBaseUrl + '/private/applicant/create', formData);
    }

    public deleteApplicant(applicant:Applicant) {
        return this._http.post( environment.apiBaseUrl + '/private/applicant/delete', applicant);
    }



}
