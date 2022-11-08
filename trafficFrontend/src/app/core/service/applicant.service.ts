import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicant.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

    public currentApplicant : Subject<any> = new Subject<null>();
    public toBeUpdateApplicant : Applicant | null = null;

  constructor(private _http : HttpClient, private _message :MessageService) { }

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

    public getById(applicantId: string) {
        this._http.get( environment.apiBaseUrl + '/private/applicant/getById/' + applicantId ).subscribe(
            {
                next : (result:any)=> {
                    const applicant:Applicant = result.content.applicant
                    applicant.applicantDetails = result.content.applicantDetails
                    this.toBeUpdateApplicant = applicant;
                    this.currentApplicant.next(applicant)
                },
                error : (error:any)=> {
                    this._message.add({severity:'error', summary: 'Error', detail: error.error.error.message});
                    this.toBeUpdateApplicant = null;

                }
            }
        )
    }

    public updateApplicant() {
        this._http.post( environment.apiBaseUrl + '/private/applicant/update', this.toBeUpdateApplicant).subscribe(
            {
                next : (result:any)=> {
                    this._message.add({severity:'success', summary: 'Success', detail: result.message});

                },
                error : (error:any)=> {
                    this._message.add({severity:'error', summary: 'Error', detail: error.error.error.message});
                }
            })
    }

}
