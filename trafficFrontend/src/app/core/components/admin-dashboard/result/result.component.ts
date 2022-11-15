import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/core/models/applicant.model';
import { ApplicantService } from 'src/app/core/service/applicant.service';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
    table = "resultTable"
    applicants : any[] = [];
    selectedDate : Date = new Date();

    constructor( private _applicantService : ApplicantService) {}


    ngOnInit(): void {
        this._applicantService.currentApplicants.subscribe(
            {
                next : (result:any)=> {
                    console.log(result)
                    this.applicants = result;
                }
            }
        )
    }

    getResult(type:boolean | null) {
        this._applicantService.getByDate(this.selectedDate.toLocaleDateString(), type);
    }

    getPassStatus(applicant:Applicant) {
        if(applicant.passStatus != null) {
            return "Passed";
        } else if (applicant.passStatus == null) {
            return "Not Decided";
        }
        else {
            return "Failed";
        }
    }

    getObtainedMarks(applicant:any) {
        let obtainedMarks = 100;
        applicant.ApplicantDetail?.eightPattern?.lineTouch ? obtainedMarks -= 5 : obtainedMarks;
        applicant.ApplicantDetail?.eightPattern?.poleTouch ? obtainedMarks -= 5 : obtainedMarks ;
        applicant.ApplicantDetail?.trafficLightPattern?.uTurn ? obtainedMarks -= 10 : obtainedMarks;
        applicant.ApplicantDetail?.trafficLightPattern?.trafficLight ? obtainedMarks -= 15 : obtainedMarks;
        applicant.ApplicantDetail?.rampPattern?.breakerOne ? obtainedMarks -= 5 : obtainedMarks;
        applicant.ApplicantDetail?.rampPattern?.breakerTwo ? obtainedMarks -= 5 : obtainedMarks;
        applicant.ApplicantDetail?.behaviourPattern?.first ? obtainedMarks -= 3 : obtainedMarks;
        applicant.ApplicantDetail?.behaviourPattern?.second ? obtainedMarks -= 4 : obtainedMarks;
        applicant.ApplicantDetail?.behaviourPattern?.third ? obtainedMarks -= 3 : obtainedMarks;
        return obtainedMarks;
    }


    getPDF() {
        const doc = new jsPDF();

        doc.setFontSize(18)
        doc.text('With content', 0, 0)
        doc.setFontSize(11)
        doc.setTextColor(100)

        autoTable(doc, { html: "#resultTable" })
        doc.save('result-' + new Date().toLocaleDateString() + '.pdf')
    }
}
