import { ApplicantDetails } from "./applicantDetails.interface";
export class Applicant {
    applicantId: number;
    name: string;
    serialNumber: string;
    tokken: number | null;
    photo: String;
    applicantDetails : ApplicantDetails | null;
    passStatus : boolean | null;

    constructor(applicantId: number, name: string, serialNumber: string, tokken: number, photo: String) {
        this.applicantId = applicantId;
        this.name = name;
        this.serialNumber = serialNumber;
        this.tokken = tokken;
        this.photo = photo;
        this.applicantDetails = null;
        this.passStatus = null;
    }


}
