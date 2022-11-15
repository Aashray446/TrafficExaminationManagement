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
    public currentApplicants : Subject<any> = new Subject<null>();

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
                    this.currentApplicant.next(null)
                },
                error : (error:any)=> {
                    this._message.add({severity:'error', summary: 'Error', detail: error.error.error.message});
                }
            })
    }

    public getByTokken (tokken :String) {

        this._http.get( environment.apiBaseUrl + '/private/applicantDetails/search-by-token/' + tokken).subscribe({
            next: (data:any) => {
                if(data.content.applicant[0]) {
                    this.currentApplicant.next(data.content.applicant[0]);
                    return
                }

                this._message.add({severity:'error', summary:'Error', detail:'No Tokken found'});

            },
            error: (err) => {
                this._message.add({severity:'error', summary:'Error', detail:err.error.error.message} );
            }
        }
        )
    }

    public finalUpdate() {
        this._http.post( environment.apiBaseUrl + '/private/applicant/updatePassStatus', this.toBeUpdateApplicant).subscribe(
            {
                next : (result:any)=> {
                    this._message.add({severity:'success', summary: 'Success', detail: result.message});
                    this.currentApplicant.next(null)
                },
                error : (error:any)=> {
                    this._message.add({severity:'error', summary: 'Error', detail: error.error.error.message});
                }
            })
    }

    public getByDate(date: string, type:boolean | null) {

        this._http.post( environment.apiBaseUrl + '/private/applicant/getAllByDate/', {date : date, type : type}).subscribe({
            next: (data:any) => {
                if(data.content.applicant.length > 0) {
                    this.currentApplicants.next(data.content.applicant);
                    return
                }

                this._message.add({severity:'error', summary:'Error', detail:'No Applicant found'});

            },
            error: (err) => {
                this._message.add({severity:'error', summary:'Error', detail:err.error.error.message} );
            }
        }
        )
    }


}
