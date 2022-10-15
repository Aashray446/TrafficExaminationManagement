import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicant.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

    currentApplicantsChanged = new Subject<Applicant[]>();
    currentApplicants: Applicant[] = [
        new Applicant(45645, "Aashrsya", '4565456', 45, 'bloabloa'),
        new Applicant(45645, "Aashrsya", '4565456', 45, 'bloabloa'),
    ];

  constructor() { }

    public getApplicants(): Applicant[] {
        return this.currentApplicants;
    }

    public addApplicant(applicant:Applicant): void {
        this.currentApplicants.push(applicant);
        this.currentApplicantsChanged.next(this.currentApplicants);
    }


}
