import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Applicant } from '../models/applicant.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantDetailsService {

  constructor(private _http : HttpClient) { }

  public currentApplicant : Subject<Applicant> = new Subject<Applicant>();

  public searchByToken(tokken:string) {
  this._http.get( environment.apiBaseUrl + '/private/applicantDetails/search-by-token/' + tokken).subscribe(
    {
        next: (data:any) => {
            if(data.content.applicant[0]) {
                this.currentApplicant.next(data.content.applicant[0]);
            }
        },
        error: (err) => {

        }
    }
  );
}


}
