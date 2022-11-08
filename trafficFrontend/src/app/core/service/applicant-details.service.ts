import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ApplicantDetailsService {

public AnyPattern : any;
private CurrentApplicantId : String = '';

  constructor(private _http : HttpClient, private _message : MessageService) {
    this.currentApplicant.subscribe((data:any)=> {
        if(data) {
            this.CurrentApplicantId = data.applicantId
            return
        }
        this.CurrentApplicantId = '';
    })
   }

  public currentApplicant : Subject<any> = new Subject<any>();

  public searchByToken(tokken:string) {
  this._http.get( environment.apiBaseUrl + '/private/applicantDetails/search-by-token/' + tokken).subscribe(
    {
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
  );
}
    // this.eightPattern.officerId = JSON.parse(localStorage.getItem('user')!).id;
    // console.log(this.eightPattern);
   // return this._http.post(environment.apiBaseUrl + '/private/applicantDetails/update', data);

    public updateApplicantDetails( ) {

        // .officerId = JSON.parse(localStorage.getItem('user')!).id;c
        const user = JSON.parse(localStorage.getItem('user')!);
        console.log(this.AnyPattern)
        console.log(user)
        this.AnyPattern.officerId = user.id;
        this.AnyPattern.applicantId = this.CurrentApplicantId
        this._http.post(environment.apiBaseUrl + '/private/applicantDetails/update', this.AnyPattern).subscribe(
            {
                next: () => {
                    this._message.add({severity:'success', summary:'Success', detail:'Details Updated'});
                    this.currentApplicant.next(null);
                },
                error : (error: any) => {
                    this._message.add({severity:'error', summary:'Error', detail:error.error.error.message});
                    this.currentApplicant.next(null);
                }
            });

    }

}
